import { ArticleCategory, Category } from "@/types/schema";
import Link from "next/link";
import { useState, useEffect } from "react";

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
      href={`/categoria/${category?.slug}`}
      className="category"
      style={{ backgroundColor: color }}
    >
      {category?.name || 'General'}
    </Link>
  );
};

export default ArticleCategoryComponent;