import { Schema } from '@/amplify/data/resource';
import { Article, Category } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>({
  authMode: 'identityPool',
});

function useCategory(idOrSlug: string) {
  const [category, setCategory] = useState<Category | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: categoryDataList, errors } = await client.models.category.list({
          filter: {
            or: [
              { id: { eq: idOrSlug } },
              { slug: { eq: idOrSlug } },
            ],
          },
          limit: 2,
        });

        if (errors) {
          throw new Error(errors[0].message);
        }

        if (!categoryDataList[0]) {
          throw new Error('Category not found');
        }

        const categoryData = categoryDataList[0];
        setCategory(categoryData);

        const { data: articleCategoriesData } = await categoryData.articles();

        const articlesResult = await Promise.all(articleCategoriesData.map(articleCategory => client.models.article.get({ id: articleCategory.articleId })));
        const articlesData = articlesResult.map(result => result.data)

        setArticles(articlesData as unknown as Article[]);
      } catch (err) {
        setError(new Error('Erro buscando categoria'));
        console.error(err);
      }
    };

    fetch();
  }, [idOrSlug]);

  return {
    category,
    articles,
    error,
  };
}

export default useCategory;
