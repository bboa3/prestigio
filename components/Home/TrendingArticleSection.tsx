import useStorage from '@/hooks/create/useStorage';
import { Article, ArticleCategory, Category, Media, User } from '@/types/schema';
import { formatDateNumeric } from '@/utils/date/formatter';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ArticleCategoryComponent from '@/components/Home/ArticleCategoryComponent';

interface Props {
  articles: Article[];
}

const TrendingArticleSection: React.FC<Props> = ({ articles }) => {
  return (
    <section className="trending-section mb-10">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <h2 className="sec-title has-line">Notícias de última hora</h2>
          </div>
          <div className="col-xl-4">
            <div className="d-none d-xl-block">
              <h2 className="sec-title has-line">Tendências desta semana</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3">
            <div className="row gy-4">
              {articles.slice(1, 3).map((article) => (
                <SecondaryTrendingArticle key={article.id} article={article} />
              ))}
            </div>
          </div>
          <div className="col-xl-5 mt-4 mt-xl-0">
            <MainTrendingArticle article={articles[0]} />
          </div>
          <div className="col-xl-4 mt-35 mt-xl-0">
            <div className="d-block d-xl-none">
              <h2 className="sec-title has-line">Tendências desta semana</h2>
            </div>
            <div className="row gy-4">
              {articles.slice(3, 5).map((article) => (
                <ThirdTrendingArticle key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MainTrendingArticle: React.FC<{ article: Article }> = ({ article }) => {
  const { getUrl } = useStorage();
  const [categories, setCategories] = useState<ArticleCategory[]>([]);
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

      setCategories(categoriesData as unknown as ArticleCategory[]);
      setFeaturedImage(featuredImageData as unknown as Media);
      setAuthor(authorData as User);
    })();
  }, [article]);

  if (!article || categories.length === 0 || !featuredImage || !author)
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton className="my-2" variant="rounded" width="100%" height={130} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );

  return (
    <div className="main-trending-article">
      <div className="blog-style1 style-big">
        <div className="blog-img">
          <Image
            width={600}
            height={600}
            src={getUrl(featuredImage.url)}
            alt={article.title}
          />
          {categories[0] && <ArticleCategoryComponent articleCategory={categories[0]} />}
        </div>
        <h3 className="box-title-30">
          <Link href={`/publicacao/${article.slug}`} className="hover-line">
            {article.title}
          </Link>
        </h3>
        <div className="blog-meta">
          <Link href={`/autor/${author?.id}`}>
            <i className="far fa-user"></i> By - {author?.name || 'Unknown'}
          </Link>
          <Link href={`/publicacao/${article.slug}`}>
            <i className="fal fa-calendar-days"></i> {formatDateNumeric(article.createdAt)}
          </Link>
        </div>
      </div>
    </div>
  );
};

const SecondaryTrendingArticle: React.FC<{ article: Article }> = ({ article }) => {
  const { getUrl } = useStorage();
  const [categories, setCategories] = useState<ArticleCategory[]>([]);
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

      setCategories(categoriesData as unknown as ArticleCategory[]);
      setFeaturedImage(featuredImageData as unknown as Media);
      setAuthor(authorData as User);
    })();
  }, [article]);

  if (!article || categories.length === 0 || !featuredImage || !author)
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );

  return (
    <div className="col-xl-12 col-sm-6 border-blog secondary-trending-article">
      <div className="blog-style1">
        <div className="blog-img">
          <Image
            width={600}
            height={600}
            src={getUrl(featuredImage.url)}
            alt={article.title}
          />
          {categories[0] && <ArticleCategoryComponent articleCategory={categories[0]} />}
        </div>
        <h3 className="box-title-22">
          <Link href={`/publicacao/${article.slug}`} className="hover-line">
            {article.title}
          </Link>
        </h3>
        <div className="blog-meta">
          <Link href={`/autor/${author?.id}`}>
            <i className="far fa-user"></i> Por - {author?.name || 'Unknown'}
          </Link>
          <Link href={`/publicacao/${article.slug}`}>
            <i className="fal fa-calendar-days"></i> {formatDateNumeric(article.createdAt)}
          </Link>
        </div>
      </div>
    </div>
  );
};

const ThirdTrendingArticle: React.FC<{ article: Article }> = ({ article }) => {
  const { getUrl } = useStorage();
  const [categories, setCategories] = useState<ArticleCategory[]>([]);
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);

  useEffect(() => {
    (async () => {
      if (!article) return;
      const [{ data: categoriesData }, { data: featuredImageData }, { data: authorData }] = await Promise.all([
        article.categories(),
        article.featuredImage(),
        article.author(),
      ]);

      setCategories(categoriesData as unknown as ArticleCategory[]);
      setFeaturedImage(featuredImageData as unknown as Media);
    })();
  }, [article]);

  if (!article || categories.length === 0 || !featuredImage)
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );

  return (
    <div className="col-xl-12 col-md-6 border-blog third-trending-article">
      <div className="blog-style2">
        <div className="blog-img">
          <Image
            width={600}
            height={600}
            src={getUrl(featuredImage.url)}
            alt={article.title}
          />
        </div>
        <div className="blog-content">
          {categories[0] && <ArticleCategoryComponent articleCategory={categories[0]} />}
          <h3 className="box-title-20">
            <Link href={`/publicacao/${article.slug}`} className="hover-line">
              {article.title}
            </Link>
          </h3>
          <div className="blog-meta">
            <Link href={`/publicacao/${article.slug}`}>
              <i className="fal fa-calendar-days"></i> {formatDateNumeric(article.createdAt)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingArticleSection;
