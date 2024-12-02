import React, { useEffect, useState } from "react";
import Image from "next/image";
import useStorage from "@/hooks/create/useStorage";
import { Article, ArticleCategory, Category, Media, User } from "@/types/schema";
import { formatDateNumeric } from "@/utils/date/formatter";
import Link from "next/link";
import { Skeleton } from "@mui/material";

interface Props {
  categories: Category[];
  featuredArticles: Article[];
  tags: string[];
}

const Sidebar: React.FC<Props> = ({ categories, featuredArticles, tags }) => {

  return (
    <div className="col-xxl-3 col-lg-4 sidebar-wrap">
      <aside className="sidebar-area">
        <div className="widget widget_search">
          <form className="search-form">
            <input type="text" placeholder="Enter Keyword" />
            <button type="submit">
              <i className="far fa-search"></i>
            </button>
          </form>
        </div>
        <div className="widget widget_categories">
          <h3 className="widget_title">Categorias</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={`/category/${category.slug}`} data-bg-src={`assets/img/bg/${category.slug}.jpg`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="widget">
          <h3 className="widget_title">Publicações recentes</h3>
          <div className="recent-post-wrap">
            {featuredArticles.slice(0, 4).map((article) => (
              <FeaturedArticle key={article.slug} article={article} />
            ))}
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget_title">Etiquetas populares</h3>
          <div className="tagcloud">
            {tags.map((tag, index) => (
              <span key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

const FeaturedArticle: React.FC<{ article: Article }> = ({ article }) => {
  const { getUrl } = useStorage();
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);

  useEffect(() => {
    (async () => {
      if (!article) return;

      const [{ data: featuredImageData }] = await Promise.all([
        article.featuredImage(),
      ]);

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
    <div className="recent-post">
      <div className="media-img">
        <Link href={`/publicacao/${article.slug}`}>
          <Image
            src={getUrl(featuredImage.url)}
            alt={article.title}
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="media-body">
        <h4 className="post-title">
          <Link href={`/publicacao/${article.slug}`} className="hover-line">
            {article.title}
          </Link>
        </h4>
        <div className="recent-post-meta">
          <span>
            <i className="fal fa-calendar-days"></i>{" "}
            {formatDateNumeric(article.publishedAt)}
          </span>
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
