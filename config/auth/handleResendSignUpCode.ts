import { resendSignUpCode } from 'aws-amplify/auth';

type SignUpParameters = {
  email: string;
};

async function handleResendSignUpCode({ email }: SignUpParameters) {
  try {
    return await resendSignUpCode({
      username: email,
    });
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export default handleResendSignUpCode;