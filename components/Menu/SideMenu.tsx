import recentPost1Img from "@assets/img/blog/recent-post-1-1.jpg";
import recentPost2Img from "@assets/img/blog/recent-post-1-2.jpg";
import recentPost3Img from "@assets/img/blog/recent-post-1-3.jpg";
import recentPost4Img from "@assets/img/blog/recent-post-1-4.jpg";
import footerLogoBlackImg from "@assets/img/logo-footer-black.svg";
import footerLogoImg from "@assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";

const recentPosts = [
  {
    id: 1,
    title: "Fitness: Your journey to Better, stronger you.",
    date: "21 June, 2023",
    image: recentPost1Img,
  },
  {
    id: 2,
    title: "Embrace the game Ignite your sporting",
    date: "22 June, 2023",
    image: recentPost2Img,
  },
  {
    id: 3,
    title: "Revolutionizing lives Through technology",
    date: "23 June, 2023",
    image: recentPost3Img,
  },
  {
    id: 4,
    title: "Enjoy the Virtual Reality embrace the",
    date: "25 June, 2023",
    image: recentPost4Img,
  },
];

const SideMenu: React.FC = () => {
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
              {
                recentPosts.map((post) => (
                  <div key={post.id} className="recent-post">
                    <div className="media-img">
                      <Link href={`/publicacao/${post.id}`}>
                        <Image src={post.image} alt="Blog Image" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="hover-line" href={`/publicacao/${post.id}`}>{post.title}</Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href={`/publicacao/${post.id}`}><i className="fal fa-calendar-days"></i>{post.date}</Link>
                      </div>
                    </div>
                  </div>
                ))
              }
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
      <div className="popup-search-box">
        <button className="searchClose"><i className="fal fa-times"></i></button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit"><i className="fal fa-search"></i></button>
        </form>
      </div>
    </div >
  )
};

export default SideMenu;