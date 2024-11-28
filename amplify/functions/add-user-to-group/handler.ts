import { env } from "$amplify/env/add-user-to-group";
import {
  AdminAddUserToGroupCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { Schema } from "../../data/resource";

const client = new CognitoIdentityProviderClient()

type Handler = Schema['addUserToGroup']['functionHandler']

export const handler: Handler = async (event, context) => {
  try {
    const { userId, groupName } = event.arguments
    const command = new AdminAddUserToGroupCommand({
      Username: userId,
      GroupName: groupName,
      UserPoolId: env.AMPLIFY_AUTH_USERPOOL_ID,
    })

    await client.send(command)
    return { content: 'Done' };
  } catch (e) {
    console.log("Exception");
    console.log(e);
    console.log("Incoming event");
    console.log(event);
    return { content: "An unexpected error has occured while processing your request." };
  }
}