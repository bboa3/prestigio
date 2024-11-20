import blog521Img from '@assets/img/blog/blog_5_2_1.jpg';
import blog522Img from '@assets/img/blog/blog_5_2_2.jpg';
import blog523Img from '@assets/img/blog/blog_5_2_3.jpg';
import blog524Img from '@assets/img/blog/blog_5_2_4.jpg';
import blog57Img from '@assets/img/blog/blog_5_7.jpg';
import Image from 'next/image';
import React from 'react';

const BlogAreaFirstSection: React.FC = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-4 mb-xl-0">
            <div className="row gy-4">
              <div className="dark-theme img-overlay2">
                <div className="blog-style3">
                  <div className="blog-img">
                    <Image src={blog57Img} alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a data-theme-color="#007BFF" href="blog.html" className="category">Fashion</a>
                    <h3 className="box-title-30"><a className="hover-line" href="blog-details.html">Fashion-forward Where trends and Confidence collide</a></h3>
                    <div className="blog-meta">
                      <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                      <a href="blog.html"><i className="fal fa-calendar-days"></i>20 Mar, 2023</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row gy-4">
              <div className="col-xl-6 col-md-6 dark-theme img-overlay2">
                <div className="blog-style3">
                  <div className="blog-img">
                    <Image src={blog521Img} alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a data-theme-color="#E8137D" href="blog.html" className="category">Music</a>
                    <h3 className="box-title-18"><a className="hover-line" href="blog-details.html">Music the key to unlock Your Emotions</a></h3>
                    <div className="blog-meta">
                      <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                      <a href="blog.html"><i className="fal fa-calendar-days"></i>29 Mar, 2023</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 dark-theme img-overlay2">
                <div className="blog-style3">
                  <div className="blog-img">
                    <Image src={blog522Img} alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a data-theme-color="#007BFF" href="blog.html" className="category">Travel</a>
                    <h3 className="box-title-18"><a className="hover-line" href="blog-details.html">Discover wonders Travel With an open heart.</a></h3>
                    <div className="blog-meta">
                      <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                      <a href="blog.html"><i className="fal fa-calendar-days"></i>19 Mar, 2023</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 dark-theme img-overlay2">
                <div className="blog-style3">
                  <div className="blog-img">
                    <Image src={blog523Img} alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a data-theme-color="#8750A6" href="blog.html" className="category">Fitness</a>
                    <h3 className="box-title-18"><a className="hover-line" href="blog-details.html">Inspire change, embrace Your fitness journey.</a></h3>
                    <div className="blog-meta">
                      <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                      <a href="blog.html"><i className="fal fa-calendar-days"></i>24 Mar, 2023</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 dark-theme img-overlay2">
                <div className="blog-style3">
                  <div className="blog-img">
                    <Image src={blog524Img} alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a data-theme-color="#4E4BD0" href="blog.html" className="category">Fashion</a>
                    <h3 className="box-title-18"><a className="hover-line" href="blog-details.html">Life is journey, find your Unique rhythm.</a></h3>
                    <div className="blog-meta">
                      <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                      <a href="blog.html"><i className="fal fa-calendar-days"></i>12 Mar, 2023</a>
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

export default BlogAreaFirstSection;