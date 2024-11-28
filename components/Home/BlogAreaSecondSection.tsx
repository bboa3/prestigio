import blog15Img from '@/assets/img/blog/blog_1_15.jpg';
import blog16Img from '@/assets/img/blog/blog_1_16.jpg';
import blog23Img from '@/assets/img/blog/blog_2_3.jpg';
import blog321Img from '@/assets/img/blog/blog_3_2_1.jpg';
import blog322Img from '@/assets/img/blog/blog_3_2_2.jpg';
import blog323Img from '@/assets/img/blog/blog_3_2_3.jpg';
import blog324Img from '@/assets/img/blog/blog_3_2_4.jpg';
import Image from 'next/image';
import React from 'react';


const BlogAreaSecondSection: React.FC = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <h2 className="sec-title has-line">Trending News</h2>
          </div>
          <div className="col-xl-4">
            <div className="d-none d-xl-block">
              <h2 className="sec-title has-line">Trending This Week</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3">
            <div className="row gy-4">
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style1">
                  <div className="blog-img">
                    <Image src={blog15Img} alt="blog image" />
                    <a data-theme-color="#00D084" href="blog.html" className="category">Lifestyle</a>
                  </div>
                  <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Balance harmony and joy in Every lifestyle.</a></h3>
                  <div className="blog-meta">
                    <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                    <a href="blog.html"><i className="fal fa-calendar-days"></i>26 Mar, 2023</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style1">
                  <div className="blog-img">
                    <Image src={blog16Img} alt="blog image" />
                    <a data-theme-color="#00D084" href="blog.html" className="category">Lifestyle</a>
                  </div>
                  <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Design a lifestyle that the radiates Happiness.</a></h3>
                  <div className="blog-meta">
                    <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                    <a href="blog.html"><i className="fal fa-calendar-days"></i>13 Mar, 2023</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 mt-4 mt-xl-0">
            <div className="">
              <div className="blog-style1 style-big">
                <div className="blog-img">
                  <Image src={blog23Img} alt="blog image" />
                  <a data-theme-color="#FF9500" href="blog.html" className="category">Business</a>
                </div>
                <h3 className="box-title-30"><a className="hover-line" href="blog-details.html">Following the Moon, they are in Close space. choose the best</a></h3>
                <div className="blog-meta">
                  <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                  <a href="blog.html"><i className="fal fa-calendar-days"></i>23 Mar, 2023</a>
                </div>
              </div>
            </div>

          </div>
          <div className="col-xl-4 mt-35 mt-xl-0">
            <div className="d-block d-xl-none">
              <h2 className="sec-title has-line">Trending This Week</h2>
            </div>
            <div className="row gy-4">
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <Image src={blog321Img} alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a data-theme-color="#4E4BD0" href="blog.html" className="category">Sports</a>
                    <h3 className="box-title-20"><a className="hover-line" href="blog-details.html">Fast breaks, slam dunks Basketball thrills.</a></h3>
                    <div className="blog-meta">
                      <a href="blog.html"><i className="fal fa-calendar-days"></i>13 Mar, 2023</a>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <Image src={blog322Img} alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a data-theme-color="#00D084" href="blog.html" className="category">Health</a>
                    <h3 className="box-title-20"><a className="hover-line" href="blog-details.html">Life, a canvas, paint your Masterpiece.</a></h3>
                    <div className="blog-meta">
                      <a href="blog.html"><i className="fal fa-calendar-days"></i>21 Mar, 2023</a>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <Image src={blog323Img} alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a data-theme-color="#E7473C" href="blog.html" className="category">Fitness</a>
                    <h3 className="box-title-20"><a className="hover-line" href="blog-details.html">Fuel your fire, embrace Fitness goals.</a></h3>
                    <div className="blog-meta">
                      <a href="blog.html"><i className="fal fa-calendar-days"></i>27 Mar, 2023</a>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <Image src={blog324Img} alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a data-theme-color="#59C2D6" href="blog.html" className="category">Fashion</a>
                    <h3 className="box-title-20"><a className="hover-line" href="blog-details.html">Fashion is an art, express Yourself beautifully</a></h3>
                    <div className="blog-meta">
                      <a href="blog.html"><i className="fal fa-calendar-days"></i>10 Mar, 2023</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default BlogAreaSecondSection;