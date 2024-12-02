import useStorage from "@/hooks/create/useStorage";
import { Article, ArticleCategory, Category, Media, User } from "@/types/schema"
import { Skeleton } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import ArticleCategoryComponent from "./ArticleCategoryComponent";
import { formatDateTimeNumeric } from "@/utils/date/formatter";
import useRelatedArticles from "@/hooks/store/useRelatedArticles";

interface Props {
  articleCategories: ArticleCategory[];
}

const RelatedArticles: React.FC<Props> = ({ articleCategories }) => {
  const categoriesOption = useMemo(() => ({ categoryIds: articleCategories.map((ac) => ac.categoryId) }), [articleCategories]);
  const { articles } = useRelatedArticles(categoriesOption);

  return (
    <div className="related-post-wrapper pt-30 mb-30">
      <div className="row align-items-center">
        <div className="col">
          <h2 className="sec-title has-line">Publicações relacionada</h2>
        </div>
        <div className="col-auto">
          <div className="sec-btn">
            <div className="icon-box">
              <button data-slick-prev="#related-post-slide" className="slick-arrow default">
                <i className="far fa-arrow-left"></i>
              </button>
              <button data-slick-next="#related-post-slide" className="slick-arrow default">
                <i className="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row slider-shadow th-carousel"
        id="related-post-slide"
        data-slide-show="3"
        data-lg-slide-show="2"
        data-md-slide-show="2"
        data-sm-slide-show="2"
      >
        {articles.map((article) => (
          <RelatedArticle key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

const RelatedArticle: React.FC<{ article: Article }> = ({ article }) => {
  const { getUrl } = useStorage();
  const [articleCategories, setArticleCategories] = useState<ArticleCategory[]>([]);
  const [author, setAuthor] = useState<User | null>(null);
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);

  useEffect(() => {
    (async () => {
      if (!article) return;
      const [{ data: categoriesData }, { data: featuredImageData }, { data: authorData }] = await Promise.all([
        article.categories(),
        article.featuredImage(),
        article.author(),
      ]);

      setArticleCategories(categoriesData as unknown as ArticleCategory[]);
      setFeaturedImage(featuredImageData as unknown as Media);
      setAuthor(authorData as User);
    })();
  }, [article]);

  if (!article || !featuredImage || !articleCategories || !author) {
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );
  }

  return (
    <div className="col-sm-6 col-xl-4">
      <div className="blog-style1">
        <div className="blog-img">
          <Image
            src={getUrl(featuredImage.url)}
            alt="blog image"
            width={400}
            height={300}
          />
          {
            articleCategories[0] ? <ArticleCategoryComponent articleCategory={articleCategories[0]} /> : null
          }
        </div>
        <h3 className="box-title-22">
          <Link href={`/publicacao/${article.slug}`} className="hover-line">
            {article.title}
          </Link>
        </h3>
        <div className="blog-meta">
          <Link href={`/autor/${author.id}`}>
            <i className="far fa-user"></i>Por - {author.name}
          </Link>
          <span>
            <i className="fal fa-calendar-days"></i>
            {formatDateTimeNumeric(article.publishedAt)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default RelatedArticles;