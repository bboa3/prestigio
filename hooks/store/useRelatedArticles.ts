import { Schema } from '@/amplify/data/resource';
import { Article, ArticleCategory, ListOptions } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>({
  authMode: 'identityPool',
});

interface Options {
  categoryIds: string[];
  limit?: number;
  nextToken?: string;
}

function useRelatedArticles(options: Options) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);

      try {
        const articleCategoryOptions = {
          filter: {
            or: options.categoryIds.map((id) => ({ categoryId: { eq: id } })),
          },
        };

        const { data: articleCategoryData, errors: acErrors } = await client.models.articleCategory.list(articleCategoryOptions);

        if (acErrors && acErrors.length > 0) {
          throw new Error(acErrors[0].message);
        }

        if (!articleCategoryData || articleCategoryData.length === 0) {
          return { articles: [], nextToken: null };
        }

        const articleIds = articleCategoryData.map((ac) => ac.articleId);
        const uniqueArticleIds = Array.from(new Set(articleIds));

        const articleOptions = {
          filter: {
            or: uniqueArticleIds.map((articleId) => ({ id: { eq: articleId } })),
          },
          limit: options.limit,
          nextToken: options.nextToken,
        };

        const { data: articlesData, errors: articleErrors, nextToken: newNextToken } = await client.models.article.list(articleOptions);

        if (articleErrors && articleErrors.length > 0) {
          throw new Error(articleErrors[0].message);
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

export default useRelatedArticles;