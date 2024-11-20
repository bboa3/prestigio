import { Schema } from '@/amplify/data/resource';
import { useAuth } from '@/Context/AuthContext';
import { User } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>();

function useUser() {
  const { user: currentUser } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (!currentUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const { data, errors } = await client.models.user.list({ filter: { authId: { eq: currentUser.authId } } });

        if (errors?.length) {
          throw new Error(`Error fetching user: ${errors[0].message}`);
        }

        if (!data || data.length === 0) {
          throw new Error('No user found with the provided authId');
        }

        const userData = data[0];

        setUser(userData as unknown as User);
      } catch (err) {
        setError(new Error('Erro buscando usuário'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [currentUser]);

  return {
    user,
    error,
    loading
  };
}

export default useUser;
