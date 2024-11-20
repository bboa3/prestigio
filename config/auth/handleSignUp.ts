import { signUp } from 'aws-amplify/auth';

type SignUpParameters = {
  password: string;
  email: string;
};

async function handleSignUp({ password, email }: SignUpParameters) {
  try {
    return await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email: email
        },
        autoSignIn: true
      }
    });
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export default handleSignUp;