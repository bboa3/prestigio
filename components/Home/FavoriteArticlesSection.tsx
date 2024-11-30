import useStorage from '@/hooks/create/useStorage';
import { Article, ArticleCategory, Category, Media, User } from '@/types/schema';
import { formatDateNumeric } from '@/utils/date/formatter';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Props {
  articles: Article[];
}

const FavoriteArticlesSection: React.FC<Props> = ({ articles }) => {
  return (
    <div className="space dark-theme bg-title-dark">
      <div className="container">
        <h2 className="sec-title has-line text-center">Artigos Favoritos</h2>
        <div className="row gy-4 mb-4">
          {articles.slice(0, 2).map((article) => (
            <MainFavoriteArticle key={article.id} article={article} />
          ))}
        </div>
        <div className="row gy-4">
          {articles.slice(2, 5).map((article) => (
            <SecondaryFavoriteArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MainFavoriteArticle: React.FC<{ article: Article }> = ({ article }) => {
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

  if (!article || !featuredImage || !categories.length || !author) {
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
    <div className="col-lg-6">
      <div className="blog-style3">
        <div className="blog-img">
          <Image width={600} height={600} src={getUrl(featuredImage.url)} alt={article.title} />
        </div>
        <div className="blog-content">
          {categories[0] && <ArticleCategoryComponent articleCategory={categories[0]} />}
          <h3 className="box-title-30">
            <Link className="hover-line" href={`/article/${article.slug}`}>
              {article.title}
            </Link>
          </h3>
          <div className="blog-meta">
            <Link href={`/author/${author.id}`}>
              <i className="far fa-user"></i> Por - {author.name || 'Desconhecido'}
            </Link>
            <Link href={`/article/${article.slug}`}>
              <i className="fal fa-calendar-days"></i> {formatDateNumeric(article.createdAt)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondaryFavoriteArticle: React.FC<{ article: Article }> = ({ article }) => {
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

  if (!article || !featuredImage || !categories.length || !author) {
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );
  }

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="blog-style1">
        <div className="blog-img">
          <Image width={600} height={600} src={getUrl(featuredImage.url)} alt={article.title} />
          {categories[0] && <ArticleCategoryComponent articleCategory={categories[0]} />}
        </div>
        <h3 className="box-title-22">
          <Link href={`/article/${article.slug}`} className="hover-line">
            {article.title}
          </Link>
        </h3>
        <div className="blog-meta">
          <Link href={`/author/${author.id}`}>
            <i className="far fa-user"></i> Por - {author.name || 'Desconhecido'}
          </Link>
          <Link href={`/article/${article.slug}`}>
            <i className="fal fa-calendar-days"></i> {formatDateNumeric(article.createdAt)}
          </Link>
        </div>
      </div>
    </div>
  );
};

const categoryColors = [
  "#007BFF",
  "#E8137D",
  "#8750A6",
  "#4E4BD0",
  "#00D084",
  "#FF9500",
  "#E7473C",
  "#59C2D6",
];

const getRandomColor = () => categoryColors[Math.floor(Math.random() * categoryColors.length)];

const ArticleCategoryComponent: React.FC<{ articleCategory: ArticleCategory }> = ({ articleCategory }) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [color, setColor] = useState<string>(getRandomColor);

  useEffect(() => {
    (async () => {
      if (!articleCategory) return;
      const { data: categoryData } = await articleCategory.category();
      setCategory(categoryData as unknown as Category);
      setColor(getRandomColor);
    })();
  }, [articleCategory]);

  return (
    <Link
      href={`/category/${category?.slug}`}
      className="category"
      style={{ backgroundColor: color }}
    >
      {category?.name || 'General'}
    </Link>
  );
};

export default FavoriteArticlesSection;
