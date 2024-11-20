import { confirmResetPassword, signIn } from 'aws-amplify/auth';

interface ConfirmSignUpParameters {
  email: string;
  newPassword: string;
  code: string;
}

async function handleResetPasswordConfirmation({ email, code, newPassword }: ConfirmSignUpParameters) {
  try {
    await confirmResetPassword({
      username: email,
      newPassword: newPassword,
      confirmationCode: code
    });

    await signIn({
      username: email,
      password: newPassword
    });
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

export default handleResetPasswordConfirmation;