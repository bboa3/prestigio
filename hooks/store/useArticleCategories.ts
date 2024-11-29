import { Schema } from '@/amplify/data/resource';
import { Category, ListOptions } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>({
  authMode: 'identityPool',
});

function useArticleCategories(options?: ListOptions) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);

      try {
        const { data: categoriesData, errors, nextToken: newNextToken } = await client.models.category.list(options);

        if (errors && errors.length > 0) {
          throw new Error(errors[0].message);
        }

        if (!categoriesData) {
          throw new Error('ListCategories: Empty response from server');
        }

        setCategories(categoriesData as Category[]);
        setNextToken(newNextToken || null);
      } catch (err: any) {
        setError(new Error('Erro buscando categorias'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [options]);

  return { categories, loading, error, nextToken };
}

export default useArticleCategories;