import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { webClientId } from '@utils/env';
import * as AppleAuthentication from 'expo-apple-authentication';
import Realm from 'realm';

GoogleSignin.configure({ webClientId });

export interface SignInForm {
  app: Realm.App;
}

async function logInWithApple({ app }: SignInForm): Promise<void> {
  try {
    const appleCredential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });

    if (!appleCredential.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }

    const { identityToken } = appleCredential;
    const firebaseCredential = auth.AppleAuthProvider.credential(identityToken);
    const userCredential = await auth().signInWithCredential(firebaseCredential);

    const firebaseUser = userCredential.user;

    if (!firebaseUser.displayName) {
      await firebaseUser.updateProfile({
        displayName: appleCredential.fullName?.givenName,
      });
    }

    const userIdToken = await firebaseUser.getIdToken()
    const credentials = Realm.Credentials.jwt(userIdToken);
    await app.logIn(credentials);

  } catch (error: any) {
    if (error.code === 'ERR_REQUEST_CANCELED') {
      throw new Error('O login com Apple foi cancelado.');
    }

    if (error.code === 'auth/invalid-credential') {
      throw new Error('Credenciais inválidas, verifique seu e-mail e senha e tente novamente.');
    }

    if (error.code === 'auth/user-disabled') {
      throw new Error('A sua conta foi desativada, entre em contato com o suporte para mais informações.');
    }

    if (error.code === 'auth/account-exists-with-different-credential') {
      throw new Error('Já existe uma conta com o mesmo e-mail, por favor, faça login com o e-mail e senha cadastrados.');
    }

    console.error(error.message);
    throw new Error('Erro ao fazer login, tente novamente mais tarde.');
  }
}

export default logInWithApple;