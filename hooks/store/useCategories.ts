import { Schema } from '@/amplify/data/resource';
import { Category, ListOptions } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useRef, useState } from 'react';

const client = generateClient<Schema>();

function useCategories(options?: ListOptions) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const subscriptionRef = useRef<any>(null);

  useEffect(() => {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
      subscriptionRef.current = null;
    }

    subscriptionRef.current = client.models.category.observeQuery(options).subscribe({
      next: async ({ items, isSynced }) => {
        if (!isSynced) return;

        try {
          setCategories(items as Category[]);
        } catch (err) {
          setError(new Error('Erro buscando categorias'));
          console.error(err);
        }
      },
      error: (err) => {
        setError(new Error('Erro buscando categorias'));
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

  return { categories, error };
}

export default useCategories;
