import { Schema } from '@/amplify/data/resource';
import { ListOptions, Media } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>({
  authMode: 'identityPool',
});

function useMedias(options?: ListOptions) {
  const [medias, setMedias] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMedias = async () => {
      setLoading(true);

      try {
        const { data: mediasData, errors, nextToken: newNextToken } = await client.models.media.list(options);

        if (errors && errors.length > 0) {
          throw new Error(errors[0].message);
        }

        if (!mediasData) {
          throw new Error('ListMedias: Empty response from server');
        }

        console.log(mediasData);

        setMedias(mediasData as Media[]);
        setNextToken(newNextToken || null);
      } catch (err: any) {
        setError(new Error('Erro buscando midias'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedias();
  }, [options]);

  return { medias, loading, error, nextToken };
}

export default useMedias;
