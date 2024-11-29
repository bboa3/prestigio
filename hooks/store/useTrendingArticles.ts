import { Schema } from '@/amplify/data/resource';
import { useAuth } from '@/Context/AuthContext';
import { Article, ArticleStatus } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>();

interface ListOptions {
  limit?: number;
  nextToken?: string;
  sortDirection?: 'ASC' | 'DESC';
}

function useTrendingArticles(options?: ListOptions) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data: articlesData, errors, nextToken: newNextToken } = await client.models.article.listarticleByStatusAndPublishedAtAndViewCount({
          status: ArticleStatus.PUBLISHED,
          ...options
        })

        if (errors) {
          throw new Error(errors[0].message);
        }

        if (!articlesData) {
          throw new Error('ListArticles: Empty response from server');
        }

        setArticles(articlesData as Article[]);
        setNextToken(newNextToken || null);
      } catch (err) {
        setError(new Error('Erro buscando artigos'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [options, user]);

  return { articles, loading, error, nextToken };
}

export default useTrendingArticles;
