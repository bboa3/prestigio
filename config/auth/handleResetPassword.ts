import { resetPassword } from 'aws-amplify/auth';

type ResetPasswordParameters = {
  email: string;
};

async function handleResetPassword({ email }: ResetPasswordParameters) {
  try {
    return await resetPassword({
      username: email,
    });
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export default handleResetPassword;