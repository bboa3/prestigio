import blog42Img from '@assets/img/blog/blog_1_42.jpg';
import blog43Img from '@assets/img/blog/blog_1_43.jpg';
import blog44Img from '@assets/img/blog/blog_1_44.jpg';
import blog45Img from '@assets/img/blog/blog_1_45.jpg';
import blog46Img from '@assets/img/blog/blog_1_46.jpg';
import blog47Img from '@assets/img/blog/blog_1_47.jpg';
import blog48Img from '@assets/img/blog/blog_1_48.jpg';
import blog49Img from '@assets/img/blog/blog_1_49.jpg';
import blog50Img from '@assets/img/blog/blog_1_50.jpg';
import blog51Img from '@assets/img/blog/blog_1_51.jpg';
import blog52Img from '@assets/img/blog/blog_1_52.jpg';
import blog53Img from '@assets/img/blog/blog_1_53.jpg';
import blog54Img from '@assets/img/blog/blog_1_54.jpg';
import Image from 'next/image';
import React from 'react';


const categoryPosts = [
  {
    slag: "express-yourself-define-your-unique-style",
    title: "Express yourself, define your unique style.",
    category: "Fashion",
    author: "Tnews",
    date: "19 Mar, 2023",
    image: blog54Img,
  },
  {
    slag: "style-your-dreams-fashion-is-your-canvas",
    title: "Style your dreams, fashion is your canvas",
    category: "Fashion",
    author: "Tnews",
    date: "19 Mar, 2023",
    image: blog53Img,
  },
  {
    slag: "where-creativity-meets-confidence-be-iconic",
    title: "Where creativity meets confidence, be iconic",
    category: "Fashion",
    author: "Tnews",
    date: "18 Mar, 2023",
    image: blog52Img,
  },
  {
    slag: "step-into-style-let-fashion-tell-your-story",
    title: "Step into style, let fashion tell your story",
    category: "Fashion",
    author: "Tnews",
    date: "24 Mar, 2023",
    image: blog51Img,

  },
  {
    slag: "dare-to-dazzle-redefine-your-style",
    title: "Dare to dazzle, redefine your style.",
    category: "Fashion",
    author: "Tnews",
    date: "17 Mar, 2023",
    image: blog50Img,
  },
  {
    slag: "from-classic-to-edgy-fashion-defines-you",
    title: "From classNameic to edgy fashion defines you.",
    category: "Fashion",
    author: "Tnews",
    date: "13 Mar, 2023",
    image: blog49Img,
  },
  {
    slag: "step-into-style-let-fashion-tell-your-story",
    title: "Step into style, let fashion tell your story",
    category: "Fashion",
    author: "Tnews",
    date: "14 Mar, 2023",
    image: blog48Img,
  },
  {
    slag: "elevate-your-elegance-make-a-statement",
    title: "Elevate your elegance, make a statement.",
    category: "Fashion",
    author: "Tnews",
    date: "26 Mar, 2023",
    image: blog47Img,
  },
  {
    slag: "empower-your-look-own-your-individuality",
    title: "Empower your look, own your individuality.",
    category: "Fashion",
    author: "Tnews",
    date: "22 Mar, 2023",
    image: blog46Img,
  },
  {
    slag: "embrace-your-flair-make-every-day-fashionable",
    title: "Embrace your flair, make every day fashionable",
    category: "Fashion",
    author: "Tnews",
    date: "15 Mar, 2023",
    image: blog45Img,
  },
  {
    slag: "step-into-the-spotlight-shine-with-fashion-flair",
    title: "Step into the spotlight, shine with fashion flair.",
    category: "Fashion",
    author: "Tnews",
    date: "20 Mar, 2023",
    image: blog44Img,
  },
  {
    slag: "where-creativity-meets-confidence-stand-out",
    title: "Where creativity meets confidence, stand out.",
    category: "Fashion",
    author: "Tnews",
    date: "28 Mar, 2023",
    image: blog43Img,
  },
  {
    slag: "your-canvas-create-an-iconic-masterpiece",
    title: "Your canvas, create an iconic masterpiece.",
    category: "Fashion",
    author: "Tnews",
    date: "20 Mar, 2023",
    image: blog42Img,
  },
]

const Category: React.FC = () => {

  return (
    <section className="space">
      <div className="container">
        <div className="row gy-30">
          {
            categoryPosts.map((post) => (
              <div className="col-xl-3 col-lg-4 col-sm-6" key={post.slag}>
                <div className="blog-style1">
                  <div className="blog-img">
                    <Image src={post.image} alt="blog image" />
                    <a data-theme-color="#59C2D6" href="blog.html" className="category">{post.category}</a>
                  </div>
                  <h3 className="box-title-20"><a className="hover-line" href="blog-details.html">{post.title}</a></h3>
                  <div className="blog-meta">
                    <a href="author.html"><i className="far fa-user"></i>By - {post.author}</a>
                    <a href="blog.html"><i className="fal fa-calendar-days"></i>{post.date}</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="th-pagination mt-40 mb-0 text-center">
          <ul>
            <li><a href="blog.html">01</a></li>
            <li><a href="blog.html">02</a></li>
            <li><a href="blog.html">03</a></li>
            <li><a href="blog.html"><i className="fas fa-arrow-right"></i></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Category;