import { UserRole } from '@/types/schema';
import { fetchAuthSession } from 'aws-amplify/auth';

const getUserAuthGroup = async () => {
  const session = await fetchAuthSession();
  const authId = session.userSub
  const identityId = session.identityId
  const accessToken = session.tokens?.accessToken;

  if (accessToken && authId && identityId) {
    const { payload } = accessToken
    const groups = payload["cognito:groups"] as string[] || []

    if (groups.includes("ADMIN")) {
      return {
        authId,
        identityId,
        authGroup: UserRole.ADMIN,
      }
    }
    if (groups.includes("EDITOR")) {
      return {
        authId,
        identityId,
        authGroup: UserRole.EDITOR
      }
    }

    if (groups.includes("AUTHOR")) {
      return {
        authId,
        identityId,
        authGroup: UserRole.AUTHOR
      }
    }

    return {
      authId,
      identityId,
      authGroup: UserRole.SUBSCRIBER
    }
  }

  if (identityId) {
    return {
      authId,
      identityId,
      authGroup: UserRole.SUBSCRIBER
    }
  }

  return null;
};

export default getUserAuthGroup;