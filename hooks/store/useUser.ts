import { Schema } from '@/amplify/data/resource';
import { useAuth } from '@/Context/AuthContext';
import { User } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useRef, useState } from 'react';

const client = generateClient<Schema>();

function useUser() {
  const { user: currentUser } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const subscriptionRef = useRef<any>(null);

  useEffect(() => {
    const refreshUser = async () => {
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
        setUser(userData as User);
      } catch (err) {
        setError(new Error('Erro buscando usuário'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    refreshUser();
  }, [currentUser]);

  useEffect(() => {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
      subscriptionRef.current = null;
    }

    if (user) {
      subscriptionRef.current = client.models.user.onUpdate({ filter: { id: { eq: user.id } } }).subscribe({
        next: async (userData) => {
          try {
            setUser(userData as User);
          } catch (err) {
            setError(new Error('Erro buscando usuário'));
            console.error(err);
          }
        },
        error: (err) => {
          setError(new Error('Erro buscando usuário'));
          console.error(err);
        },
      });
    }

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        subscriptionRef.current = null;
      }
    };
  }, [user]);

  return {
    user,
    loading,
    error,
  };
}

export default useUser;