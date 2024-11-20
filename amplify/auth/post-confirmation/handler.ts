import { env } from '$amplify/env/post-confirmation';
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { uuidv7 } from 'uuidv7';
import { type Schema } from "../../data/resource";
import { UserRole } from './graphql/API';
import { createUser } from "./graphql/mutations";
import { listUsers } from "./graphql/queries";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: "iam",
});

export const handler: PostConfirmationTriggerHandler = async (event) => {
  const { data: users } = await client.graphql({
    query: listUsers,
    variables: {
      filter: {
        authId: {
          eq: event.request.userAttributes.sub,
        },
      },
    }
  })

  if (users.listUsers.items.length > 0) {
    return event;
  }

  await client.graphql({
    query: createUser,
    variables: {
      input: {
        id: uuidv7(),
        authId: event.request.userAttributes.sub,
        name: event.userName,
        email: event.request.userAttributes.email,
        role: UserRole.SUBSCRIBER,
        profilePicture: event.request.userAttributes.picture,
      },
    },
  });

  return event;
};