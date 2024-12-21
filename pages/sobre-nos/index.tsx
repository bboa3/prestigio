import storyBg1Img from "@/assets/img/bg/cta_bg_1.jpg";
import prestigioTeam2Img from "@/assets/img/normal/equipa-prestigio-2.png";
import prestigioTeamImg from "@/assets/img/normal/equipa-prestigio.png";
import story1Img from "@/assets/img/normal/story_1.jpg";
import story2Img from "@/assets/img/normal/story_2.jpg";
import story3Img from "@/assets/img/normal/story_3.jpg";
import story4Img from "@/assets/img/normal/story_4.jpg";
import storyBg2Img from "@/assets/img/normal/story_bg_1.svg";
import Image from 'next/image';
import Link from "next/link";
import React from 'react';

const AboutUs: React.FC = () => {

  return (
    <>
      <div className="space2" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <Image src={prestigioTeam2Img} alt="Prestigio" />
                </div>
                <div className="img2">
                  <Image src={prestigioTeamImg} alt="Prestigio" />
                </div>
                <Link target="_blank" rel="noreferrer" href="https://www.youtube.com/@prestigiomz/videos" className="icon-btn popup-video"><i className="fas fa-play"></i></Link>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="title-area mb-32">
                <span className="sub-title">Sobre nós</span>
                <h2 className="sec-title2">Over 25 years, we have been delivering real news</h2>
                <p className="sec-text">Suggests that the entity or organization has a longstanding history of providing trustworthy and reliable news coverage. The phrase &quot;over 25 years&quot; indicates a long-established presence in the industry, which can instill confidence in the audience.</p>
              </div>
              <div className="checklist mt-n2 mb-35">
                <ul>
                  <li><i className="far fa-check-circle"></i> User experience</li>
                  <li><i className="far fa-check-circle"></i> Strategy and Art Direction</li>
                  <li><i className="far fa-check-circle"></i> Unique layouts Blocks</li>
                </ul>
              </div>
              <a href="about.html" className="th-btn">Mais sobre nós<i className="fas fa-arrow-up-right ms-2"></i></a>
            </div>
          </div>
        </div>
      </div>
      <section className="cta-sec-1" data-bg-src={storyBg1Img.src}>
        <div className="container space2">
          <div className="row text-center text-md-start align-items-center justify-content-md-between justify-content-center">
            <div className="col-lg-7 col-md-8 mb-40 mb-md-0">
              <div className="title-area mb-0">
                <span className="sub-title">Obter consultoria</span>
                <h2 className="sec-title2 h1">Experimente a excelência da nossa revista</h2>
              </div>
            </div>
            <div className="col-md-auto">
              <a href="contact.html" className="th-btn style3">Contactar-nos<i className="fas fa-arrow-up-right ms-2"></i></a>
            </div>
          </div>
        </div>
      </section>
      <div className="counter-sec-1 pb-10">
        <div className="container">
          <div className="counter-card-wrap">
            <div className="counter-card">
              <h2 className="counter-card_number"><span className="counter-number">17</span>+</h2>
              <span className="counter-card_text">Anos de experiência</span>
            </div>
            <div className="counter-card">
              <h2 className="counter-card_number"><span className="counter-number">86</span>+</h2>
              <span className="counter-card_text">Prémio vencedor</span>
            </div>
            <div className="counter-card">
              <h2 className="counter-card_number"><span className="counter-number">20</span>+</h2>
              <span className="counter-card_text">Redactores de notícias experientes</span>
            </div>
            <div className="counter-card">
              <h2 className="counter-card_number"><span className="counter-number">3</span>+</h2>
              <span className="counter-card_text">Línguas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space2 hidden">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Company History</span>
            <h2 className="sec-title2">Great Company History</h2>
          </div>
          <div className="story-box-area" data-bg-src={storyBg2Img.src}>
            <div className="story-box-wrap">
              <div className="story-box">
                <div className="box-img">
                  <Image src={story1Img} alt="Story" />
                </div>
                <div className="box-content">
                  <h3 className="box-title">We Start Company</h3>
                  <p className="box-text">Forward-thinking and venture born from a vision to Create positive </p>
                </div>
              </div>
              <div className="story-year">1990</div>
            </div>
            <div className="story-box-wrap">
              <div className="story-box">
                <div className="box-img">
                  <Image src={story2Img} alt="Story" />
                </div>
                <div className="box-content">
                  <h3 className="box-title">We Start Company</h3>
                  <p className="box-text">Forward-thinking and venture born from a vision to Create positive </p>
                </div>
              </div>
              <div className="story-year">1994</div>
            </div>
            <div className="story-box-wrap">
              <div className="story-box">
                <div className="box-img">
                  <Image src={story3Img} alt="Story" />
                </div>
                <div className="box-content">
                  <h3 className="box-title">We Start Company</h3>
                  <p className="box-text">Forward-thinking and venture born from a vision to Create positive </p>
                </div>
              </div>
              <div className="story-year">2000</div>
            </div>
            <div className="story-box-wrap">
              <div className="story-box">
                <div className="box-img">
                  <Image src={story4Img} alt="Story" />
                </div>
                <div className="box-content">
                  <h3 className="box-title">We Start Company</h3>
                  <p className="box-text">Forward-thinking and venture born from a vision to Create positive </p>
                </div>
              </div>
              <div className="story-year">2010</div>
            </div>
            <div className="story-box-wrap">
              <div className="story-year">End</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default AboutUs;