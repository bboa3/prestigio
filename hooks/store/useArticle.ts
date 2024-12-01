import { Schema } from '@/amplify/data/resource';
import { Article, ArticleCategory, Comment, ContentBlock, Like, Media, User, View } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';

const client = generateClient<Schema>({
  authMode: 'identityPool',
});

function useArticle(idOrSlug: string) {
  const [article, setArticle] = useState<Article | null>(null);
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [likes, setLikes] = useState<Like[] | null>(null);
  const [views, setViews] = useState<View[] | null>(null);
  const [author, setAuthor] = useState<User | null>(null);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[] | null>(null);
  const [articleCategories, setArticleCategories] = useState<ArticleCategory[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: articleDataList, errors } = await client.models.article.list({
          filter: {
            or: [
              { id: { eq: idOrSlug } },
              { slug: { eq: idOrSlug } },
            ],
          },
        });

        const articleData = articleDataList[0];


        if (errors) {
          throw new Error(errors[0].message);
        }

        if (!articleData) {
          throw new Error('GetArticle: Empty response from server');
        }

        const [
          { data: featuredImageData },
          { data: commentsData },
          { data: likesData },
          { data: viewsData },
          { data: authorData },
          { data: contentBlocksData },
          { data: categoriesData },
        ] = await Promise.all([
          articleData.featuredImage(),
          articleData.comments(),
          articleData.likes(),
          articleData.views(),
          articleData.author(),
          articleData.contentBlocks(),
          articleData.categories(),
        ]);

        setArticle(articleData as unknown as Article);
        setFeaturedImage(featuredImageData as unknown as Media);
        setComments(commentsData as unknown as Comment[]);
        setLikes(likesData as unknown as Like[]);
        setViews(viewsData as unknown as View[]);
        setAuthor(authorData as unknown as User);
        setContentBlocks(contentBlocksData as unknown as ContentBlock[]);
        setArticleCategories(categoriesData as unknown as ArticleCategory[]);
      } catch (err) {
        setError(new Error('Erro buscando artigo'));
        console.error(err)
      }
    }

    fetch()
  }, [idOrSlug]);

  return {
    article,
    featuredImage,
    comments,
    likes,
    views,
    author,
    contentBlocks,
    articleCategories,
    error,
  };
}

export default useArticle;