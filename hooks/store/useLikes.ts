import { Schema } from '@/amplify/data/resource';
import useUser from '@/hooks/store/useUser';
import { Like, User } from '@/types/schema';
import { generateClient } from 'aws-amplify/data';
import { useCallback, useEffect, useState } from 'react';

const client = generateClient<Schema>();

function useLikes() {
  const { user } = useUser();
  const [error, setError] = useState<Error | null>(null);
  const [likes, setLikes] = useState<Like[]>([]);

  const refreshLikes = useCallback(async (user: User) => {
    const { data: likes, errors } = await client.models.like.list({
      filter: { userId: { eq: user.id } }
    });
    if (errors) throw new Error(errors[0].message);
    return likes;
  }, []);

  useEffect(() => {
    (async () => {
      if (user) {
        try {
          const likes = await refreshLikes(user);
          setLikes(likes);
        } catch (err) {
          setError(new Error('Erro buscando likes'));
          console.log(err)
        }
      } else {
        setLikes([]);
      }
    })();
  }, [user, refreshLikes]);

  const checkIfArticleIsLiked = useCallback(
    (articleId: string): boolean => likes.some((like) => like.articleId === articleId),
    [likes]
  );

  const addLike = useCallback(async (articleId: string) => {
    if (user && !checkIfArticleIsLiked(articleId)) {
      try {
        const { errors } = await client.models.like.create({
          articleId,
          userId: user.id,
        });
        if (errors) throw new Error(errors[0].message);

        const updatedLikes = await refreshLikes(user);
        setLikes(updatedLikes);
      } catch (err) {
        setError(new Error('Erro adicionando like'));
        console.log(err)
      }
    }
  }, [user, checkIfArticleIsLiked, refreshLikes]);

  const removeLike = useCallback(async (articleId: string) => {
    if (user && checkIfArticleIsLiked(articleId)) {
      try {
        const { errors } = await client.models.like.delete({ articleId });
        if (errors) throw new Error(errors[0].message);

        const updatedLikes = await refreshLikes(user);
        setLikes(updatedLikes);
      } catch (err) {
        setError(new Error('Erro removendo like'));
        console.log(err)
      }
    }
  }, [user, checkIfArticleIsLiked, refreshLikes]);

  return { error, likes, addLike, removeLike, checkIfArticleIsLiked };
}

export default useLikes;
