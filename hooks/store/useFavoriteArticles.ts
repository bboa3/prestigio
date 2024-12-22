import useArticles from '@/hooks/store/useArticles';
import { ArticleStatus } from '@/types/schema';
import { useMemo } from 'react';

interface ListOptions {
  limit?: number;
  nextToken?: string;
  startDate?: string; // ISO date string
  endDate?: string;   // ISO date string
}

function useFavoriteArticles(options?: ListOptions) {
  const publishedAtFilter = options?.startDate && options?.endDate ? { between: [options.startDate, options.endDate] } : undefined;

  const featuredOption = useMemo(() => ({
    limit: options?.limit || 5,
    filter: {
      isDeleted: { eq: false },
      status: { eq: ArticleStatus.PUBLISHED },
      publishedAt: publishedAtFilter
    },
    nextToken: options?.nextToken,
  }), [options]);

  const { articles, loading, error, nextToken } = useArticles(featuredOption);

  const sortedArticles = articles.sort((a, b) => b.likeCount - a.likeCount);

  return { articles: sortedArticles, loading, error, nextToken };
}

export default useFavoriteArticles;
