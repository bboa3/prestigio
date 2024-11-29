import { Schema } from '@/amplify/data/resource';
import { Article, ListOptions } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>({
  authMode: 'identityPool',
});

function useArticles(options?: ListOptions) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);

      try {
        const { data: articlesData, errors, nextToken: newNextToken } = await client.models.article.list(options);

        if (errors && errors.length > 0) {
          throw new Error(errors[0].message);
        }

        if (!articlesData) {
          throw new Error('ListArticles: Empty response from server');
        }

        setArticles(articlesData as Article[]);
        setNextToken(newNextToken || null);
      } catch (err: any) {
        setError(new Error('Erro buscando artigos'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [options]);

  return { articles, loading, error, nextToken };
}

export default useArticles;