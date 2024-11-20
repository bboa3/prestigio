import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { webClientId } from '@utils/env';
import Realm from 'realm';

GoogleSignin.configure({ webClientId });

export interface SignInForm {
  app: Realm.App;
}

async function logInWithGoogle({ app }: SignInForm): Promise<void> {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredential)
    const firebaseUser = userCredential.user;

    const userIdToken = await firebaseUser.getIdToken()
    const credentials = Realm.Credentials.jwt(userIdToken);
    await app.logIn(credentials);

  } catch (error: any) {
    if (error.code === 'auth/invalid-credential') {
      throw new Error('Credenciais inválidas, verifique seu e-mail e senha e tente novamente.');
    }

    if (error.code === 'auth/user-disabled') {
      throw new Error('A sua conta foi desativada, entre em contato com o suporte para mais informações.');
    }

    if (error.code === 'auth/account-exists-with-different-credential') {
      throw new Error('Já existe uma conta com o mesmo e-mail, por favor, faça login com o e-mail e senha cadastrados.');
    }

    console.error(error);
    throw new Error('Erro ao fazer login, tente novamente mais tarde.');
  }
}

export default logInWithGoogle;