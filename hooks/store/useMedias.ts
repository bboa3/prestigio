import { Schema } from '@/amplify/data/resource';
import { ListOptions, Media } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useRef, useState } from 'react';

const client = generateClient<Schema>();

function useMedias(options?: ListOptions) {
  const [medias, setMedias] = useState<Media[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const subscriptionRef = useRef<any>(null);

  useEffect(() => {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
      subscriptionRef.current = null;
    }

    subscriptionRef.current = client.models.media.observeQuery(options).subscribe({
      next: async ({ items, isSynced }) => {
        if (!isSynced) return;

        try {
          setMedias(items as Media[]);
        } catch (err) {
          setError(new Error('Error fetching medias'));
          console.error(err);
        }
      },
      error: (err) => {
        setError(new Error('Erro buscando medias'));
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

  return { medias, error };
}

export default useMedias;
