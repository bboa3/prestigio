import ArticleCategoryComponent from "@/components/Category/ArticleCategoryComponent";
import useStorage from "@/hooks/create/useStorage";
import useMedias from "@/hooks/store/useMedias";
import { Article, Category } from "@/types/schema";
import { Link, Skeleton } from "@mui/material";
import Image from 'next/image';
import { useMemo } from "react";

const CategoryArticle: React.FC<{ article: Article, category: Category }> = ({ article, category }) => {
  const { getUrl } = useStorage();
  const options = useMemo(() => ({ filter: { articleId: { eq: article?.id } } }), [article?.id]);
  const { medias: medias } = useMedias(options);

  const featuredImage = medias[5];

  console.log('featuredImage', featuredImage);

  if (!article || !featuredImage || !category) {
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
          <Image width={600} height={600} src={getUrl(featuredImage.url)} alt={article.title || 'Imagem do artigo'} />
          <ArticleCategoryComponent category={category} />
        </div>
        <h3 className="box-title-20">
          <Link href={`/publicacao/${article.slug}`} className="hover-line">
            {article.title}
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default CategoryArticle  