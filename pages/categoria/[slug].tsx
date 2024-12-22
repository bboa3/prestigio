import CategoryArticle from '@/components/Category/CategoryArticle';
import NoArticlesMessage from '@/components/Category/NoArticlesMessage';
import SimpleLayout from '@/components/Layout/SimpleLayout';
import LoadingIndicator from '@/components/LoadingIndicator';
import useCategories from '@/hooks/store/useCategories';
import useCategory from '@/hooks/store/useCategory';
import useFeaturedArticles from '@/hooks/store/useFeaturedArticles';
import useMedias from '@/hooks/store/useMedias';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useMemo } from 'react';

interface Props {
  slug: string
}

const Category: React.FC<Props> = ({ slug }) => {
  const { category, articles } = useCategory(slug)
  const categoriesOption = useMemo(() => ({ filter: { isDeleted: { eq: false } }, limit: 6 }), []);
  const galleryOption = useMemo(() => ({ limit: 6 }), []);

  const { medias } = useMedias(galleryOption);
  const { categories } = useCategories(categoriesOption);
  const { articles: featured } = useFeaturedArticles({ limit: 5 });

  if (!category || !articles || !medias || !categories || !featured) {
    return <LoadingIndicator />;
  }

  return (
    <SimpleLayout
      title={category.name}
      description={category.description || 'Revista Prestígio - Revista de economia, negócios, desporto e cultura em moçambique'}
      keywords='Revista Prestígio, Revista, economia, negócios, desporto, cultura, moçambique'
      categories={categories}
      featuredArticles={featured}
      gallery={medias}
    >
      <section className="space">
        <div className="container">
          <div className="row gy-30">
            {articles.length > 0 ? (
              articles.map((article) => (
                <CategoryArticle key={article.slug} article={article} category={category} />
              ))
            ) : (
              <NoArticlesMessage category={category?.name} />
            )}
          </div>
          {/* <div className="th-pagination mt-40 mb-0 text-center">
          <ul>
            <li><a href="blog.html">01</a></li>
            <li><a href="blog.html">02</a></li>
            <li><a href="blog.html">03</a></li>
            <li><a href="blog.html"><i className="fas fa-arrow-right"></i></a></li>
          </ul>
        </div> */}
        </div>
      </section>
    </SimpleLayout>
  );
};

export default Category;


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