import ArticleCategoryComponent from "@/components/Article/ArticleCategoryComponent";
import useStorage from "@/hooks/create/useStorage";
import { Article, ArticleCategory, Media, User } from "@/types/schema";
import { formatDateNumeric } from "@/utils/date/formatter";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  article: Article
  author: User
}
const AuthorArticle: React.FC<Props> = ({ article, author }) => {
  const { getUrl } = useStorage();
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);
  const [articleCategories, setArticleCategories] = useState<ArticleCategory[]>([]);

  useEffect(() => {
    (async () => {
      if (!article) return;

      const [{ data: categoriesData }, { data: featuredImageData }] = await Promise.all([
        article.categories(),
        article.featuredImage(),
      ]);

      setArticleCategories(categoriesData as unknown as ArticleCategory[]);
      setFeaturedImage(featuredImageData as unknown as Media);
    })();
  }, [article]);

  if (!article || !featuredImage) {
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );
  }

  return (
    <div className="mb-4 border-blog ">
      <div className="blog-style4">
        <div className="blog-img w-270">
          <Image
            src={getUrl(featuredImage.url)}
            alt={article.title || "Imagem da publicação"}
            width={200}
            height={200}
          />
        </div>
        <div className="blog-content">
          {
            articleCategories[0] && (
              <ArticleCategoryComponent articleCategory={articleCategories[0]} />
            )
          }

          <h3 className="box-title-22"><Link className="hover-line" href={`/publicacao/${article.slug}`}>{article.title}</Link></h3>
          <div className="blog-meta">
            <Link href={`/autor/${author.id}`}><i className="far fa-user"></i>Por - {author.name}</Link>
            <Link href={`/publicacao/${article.slug}`}><i className="fal fa-calendar-days"></i>{formatDateNumeric(article.publishedAt)}</Link>
          </div>
          <button className="th-btn style2">Ler mais<i className="fas fa-arrow-up-right ms-2"></i></button>
        </div>
      </div>
    </div>
  )
}

export default AuthorArticle