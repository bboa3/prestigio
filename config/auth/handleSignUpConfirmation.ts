import { autoSignIn, confirmSignUp } from 'aws-amplify/auth';

interface ConfirmSignUpParameters {
  email: string;
  code: string;
}

async function handleSignUpConfirmation({ email, code }: ConfirmSignUpParameters) {
  try {
    await confirmSignUp({
      username: email,
      confirmationCode: code
    });

    await autoSignIn();
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

export default handleSignUpConfirmation;