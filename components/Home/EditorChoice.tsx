import blogBgImg from '@/assets/img/bg/blog_bg_1.jpg';
import blog111Img from '@/assets/img/blog/blog_1_11.jpg';
import blog112Img from '@/assets/img/blog/blog_1_12.jpg';
import blog113Img from '@/assets/img/blog/blog_1_13.jpg';
import blog114Img from '@/assets/img/blog/blog_1_14.jpg';
import blog55Img from '@/assets/img/blog/blog_5_5.jpg';
import blog56Img from '@/assets/img/blog/blog_5_6.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EditorChoice: React.FC = () => {
  return (
    <div className="space dark-theme bg-title-dark" data-bg-src={blogBgImg.src}>
      <div className="container">
        <h2 className="sec-title has-line text-center">Editor Choice</h2>
        <div className="row gy-4 mb-4">
          <div className="col-lg-6">
            <div className="blog-style3">
              <div className="blog-img">
                <Image src={blog55Img} alt="blog image" />
              </div>
              <div className="blog-content">
                <a data-theme-color="#4E4BD0" href="blog.html" className="category">Fashion</a>
                <h3 className="box-title-30"><a className="hover-line" href="blog-details.html">Adventure awaits, let your Wanderlust guide you</a></h3>
                <div className="blog-meta">
                  <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                  <a href="blog.html"><i className="fal fa-calendar-days"></i>24 Mar, 2023</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-style3">
              <div className="blog-img">
                <Image src={blog56Img} alt="blog image" />
              </div>
              <div className="blog-content">
                <a data-theme-color="#019D9E" href="blog.html" className="category">Travel</a>
                <h3 className="box-title-30"><a className="hover-line" href="blog-details.html">Find your bliss, carve Memories on skis friends.</a></h3>
                <div className="blog-meta">
                  <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                  <a href="blog.html"><i className="fal fa-calendar-days"></i>13 Mar, 2023</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-4">


          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="blog-style1">
              <div className="blog-img">
                <Image src={blog111Img} alt="blog image" />
                <a data-theme-color="#019D9E" href="blog.html" className="category">Travels</a>
              </div>
              <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Leadership for the People By the people</a></h3>
              <div className="blog-meta">
                <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                <a href="blog.html"><i className="fal fa-calendar-days"></i>12 Mar, 2023</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="blog-style1">
              <div className="blog-img">
                <Image src={blog112Img} alt="blog image" />
                <a data-theme-color="#8750A6" href="blog.html" className="category">Fitness</a>
              </div>
              <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Leadership for the People By the people</a></h3>
              <div className="blog-meta">
                <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                <a href="blog.html"><i className="fal fa-calendar-days"></i>24 Mar, 2023</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="blog-style1">
              <div className="blog-img">
                <Image src={blog113Img} alt="blog image" />
                <a data-theme-color="#019D9E" href="blog.html" className="category">Travels</a>
              </div>
              <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Leadership for the People By the people</a></h3>
              <div className="blog-meta">
                <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                <a href="blog.html"><i className="fal fa-calendar-days"></i>23 Mar, 2023</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="blog-style1">
              <div className="blog-img">
                <Image src={blog114Img} alt="blog image" />
                <a data-theme-color="#019D9E" href="blog.html" className="category">Travels</a>
              </div>
              <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">Leadership for the People By the people</a></h3>
              <div className="blog-meta">
                <a href="author.html"><i className="far fa-user"></i>By - Tnews</a>
                <Link href={`/publicacao/`}><i className="fal fa-calendar-days"></i>17 Mar, 2023</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EditorChoice;