import ArticleCategoryComponent from "@/components/Article/ArticleCategoryComponent";
import SimpleLayout from "@/components/Layout/SimpleLayout";
import LoadingIndicator from "@/components/LoadingIndicator";
import useStorage from "@/hooks/create/useStorage";
import useArticle from "@/hooks/store/useArticle";
import useCategories from "@/hooks/store/useCategories";
import useFeaturedArticles from "@/hooks/store/useFeaturedArticles";
import useMedias from "@/hooks/store/useMedias";
import { formatDateTimeNumeric } from "@/utils/date/formatter";
import ad1Img from "@/assets/img/ads/ads_blog_1.jpg";
import ad1DarkImg from "@/assets/img/ads/ads_blog_1_dark.jpg";
import authorImg from "@/assets/img/blog/blog-author.jpg";
import nav1Img from "@/assets/img/blog/blog-nav-1.jpg";
import nav2Img from "@/assets/img/blog/blog-nav-2.jpg";
import blogDetails1 from "@/assets/img/blog/blog_details_1.jpg";
import blogDetails6 from "@/assets/img/blog/blog_inner_6.jpg";
import blogDetails7 from "@/assets/img/blog/blog_inner_7.jpg";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

const post = {
  category: "Technology",
  mainImage: blogDetails1,
  title: "Tech made simple, your everyday made extraordinary with the power of digital VR glass.",
  introduction: [
    "Fuel your competitive spirit, chase victory, and let sports be your legacy encapsulates the essence of embracing sports as a means to challenge oneself, strive for success, and leave a lasting impact. This phrase urges individuals to tap into their inner drive and motivation.",
    "Igniting their competitive spirit. It encourages them to set ambitious goals, not settling for mediocrity but pushing themselves to excel in their chosen sport or athletic endeavor. The pursuit of victory becomes the driving force, motivating athletes to give their all,",
    "Surpass their limitations, and achieve remarkable feats. It emphasizes the importance of hard work, dedication, and Perseverance in the face of challenges and obstacles that may arise along the way.",
    "The slogan reminds athletes that their participation in sports has the potential to leave a lasting legacy. It suggests that their accomplishments, records, and impact can inspire future generations, shaping the sport itself and influencing others to follow in their footsteps. By embracing sports and embracing the pursuit of victory, individuals have the opportunity to create a legacy that will be remembered and celebrated long after their own participation.",
  ],
  details: [
    {
      subTitle: "Achieve greatness, fueled by innovation",
      text: [
        "Achieve greatness, fueled by innovation encapsulates the idea that by embracing and harnessing innovative approaches and technologies, individuals can reach extraordinary heights of success and achievement. It implies that the combination of pushing boundaries, thinking outside the box, and adopting cutting-edge advancements can Propel individuals to surpass their limitations and accomplish remarkable feats.",
        "This phrase suggests that innovation serves as the driving force behind progress and improvement in various fields, including sports, business, arts, and personal development. It conveys the message that by embracing new ideas.",
      ],
      images: [blogDetails6, blogDetails7],
    },
    {
      subTitle: "Power your game with innovative features.",
      text: [
        "Power your game with innovative features signifies the utilization of advanced and cutting-edge elements to enhance your performance and elevate your gameplay. It suggests that by embracing these innovative features, you can tap into a new level of power, skill, and effectiveness in your chosen sport.",
        "This phrase implies that the incorporation of groundbreaking technologies, techniques, and functionalities can provide you with a competitive edge and push the boundaries of what is achievable in your game.",
      ],
      images: [],
    },
  ],
  date: "21 June, 2023",
  author: "Tnews",
  comments: [
    {
      date: "14 March, 2023",
      text: "Your sport blog is simply fantastic! The in-depth analysis, engaging writing style, and up-to-date coverage of various sports events make it a must-visit for any sports enthusiast.",
    },
    {
      date: "15 March, 2023",
      text: "Whether it's breaking news, expert opinions, or inspiring athlete profiles, your blog delivers a winning combination of excitement and information that keeps.",
    },
    {
      date: "16 March, 2023",
      text: "The way you seamlessly blend statistical insights with compelling storytelling creates an immersive and captivating reading experience. Whether it's the latest match updates, behind-the-scenes glimpses.",
    },
  ],
  readingTime: 5
}

interface Props {
  slug: string
}

const Post: React.FC<Props> = ({ slug }) => {
  const { article, articleCategories, comments, author, featuredImage, contentBlocks } = useArticle(slug)
  const categoriesOption = useMemo(() => ({ filter: { isDeleted: { eq: false } }, limit: 6 }), []);
  const galleryOption = useMemo(() => ({ limit: 6 }), []);
  const { getUrl } = useStorage();

  const { medias } = useMedias(galleryOption);
  const { categories } = useCategories(categoriesOption);
  const { articles: featured } = useFeaturedArticles({ limit: 5 });

  if (!articleCategories || !contentBlocks || !featuredImage || !author || !article || !medias || !categories || !featured) {
    return <LoadingIndicator />;
  }

  return (
    <SimpleLayout
      title={article.title}
      description={article.excerpt || 'Revista Prestígio - Revista de economia, negócios, desporto e cultura em moçambique'}
      keywords={article.tags.join(', ')}
      categories={categories}
      featuredArticles={featured}
      gallery={medias}
    >
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              {
                articleCategories[0] ? <ArticleCategoryComponent articleCategory={articleCategories[0]} /> : null
              }
              <h2 className="blog-title">{post.title}</h2>
              <div className="blog-meta">
                <a className="author" href="author.html"><i className="far fa-user"></i>Por - {author.name}</a>
                <a href="blog.html"><i className="fal fa-calendar-days"></i>{formatDateTimeNumeric(article.publishedAt)}</a>
                <a href="blog-details.html"><i className="far fa-comments"></i>Comentários ({comments?.length || 0})</a>
                <span><i className="far fa-book-open"></i>6 Mins Leitura</span>
              </div>
              <div className="blog-img mb-40">
                <Image width={600} height={600} src={getUrl(featuredImage.url)} alt={article.title} />
              </div>
            </div>
            <div className="col-xxl-9 col-lg-10">
              <div className="th-blog blog-single">
                <div className="blog-content-wrap">
                  <div className="share-links-wrap">
                    <div className="share-links">
                      <span className="share-links-title">Partilhar publicação:</span>
                      <div className="multi-social">
                        <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://pinterest.com/" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                        <a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-info-wrap">
                      <button className="blog-info print_btn">
                        Imprimir :
                        <i className="fas fa-print"></i>
                      </button>
                      <a className="blog-info" href="mailto:">
                        Email :
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                    <div className="content">
                      <p>{article.excerpt}</p>
                      <div className="my-4 py-lg-2">
                        <Link href="https://themeforest.net/user/themeholy/portfolio">
                          <Image className="light-img w-100" src={ad1Img} alt="Ads" />
                          <Image className="dark-img w-100" src={ad1DarkImg} alt="Ads" />
                        </Link>
                      </div>
                      {
                        post.details.map((detail, index) => (
                          <div key={`detail-${index}`}>
                            <h3 className="h4">{detail.subTitle}</h3>
                            {detail.text.map((text, index) => (
                              <p key={`detail-${index}`}>{text}</p>
                            ))}
                            <div className="row mb-4 pb-lg-2 pt-xl-2 gy-4">
                              {detail.images.map((image, index) => (
                                <div key={`image-${index}`} className="col-md-6">
                                  <Image className="w-100" src={image} alt="Blog Image" />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <div className="blog-tag">
                      <h6 className="title">Categos:</h6>
                      <div className="tagcloud">
                        <a href="blog.html">Sports</a>
                        <a href="blog.html">Politics</a>
                        <a href="blog.html">Business</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-navigation">
                <div className="nav-btn prev">
                  <div className="img">
                    <Image src={nav1Img} alt="Blog Image" className="nav-img" />
                  </div>
                  <div className="media-body">
                    <h5 className="title">
                      <a className="hover-line" href="blog-details.html">Game on! Embrace the spirit of sportsmanship</a>
                    </h5>
                    <a href="blog-details.html" className="nav-text"><i className="fas fa-arrow-left me-2"></i>Prev</a>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="nav-btn next">
                  <div className="media-body">
                    <h5 className="title">
                      <a className="hover-line" href="blog-details.html">Push your limits, redefine what's possible</a>
                    </h5>
                    <a href="blog-details.html" className="nav-text">Next<i className="fas fa-arrow-right ms-2"></i></a>
                  </div>
                  <div className="img">
                    <Image src={nav2Img} alt="Blog Image" className="nav-img" />
                  </div>
                </div>
              </div>
              <div className="blog-author">
                <div className="auhtor-img">
                  <Image src={authorImg} alt="Blog Author Image" />
                </div>
                <div className="media-body">
                  <div className="author-top">
                    <div>
                      <h3 className="author-name"><a className="text-inherit" href="team-details.html">Ronald Richards</a></h3>
                      <span className="author-desig">Founder & CEO</span>
                    </div>
                    <div className="social-links">
                      <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                      <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                      <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                  <p className="author-text">Adventurer and passionate travel blogger. With a backpack full of stories and a camera in hand, she takes her readers on exhilarating journeys around the world.</p>
                </div>
              </div>
              <div className="related-post-wrapper pt-30 mb-30">
                <div className="row align-items-center">
                  <div className="col">
                    <h2 className="sec-title has-line">Related Post</h2>
                  </div>
                  <div className="col-auto">
                    <div className="sec-btn">
                      <div className="icon-box">
                        <button data-slick-prev="#related-post-slide" className="slick-arrow default"><i className="far fa-arrow-left"></i></button>
                        <button data-slick-next="#related-post-slide" className="slick-arrow default"><i className="far fa-arrow-right"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row slider-shadow th-carousel" id="related-post-slide" data-slide-show="3" data-lg-slide-show="2" data-md-slide-show="2" data-sm-slide-show="2">
                  <div className="col-sm-6 col-xl-4">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <Image src={blogDetails1} alt="Blog Image" />
                        <a data-theme-color="#00D084" href="blog.html" className="category">Lifestyle</a>
                      </div>
                      <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Balance harmony and joy in Every lifestyle.</a></h3>
                      <div className="blog-meta">
                        <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                        <a href="blog.html"><i className="fal fa-calendar-days"></i>12 Mar, 2023</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <Image src={blogDetails1} alt="Blog Image" />
                        <a data-theme-color="#FF9500" href="blog.html" className="category">Politics</a>
                      </div>
                      <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Power to the people for a Better future!</a></h3>
                      <div className="blog-meta">
                        <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                        <a href="blog.html"><i className="fal fa-calendar-days"></i>20 Mar, 2023</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <Image src={blogDetails1} alt="Blog Image" />
                        <a data-theme-color="#E7473C" href="blog.html" className="category">Fitness</a>
                      </div>
                      <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Fitness the key to vitality and Well-being.</a></h3>
                      <div className="blog-meta">
                        <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                        <a href="blog.html"><i className="fal fa-calendar-days"></i>14 Mar, 2023</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <Image src={blogDetails1} alt="Blog Image" />
                        <a data-theme-color="#00D084" href="blog.html" className="category">Health</a>
                      </div>
                      <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Embrace bump and Victory volleyball style.</a></h3>
                      <div className="blog-meta">
                        <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                        <a href="blog.html"><i className="fal fa-calendar-days"></i>14 Mar, 2023</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SimpleLayout>
  )
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug

  return {
    props: {
      slug
    },
    revalidate: 60 * 10
  }
}
