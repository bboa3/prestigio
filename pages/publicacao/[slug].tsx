import ArticleCategoryComponent from "@/components/Article/ArticleCategoryComponent";
import ArticleContentBlock from "@/components/Article/ArticleContentBlock";
import AuthorInfo from "@/components/Article/AuthorInfo";
import CommentForm from "@/components/Article/CommentForm";
import Comments from "@/components/Article/Comments";
import RelatedArticles from "@/components/Article/RelatedArticles";
import Sidebar from "@/components/Article/Sidebar";
import SimpleLayout from "@/components/Layout/SimpleLayout";
import LoadingIndicator from "@/components/LoadingIndicator";
import useStorage from "@/hooks/create/useStorage";
import useArticle from "@/hooks/store/useArticle";
import useCategories from "@/hooks/store/useCategories";
import useFeaturedArticles from "@/hooks/store/useFeaturedArticles";
import useMedias from "@/hooks/store/useMedias";
import { formatDateTimeNumeric } from "@/utils/date/formatter";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

interface Props {
  slug: string;
}

const ArticlePage: React.FC<Props> = ({ slug }) => {
  const { article, articleCategories, comments, author, featuredImage, contentBlocks } = useArticle(slug);
  const categoriesOption = useMemo(() => ({ filter: { isDeleted: { eq: false } }, limit: 6 }), []);
  const galleryOption = useMemo(() => ({ limit: 6 }), []);
  const { getUrl } = useStorage();

  const { medias } = useMedias(galleryOption);
  const { categories } = useCategories(categoriesOption);
  const { articles: featured } = useFeaturedArticles({ limit: 5 });

  if (
    !articleCategories ||
    !contentBlocks ||
    !featuredImage ||
    !author ||
    !article ||
    !medias ||
    !categories ||
    !featured ||
    !comments
  ) {
    return <LoadingIndicator />;
  }

  return (
    <SimpleLayout
      title={article.title}
      description={
        article.excerpt ||
        "Revista Prestígio - Revista de economia, negócios, desporto e cultura em Moçambique"
      }
      keywords={article.tags.join(", ")}
      categories={categories}
      featuredArticles={featured}
      gallery={medias}
    >
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-lg-8">
              <div className="th-blog blog-single">
                {
                  articleCategories[0] ? <ArticleCategoryComponent articleCategory={articleCategories[0]} /> : null
                }
                <h2 className="fs-5 fw-bold">{article.title}</h2>
                <div className="blog-meta">
                  <Link href={`/author/${author.id}`} className="author">
                    <i className="far fa-user"></i>Por - {author.name}
                  </Link>
                  <span>
                    <i className="fal fa-calendar-days"></i>
                    {formatDateTimeNumeric(article.publishedAt)}
                  </span>
                  <span><i className="far fa-comments"></i>Comentários ({comments?.length || 0})</span>
                  <span><i className="far fa-book-open"></i>6 Mins Leitura</span>
                </div>
                <div className="w-full h-200 ove">
                  <Image
                    src={getUrl(featuredImage.url)}
                    alt={article.title}
                    width={800}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className="blog-content-wrap">
                  <div className="share-links-wrap">
                    <div className="share-links">
                      <span className="share-links-title">Share Post:</span>
                      <div className="multi-social">
                        <Link target="_blank" rel="noreferrer" href="https://web.facebook.com/prestigiomz/?_rdc=1&_rdr"><i className="fab fa-facebook-f"></i></Link>
                        <Link target="_blank" rel="noreferrer" href="https://www.twitter.com/"><i className="fab fa-twitter"></i></Link>
                        <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                        <Link target="_blank" rel="noreferrer" href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></Link>
                      </div>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-info-wrap">
                      <button className="blog-info print_btn" onClick={() => window.print()}>
                        Imprimir :
                        <i className="fas fa-print"></i>
                      </button>
                      <a className="blog-info" href="mailto:">
                        Email :
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                    <div className="content">
                      {contentBlocks.map((block, index) => <ArticleContentBlock key={index} block={block} />)}
                    </div>
                    <div className="blog-tag">
                      <h6 className="title">Related Tag :</h6>
                      <div className="tagcloud">
                        {article.tags.map((tag, index) => (
                          <span key={index}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AuthorInfo author={author} />
              <Comments comments={comments} />
              <CommentForm />
              <RelatedArticles articleCategories={articleCategories} />
              <Sidebar
                categories={categories}
                featuredArticles={featured}
                tags={article.tags}
              />
            </div>
          </div>
        </div>
      </section>
    </SimpleLayout>
  );
};

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug

  return {
    props: {
      slug
    },
    revalidate: 60 * 10
  }
}

