import blog621Img from '@/assets/img/blog/blog_1_16.jpg';
import blog117Img from '@/assets/img/blog/blog_1_17.jpg';
import blog118Img from '@/assets/img/blog/blog_1_18.jpg';
import blog119Img from '@/assets/img/blog/blog_1_19.jpg';
import blog120Img from '@/assets/img/blog/blog_1_20.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const favoriteThisWeek = [
  {
    slag: 'design-a-lifestyle-that-the-radiates-happiness',
    img: blog621Img,
    category: {
      slag: 'lifestyle',
      name: 'Lifestyle',
    },
    title: 'Design a lifestyle that the radiates Happiness.',
    author: 'Tnews',
    date: '13 Mar, 2023',
    color: '#00D084',
  },
  {
    slag: 'find-your-bliss-carve-memories-on-skis',
    img: blog117Img,
    category: {
      slag: 'travel',
      name: 'Travel',
    },
    title: 'Find your bliss, carve memories on skis.',
    author: 'Tnews',
    date: '12 Mar, 2023',
    color: '#019D9E',
  },
  {
    slag: 'express-yourself-let-fashion-be-your-canvas',
    img: blog118Img,
    category: {
      slag: 'fashion',
      name: 'Fashion',
    },
    title: 'Express yourself, let fashion be your canvas.',
    author: 'Tnews',
    date: '16 Mar, 2023',
    color: '#59C2D6',
  },
  {
    slag: 'from-jungles-to-oceans-animals-amaze',
    img: blog119Img,
    category: {
      slag: 'animals',
      name: 'Animals',
    },
    title: 'From jungles to oceans animals amaze.',
    author: 'Tnews',
    date: '25 Mar, 2023',
    color: '#8750A6',
  },
  {
    slag: 'from-advocacy-to-policy-fuels-societal-change',
    img: blog120Img,
    category: {
      slag: 'politics',
      name: 'Politics',
    },
    title: 'From advocacy to policy fuels societal change.',
    author: 'Tnews',
    date: '14 Mar, 2023',
    color: '#FF9500',
  },
]

const Favorite: React.FC = () => {
  return (
    <div className="space-bottom space-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="sec-title has-line">Favoritos de 2024</h2>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <div className="icon-box">
                <button data-slick-prev="#blog-slide4" className="slick-arrow default"><i className="far fa-arrow-left"></i></button>
                <button data-slick-next="#blog-slide4" className="slick-arrow default"><i className="far fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="row th-carousel" id="blog-slide4" data-slide-show="4" data-lg-slide-show="3" data-md-slide-show="2" data-sm-slide-show="2">
          {
            favoriteThisWeek.map(({ slag, title, img, color, category, author, date }) => (
              <div key={slag} className="col-sm-6 col-lg-4 col-xl-3">
                <div className="blog-style1">
                  <div className="blog-img">
                    <Image src={img} alt={title} />
                    <Link data-theme-color={color} href={`/categoria/${category.slag}`} className="category">
                      {category.name}
                    </Link>
                  </div>
                  <h3 className="box-title-22">
                    <Link className="hover-line" href={`/publicacao/${slag}`}>{title}</Link>
                  </h3>
                  <div className="blog-meta">
                    <Link href={`/autor/${slag}`}><i className="far fa-user"></i>Por - {author}</Link>
                    <Link href={`/publicacao/${slag}`}><i className="fal fa-calendar-days"></i>{date}</Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Favorite;