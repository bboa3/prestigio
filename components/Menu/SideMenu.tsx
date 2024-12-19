import footerLogoBlackImg from "@/assets/img/logo-footer-black.svg";
import footerLogoImg from "@/assets/img/logo.svg";
import useStorage from "@/hooks/create/useStorage";
import { Article, Media } from "@/types/schema";
import { formatDateNumeric } from "@/utils/date/formatter";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  featuredArticles: Article[]
}

const SideMenu: React.FC<Props> = ({ featuredArticles }) => {

  return (
    <div>
      <div className="sidemenu-wrapper sidemenu-1 d-none d-md-block ">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls"><i className="far fa-times"></i></button>
          <div className="widget  ">
            <div className="th-widget-about">
              <div className="about-logo">
                <Link href="/">
                  <Image className="light-img" src={footerLogoBlackImg} alt="Prestígio" />
                </Link>
                <Link href="/">
                  <Image className="dark-img" src={footerLogoImg} alt="Prestígio" />
                </Link>
              </div>
              <p className="about-text">A revista Prestígio cobre uma vasta gama de temas, incluindo, entre outros, moda, estilo de vida, saúde, política, negócios, entretenimento, desporto e ciência.</p>
              <div className="th-social style-black">
                <Link target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                <Link target="_blank" rel="noreferrer" href="https://www.twitter.com/"><i className="fab fa-twitter"></i></Link>
                <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                <Link target="_blank" rel="noreferrer" href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></Link>
              </div>
            </div>
          </div>
          <div className="widget  ">
            <h3 className="widget_title">Publicações recentes</h3>
            <div className="recent-post-wrap">
              {featuredArticles.map((article) => <RecentArticle key={article.slug} article={article} />)}
            </div>
          </div>
          <div className="widget newsletter-widget  ">
            <h3 className="widget_title">Inscrever-se</h3>
            <p className="footer-text">Inscreva-se para receber actualizações sobre nós. Não se preocupe, o seu e-mail está seguro.</p>
            <form className="newsletter-form">
              <input className="form-control" type="email" placeholder="Enter Email" required />
              <button type="submit" className="icon-btn">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
            <div className="mt-30">
              <input type="checkbox" id="Agree2" />
              <label htmlFor="Agree2">Li e aceito os <Link href="/sobre-nos">Termos e políticas</Link></label>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

const RecentArticle: React.FC<{ article: Article }> = ({ article }) => {
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);
  const { getUrl } = useStorage();

  useEffect(() => {
    (async () => {
      if (!article) return;

      const { data: featuredImageData } = await article.featuredImage();

      setFeaturedImage(featuredImageData as unknown as Media);
    })();
  }, [article]);

  if (!article || !featuredImage) {
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );
  }

  return (
    <div key={article.id} className="recent-post">
      <div className="media-img">
        <Link href={`/publicacao/${article.slug}`}>
          <Image
            className='w-full h-full object-cover'
            width={600}
            height={600}
            src={getUrl(featuredImage.url)}
            alt={article.title || 'Imagem do artigo'}
          />
        </Link>
      </div>
      <div className="media-body">
        <h4 className="post-title">
          <Link className="hover-line" href={`/publicacao/${article.slug}`}>{article.title}</Link>
        </h4>
        <div className="recent-post-meta">
          <Link href={`/publicacao/${article.slug}`}>
            <i className="fal fa-calendar-days"></i>
            {formatDateNumeric(article.publishedAt)}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideMenu;