import Ads from "@/components/Home/Ads";
import FavoriteArticlesSection from "@/components/Home/FavoriteArticlesSection";
import FeaturedArticlesSection from "@/components/Home/FeaturedArticlesSection";
import TrendingArticleSection from "@/components/Home/TrendingArticleSection";
import SimpleLayout from "@/components/Layout/SimpleLayout";
import useCategories from "@/hooks/store/useCategories";
import useFavoriteArticles from "@/hooks/store/useFavoriteArticles";
import useFeaturedArticles from "@/hooks/store/useFeaturedArticles";
import useMedias from "@/hooks/store/useMedias";
import useTrendingArticles from "@/hooks/store/useTrendingArticles";
import { useMemo } from "react";

export default function App() {
  const featuredOption = useMemo(() => ({ limit: 5 }), []);
  const favoriteOption = useMemo(() => ({ limit: 7 }), []);
  const trendingOption = useMemo(() => ({ limit: 6 }), []);
  const categoriesOption = useMemo(() => ({ filter: { isDeleted: { eq: false } }, limit: 6 }), []);
  const galleryOption = useMemo(() => ({ limit: 6 }), []);

  const { medias } = useMedias(galleryOption);
  const { categories } = useCategories(categoriesOption);
  const { articles: featured } = useFeaturedArticles(featuredOption);
  const { articles: favorite } = useFavoriteArticles(favoriteOption);
  const { articles: trending } = useTrendingArticles(trendingOption);

  return (
    <SimpleLayout
      title='Revista - Prestígio'
      description='Revista Prestígio - Revista de economia, negócios, desporto e cultura em moçambique'
      keywords='Revista Prestígio, Revista, economia, negócios, desporto, cultura, moçambique'
      categories={categories}
      featuredArticles={featured}
      gallery={medias}
    >
      <FeaturedArticlesSection articles={featured} />
      <TrendingArticleSection articles={trending} />
      <Ads />
      <FavoriteArticlesSection articles={favorite} />
    </SimpleLayout>
  );
}
