import footerBgImg from '@assets/img/bg/footer_bg_1.jpg';
import recentPost21Img from '@assets/img/blog/recent-post-2-1.jpg';
import recentPost22Img from '@assets/img/blog/recent-post-2-2.jpg';
import logoFooterImg from '@assets/img/logo.svg';
import gallery11Img from '@assets/img/widget/gallery_1_1.jpg';
import gallery12Img from '@assets/img/widget/gallery_1_2.jpg';
import gallery13Img from '@assets/img/widget/gallery_1_3.jpg';
import gallery14Img from '@assets/img/widget/gallery_1_4.jpg';
import gallery15Img from '@assets/img/widget/gallery_1_5.jpg';
import gallery16Img from '@assets/img/widget/gallery_1_6.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const postCategories = [
  {
    id: 'political',
    name: 'Political',
    slag: 'political',
  },
  {
    id: "business",
    name: 'Business',
    slag: 'business',
  },
  {
    id: "health",
    name: 'Health',
    slag: 'health',
  },
  {
    id: "technology",
    name: 'Technology',
    slag: 'technology',
  },
  {
    id: "sports",
    name: 'Sports',
    slag: 'sports',
  },
  {
    id: "entertainment",
    name: 'Entertainment',
    slag: 'entertainment',
  },
];

const recentPosts = [
  {
    id: "equality-and-justice-for-every-citizen",
    title: 'Equality and justice for Every citizen',
    date: '21 June, 2023',
    img: recentPost21Img,
  },
  {
    id: "key-eyes-on-the-latest-update-of-technology",
    title: 'Key eyes on the latest update of technology',
    date: '22 June, 2023',
    img: recentPost22Img,
  },
];

const galleryPosts = [
  gallery11Img,
  gallery12Img,
  gallery13Img,
  gallery14Img,
  gallery15Img,
  gallery16Img,
];

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper footer-layout1" data-bg-src={footerBgImg.src}>
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="w-44 pb-6">
                    <Link href="/">
                      <Image src={logoFooterImg} alt="Prestígio" />
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
                      postCategories.map((category) => (
                        <li key={category.id}>
                          <Link href={`/categoria/${category.slag}`}>
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
                    recentPosts.map((post) => (
                      <div key={post.id} className="recent-post">
                        <div className="media-img">
                          <Link href={`/publicacao/${post.id}`}>
                            <Image src={post.img} alt="Blog Image" />
                          </Link>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <Link href={`/publicacao/${post.id}`}>
                              {post.title}
                            </Link>
                          </h4>
                          <div className="recent-post-meta">
                            <Link href={`/publicacao/${post.id}`}>
                              <i className="fal fa-calendar-days"></i>
                              {post.date}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">Gallery Post</h3>
                <div className="sidebar-gallery">
                  {
                    galleryPosts.map((galleryPost, index) => (
                      <div key={`gallery-${index}`} className="gallery-thumb">
                        <Image src={galleryPost} alt="Gallery Image" />
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

export default Footer;