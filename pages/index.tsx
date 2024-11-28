import Ads from "@/components/Home/Ads";
import BlogArea from "@/components/Home/BlogAreaFirstSection";
import BlogAreaSecondSection from "@/components/Home/BlogAreaSecondSection";
import BlogAreaThirdSection from "@/components/Home/BlogAreaThirdSection";
import EditorChoice from "@/components/Home/EditorChoice";
import Favorite from "@/components/Home/Favorite";
import SimpleLayout from "@/components/Layout/SimpleLayout";
import useArticles from "@/hooks/store/useArticles";
import { ArticleStatus } from "@/types/schema";
import { useMemo } from "react";

export default function App() {
  const nowArticlesOption = useMemo(() => ({
    filter: { isDeleted: { eq: false }, status: { eq: ArticleStatus.PUBLISHED } },
    limit: 5
  }), []);
  const { articles: now } = useArticles(nowArticlesOption);

  return (
    <SimpleLayout
      title='Revista - Prestígio'
      description='Revista Prestígio - Revista de economia, negócios, desporto e cultura em moçambique'
      keywords='Revista Prestígio, Revista, economia, negócios, desporto, cultura, moçambique'
    >
      <BlogArea />
      <BlogAreaSecondSection />
      <Ads />
      <BlogAreaThirdSection />
      <EditorChoice />
      <Favorite />
    </SimpleLayout>
  );
}
