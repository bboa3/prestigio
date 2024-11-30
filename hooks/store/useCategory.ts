import { Schema } from '@/amplify/data/resource';
import { User } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>({
  authMode: 'identityPool',
});

function useAuthor(id: string) {
  const [author, setAuthor] = useState<User[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: authorData, errors } = await client.models.user.get({ id });

        if (errors) {
          throw new Error(errors[0].message);
        }

        if (!authorData) {
          throw new Error('Getauthor: Empty response from server');
        }

        setAuthor(authorData as unknown as User[]);
      } catch (err) {
        setError(new Error('Erro buscando artigo'));
        console.error(err)
      }
    }

    fetch()
  }, [id]);

  return {
    author,
    error,
  };
}

export default useAuthor;