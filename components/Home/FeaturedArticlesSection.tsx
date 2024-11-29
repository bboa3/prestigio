import useStorage from '@/hooks/create/useStorage';
import { Article, Category, Media, User } from '@/types/schema';
import { formatDateNumeric } from '@/utils/date/formatter';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Props {
  articles: Article[];
}

const FeaturedArticlesSection: React.FC<Props> = ({ articles }) => {
  return (
    <section className="space">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-4 mb-xl-0">
            <div className="row gy-4">
              {articles[0] && <MainFeaturedArticle article={articles[0]} />}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row gy-4">
              {articles.slice(1, 3).map((article) => (
                <SecondaryFeaturedArticle key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MainFeaturedArticle: React.FC<{ article: Article }> = ({ article }) => {
  const { getUrl } = useStorage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [author, setAuthor] = useState<User | null>(null);
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);

  useEffect(() => {
    (async () => {
      const [{ data: categoriesData }, { data: featuredImageData }, { data: authorData }] = await Promise.all([
        article.categories(),
        article.featuredImage(),
        article.author(),
      ]);

      setCategories(categoriesData as unknown as Category[]);
      setFeaturedImage(featuredImageData as unknown as Media);
      setAuthor(authorData as User);
    })();
  }, [article]);

  if (!article || !featuredImage || !categories[0] || !author) {
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton className="my-2" variant="rounded" width="100%" height={130} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );
  }

  return (
    <div className="dark-theme img-overlay2">
      <div className="blog-style3">
        <div className="blog-img">
          <Image src={getUrl(featuredImage.url)} alt={article.title || 'Imagem do artigo'} />
        </div>
        <div className="blog-content">
          <Link href={`/category/${categories[0]?.slug}`} passHref>
            <a data-theme-color="#007BFF" className="category">
              {categories[0]?.name || 'General'}
            </a>
          </Link>
          <h3 className="box-title-30">
            <Link href={`/article/${article.slug}`}>
              <a className="hover-line">{article.title}</a>
            </Link>
          </h3>
          <div className="blog-meta">
            <Link href={`/author/${author.id}`}>
              <a>
                <i className="far fa-user"></i> Por - {author.name || 'Desconhecido'}
              </a>
            </Link>
            <Link href={`/article/${article.slug}`}>
              <a>
                <i className="fal fa-calendar-days"></i> {formatDateNumeric(article.createdAt)}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondaryFeaturedArticle: React.FC<{ article: Article }> = ({ article }) => {
  const { getUrl } = useStorage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [author, setAuthor] = useState<User | null>(null);
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);

  useEffect(() => {
    (async () => {
      const [{ data: categoriesData }, { data: featuredImageData }, { data: authorData }] = await Promise.all([
        article.categories(),
        article.featuredImage(),
        article.author(),
      ]);

      setCategories(categoriesData as unknown as Category[]);
      setFeaturedImage(featuredImageData as unknown as Media);
      setAuthor(authorData as User);
    })();
  }, [article]);

  if (!article || !featuredImage || !categories[0] || !author) {
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );
  }

  return (
    <div className="col-xl-6 col-md-6 dark-theme img-overlay2">
      <div className="blog-style3">
        <div className="blog-img">
          <Image src={getUrl(featuredImage.url)} alt={article.title || 'Imagem do artigo'} />
        </div>
        <div className="blog-content">
          <Link href={`/category/${categories[0]?.slug}`} passHref>
            <a data-theme-color="#4E4BD0" className="category">
              {categories[0]?.name || 'General'}
            </a>
          </Link>
          <h3 className="box-title-18">
            <Link href={`/article/${article.slug}`}>
              <a className="hover-line">{article.title}</a>
            </Link>
          </h3>
          <div className="blog-meta">
            <Link href={`/author/${author.id}`}>
              <a>
                <i className="far fa-user"></i> Por - {author.name || 'Desconhecido'}
              </a>
            </Link>
            <Link href={`/article/${article.slug}`}>
              <a>
                <i className="fal fa-calendar-days"></i> {formatDateNumeric(article.createdAt)}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticlesSection;
