import { autoSignIn } from 'aws-amplify/auth';

async function handleAutoSignIn() {
  try {
    return await autoSignIn();
  } catch (error) {
    console.log(error);
  }
}

export default handleAutoSignIn;