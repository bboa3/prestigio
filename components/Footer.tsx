import footerBgImg from '@/assets/img/bg/footer_bg_1.jpg';
import logoFooterImg from '@/assets/img/logo.svg';
import useStorage from '@/hooks/create/useStorage';
import { Article, Category, Media, User } from '@/types/schema';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Props {
  categories: Category[]
  featuredArticles: Article[]
  gallery: Media[]
}

const Footer: React.FC<Props> = ({ categories, featuredArticles, gallery }) => {
  const { getUrl } = useStorage();

  return (
    <footer className="footer-wrapper footer-layout1" data-bg-src={footerBgImg.src}>
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="w-32 h-auto pb-6">
                    <Link href="/">
                      <Image className='w-full h-full object-cover' src={logoFooterImg} alt="Prestígio" />
                    </Link>
                  </div>
                  <p className="about-text">A revista Prestígio cobre uma vasta gama de temas, incluindo, entre outros, moda, estilo de vida, saúde, política, negócios, entretenimento, desporto e ciência.</p>
                  <div className="th-social style-black">
                    <Link target="_blank" rel="noreferrer" href="https://web.facebook.com/prestigiomz/?_rdc=1&_rdr"><i className="fab fa-facebook-f"></i></Link>
                    <Link target="_blank" rel="noreferrer" href="https://www.twitter.com/"><i className="fab fa-twitter"></i></Link>
                    <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                    <Link target="_blank" rel="noreferrer" href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Categorías</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    {
                      categories.map((category) => (
                        <li key={category.id}>
                          <Link href={`/categoria/${category.slug}`}>
                            {category.name}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Publicações recentes</h3>
                <div className="recent-post-wrap">
                  {
                    featuredArticles.slice(0, 3).map((article) => (
                      <FeaturedArticle key={article.id} article={article} />
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">Galeria de Fotos</h3>
                <div className="sidebar-gallery">
                  {
                    gallery.map((media, index) => (
                      <div key={`gallery-${index}`} className="gallery-thumb">
                        <Image src={getUrl(media.url)} alt="Prestígio" width={100} height={100} />
                        <Link href={'/'} className="gallery-btn popup-image">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap bg-black-950">
        <div className="container">
          <div className="row jusity-content-between align-items-center">
            <div className="col-lg-5">
              <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2024
                <Link href="/">Prestígio</Link>. Todos os direitos reservados.</p>
            </div>
            <div className="col-lg-auto ms-auto d-none d-lg-block">
              <div className="footer-links">
                <ul>
                  <li><Link href="/">Início</Link></li>
                  <li><Link href="/sobre-nos">Sobre-nós</Link></li>
                  <li><Link href="/sobre-nos">Faq</Link></li>
                  <li><Link href="/contacto">Contacte-nos</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FeaturedArticle: React.FC<{ article: Article }> = ({ article }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [author, setAuthor] = useState<User | null>(null);
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);
  const { getUrl } = useStorage();

  useEffect(() => {
    (async () => {
      const [{ data: categoriesData }, { data: featuredImageData }, { data: authorData }] = await Promise.all([
        article.categories(),
        article.featuredImage(),
        article.author()
      ]);

      setCategories(categoriesData as unknown as Category[]);
      setFeaturedImage(featuredImageData as unknown as Media);
      setAuthor(authorData as User);
    })();
  }, [article]);

  if (!article || categories.length === 0 || !featuredImage || !author)
    return (
      <div className="w-full flex items-start flex-col">
        <Skeleton variant="rounded" width="70%" height={25} />
        <Skeleton className="my-2" animation="wave" variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </div>
    );

  return (
    <div key={article.id} className="recent-post">
      <div className="media-img">
        <Link href={`/publicacao/${article.id}`}>
          <Image width={600} height={600} src={getUrl(featuredImage.url)} alt={article.title} />
        </Link>
      </div>
      <div className="media-body">
        <h4 className="post-title">
          <Link href={`/publicacao/${article.id}`}>
            {article.title}
          </Link>
        </h4>
        <div className="recent-post-meta">
          <Link href={`/publicacao/${article.id}`}>
            <i className="fal fa-calendar-days"></i>
            {article.publishedAt}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;