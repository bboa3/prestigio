import { signIn } from 'aws-amplify/auth';

type SignInParameters = {
  password: string;
  email: string;
};

async function handleSignIn({ email, password }: SignInParameters) {
  try {
    return await signIn({
      username: email,
      password
    });
  } catch (error) {
    console.log('error signing in', error);
  }
}

export default handleSignIn;