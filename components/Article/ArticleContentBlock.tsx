import useStorage from "@/hooks/create/useStorage";
import { ContentBlock, Media } from "@/types/schema"
import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react"
import Image from "next/image";

interface Props {
  block: ContentBlock
}

const ArticleContentBlock: React.FC<Props> = ({ block }) => {
  const { getUrl } = useStorage();
  const [medias, setMedias] = useState<Media[]>([]);

  useEffect(() => {
    (async () => {
      if (!block) return;
      const [{ data: mediasData }] = await Promise.all([
        block.medias(),
      ]);

      setMedias(mediasData as unknown as Media[]);
    })();
  }, [block]);

  if (!medias || !block) {
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-4xl font-bold">
        {block.title}
      </h3>
      <div className="my-4 py-lg-2">
        {
          medias.length > 0 && medias.map((media) => (
            <Image
              key={media.id}
              src={getUrl(media.url)}
              alt={block.title || "Image"}
              width={800}
              height={500}
              layout="responsive"
            />
          ))
        }
      </div>
      <p>{block.content}</p>;
    </div>
  )
}

export default ArticleContentBlock;