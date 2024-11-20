import Ads from "@/components/Home/Ads";
import BlogArea from "@/components/Home/BlogAreaFirstSection";
import BlogAreaSecondSection from "@/components/Home/BlogAreaSecondSection";
import BlogAreaThirdSection from "@/components/Home/BlogAreaThirdSection";
import EditorChoice from "@/components/Home/EditorChoice";
import Favorite from "@/components/Home/Favorite";

export default function Home() {
  return (
    <>
      <BlogArea />
      <BlogAreaSecondSection />
      <Ads />
      <BlogAreaThirdSection />
      <EditorChoice />
      <Favorite />
    </>
  );
}
