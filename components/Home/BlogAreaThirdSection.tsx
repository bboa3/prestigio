import blog621Img from '@assets/img/blog/blog_6_2_1.jpg';
import blog622Img from '@assets/img/blog/blog_6_2_2.jpg';
import blog623Img from '@assets/img/blog/blog_6_2_3.jpg';
import blog624Img from '@assets/img/blog/blog_6_2_4.jpg';
import blog625Img from '@assets/img/blog/blog_6_2_5.jpg';
import blog626Img from '@assets/img/blog/blog_6_2_6.jpg';
import Image from 'next/image';
import React from 'react';

const BlogAreaThirdSection: React.FC = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="sec-title has-line">Today Trending</h2>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <div className="filter-menu filter-menu-active">
                <button data-filter="*" className="tab-btn active" type="button">ALL</button>
                <button data-filter=".cat1" className="tab-btn" type="button">Fashion</button>
                <button data-filter=".cat2" className="tab-btn" type="button">Fitness</button>
                <button data-filter=".cat3" className="tab-btn" type="button">Travel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-30 filter-active">
          <div className="col-lg-6 two-column filter-item cat1">
            <div className="blog-style4">
              <div className="blog-img">
                <Image src={blog621Img} alt="blog image" />
              </div>
              <div className="blog-content">
                <a data-theme-color="#59C2D6" href="blog.html" className="category">Fashion</a>
                <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Fashion that defines your Unique style and personality</a></h3>
                <div className="blog-meta">
                  <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                  <a href="blog.html"><i className="fal fa-calendar-days"></i>12 Mar, 2023</a>
                </div>
                <a href="blog-details.html" className="th-btn style2">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 two-column filter-item cat2">
            <div className="blog-style4">
              <div className="blog-img">
                <Image src={blog622Img} alt="blog image" />
              </div>
              <div className="blog-content">
                <a data-theme-color="#8750A6" href="blog.html" className="category">Fitness</a>
                <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Cycle your worries away, find Tranquility in motion</a></h3>
                <div className="blog-meta">
                  <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                  <a href="blog.html"><i className="fal fa-calendar-days"></i>16 Mar, 2023</a>
                </div>
                <a href="blog-details.html" className="th-btn style2">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 two-column filter-item cat3">
            <div className="blog-style4">
              <div className="blog-img">
                <Image src={blog623Img} alt="blog image" />
              </div>
              <div className="blog-content">
                <a data-theme-color="#007BFF" href="blog.html" className="category">Travel</a>
                <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Travel far, travel wide, let the World inspire you</a></h3>
                <div className="blog-meta">
                  <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                  <a href="blog.html"><i className="fal fa-calendar-days"></i>27 Mar, 2023</a>
                </div>
                <a href="blog-details.html" className="th-btn style2">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 two-column filter-item cat2">
            <div className="blog-style4">
              <div className="blog-img">
                <Image src={blog624Img} alt="blog image" />
              </div>
              <div className="blog-content">
                <a data-theme-color="#8750A6" href="blog.html" className="category">Fitness</a>
                <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Embrace fitness with dancing find tranquility motion</a></h3>
                <div className="blog-meta">
                  <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                  <a href="blog.html"><i className="fal fa-calendar-days"></i>22 Mar, 2023</a>
                </div>
                <a href="blog-details.html" className="th-btn style2">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 two-column filter-item cat3">
            <div className="blog-style4">
              <div className="blog-img">
                <Image src={blog625Img} alt="blog image" />
              </div>
              <div className="blog-content">
                <a data-theme-color="#007BFF" href="blog.html" className="category">Travel</a>
                <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Fashion is an art, express Yourself beautifully</a></h3>
                <div className="blog-meta">
                  <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                  <a href="blog.html"><i className="fal fa-calendar-days"></i>24 Mar, 2023</a>
                </div>
                <a href="blog-details.html" className="th-btn style2">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 two-column filter-item cat1">
            <div className="blog-style4">
              <div className="blog-img">
                <Image src={blog626Img} alt="blog image" />
              </div>
              <div className="blog-content">
                <a data-theme-color="#59C2D6" href="blog.html" className="category">Fashion</a>
                <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Watch for fashion intersection of style timekeeping</a></h3>
                <div className="blog-meta">
                  <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                  <a href="blog.html"><i className="fal fa-calendar-days"></i>12 Mar, 2023</a>
                </div>
                <a href="blog-details.html" className="th-btn style2">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default BlogAreaThirdSection;