import useArticles from '@/hooks/store/useArticles';
import { ArticleStatus } from '@/types/schema';
import { useMemo } from 'react';

interface ListOptions {
  limit?: number;
  nextToken?: string;
  startDate?: string; // ISO date string
  endDate?: string;   // ISO date string
}

function useFeaturedArticles(options?: ListOptions) {
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

  return useArticles(featuredOption);
}

export default useFeaturedArticles;
