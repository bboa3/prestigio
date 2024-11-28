import { Schema } from '@/amplify/data/resource';
import { ListOptions, User } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useRef, useState } from 'react';

const client = generateClient<Schema>();

function useUsers(options?: ListOptions) {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const subscriptionRef = useRef<any>(null);

  useEffect(() => {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
      subscriptionRef.current = null;
    }

    subscriptionRef.current = client.models.user.observeQuery(options).subscribe({
      next: async ({ items, isSynced }) => {
        if (!isSynced) return;

        try {
          setUsers(items as User[]);
        } catch (err) {
          setError(new Error('Erro buscando usuários'));
          console.error(err);
        }
      },

      error: (err) => {
        setError(new Error('Erro buscando usuários'));
        console.error(err);
      },
    });

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        subscriptionRef.current = null;
      }
    };
  }, [options]);

  return { users, error };
}

export default useUsers;
