import { Schema } from '@/amplify/data/resource';
import { Article, Category } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>();

function useCategory(id: string) {
  const [category, setCategory] = useState<Category | null>(null);
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data: categoryData, errors } = await client.models.category.get({ id });

        if (errors) {
          throw new Error(errors[0].message);
        }

        if (!categoryData) {
          throw new Error('GetCategory: Empty response from server');
        }

        const { data: articlesData } = await categoryData.articles();

        setCategory(categoryData as unknown as Category);
        setArticles(articlesData as unknown as Article[]);
      } catch (err) {
        setError(new Error('Error fetching category'));
        console.error(err);
      }
    };

    fetchCategory();
  }, [id]);

  return {
    category,
    articles,
    error,
  };
}

export default useCategory;
