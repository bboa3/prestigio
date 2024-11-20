import blog631Img from '@assets/img/blog/blog_6_3_1.jpg';
import blog632Img from '@assets/img/blog/blog_6_3_2.jpg';
import blog633Img from '@assets/img/blog/blog_6_3_3.jpg';
import blog634Img from '@assets/img/blog/blog_6_3_4.jpg';
import blog635Img from '@assets/img/blog/blog_6_3_5.jpg';
import blog636Img from '@assets/img/blog/blog_6_3_6.jpg';
import blog637Img from '@assets/img/blog/blog_6_3_7.jpg';
import authorImg from '@assets/img/normal/author_details.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const authorPosts = [
  {
    id: 1,
    category: 'Gadget',
    title: 'Tech brilliance, forging a path to a smarter connected universe.',
    img: blog631Img,
    author: 'Tnews',
    date: '13 Mar, 2023',
  },
  {
    id: 2,
    category: 'Technology',
    title: 'where possibilities blossom, and lives thrive with technology.',
    img: blog632Img,
    author: 'Tnews',
    date: '15 Mar, 2023',
  },
  {
    id: 3,
    category: 'Robotic',
    title: 'Robotics empowers progress, reshaping industries with ingenuity.',
    img: blog633Img,
    author: 'Tnews',
    date: '15 Mar, 2023',
  },
  {
    id: 4,
    category: 'Desk',
    title: 'where gadgets enhance your life effortlessly and beautifully.',
    img: blog634Img,
    author: 'Tnews',
    date: '21 Mar, 2023',
  },
  {
    id: 5,
    category: 'VR Glass',
    title: 'Elevate life, redefine human potential with virtual reality.',
    img: blog635Img,
    author: 'Tnews',
    date: '16 Mar, 2023',
  },
  {
    id: 6,
    category: 'Gadgets',
    title: 'Where gadgets enhance your life effortlessly and beautifully.',
    img: blog636Img,
    author: 'Tnews',
    date: '29 Mar, 2023',
  },
  {
    id: 7,
    category: 'Gadgets',
    title: 'Tech brilliance, forging a path to a smarter, connected universe.',
    img: blog637Img,
    author: 'Tnews',
    date: '30 Mar, 2023',
  },
  {
    id: 8,
    category: 'Gadgets',
    title: 'Tech brilliance, forging a path to a smarter connected universe.',
    img: blog631Img,
    author: 'Tnews',
    date: '13 Mar, 2023',
  },
  {
    id: 9,
    category: 'Technology',
    title: 'where possibilities blossom, and lives thrive with technology.',
    img: blog632Img,
    author: 'Tnews',
    date: '15 Mar, 2023',
  },
  {
    id: 10,
    category: 'Robotic',
    title: 'Robotics empowers progress, reshaping industries with ingenuity.',
    img: blog633Img,
    author: 'Tnews',
    date: '15 Mar, 2023',
  },
  {
    id: 11,
    category: 'Desk',
    title: 'where gadgets enhance your life effortlessly and beautifully.',
    img: blog634Img,
    author: 'Tnews',
    date: '21 Mar, 2023',
  },
  {
    id: 12,
    category: 'VR Glass',
    title: 'Elevate life, redefine human potential with virtual reality.',
    img: blog635Img,
    author: 'Tnews',
    date: '16 Mar, 2023',
  },
  {
    id: 13,
    category: 'Gadgets',
    title: 'Where gadgets enhance your life effortlessly and beautifully.',
    img: blog636Img,
    author: 'Tnews',
    date: '29 Mar, 2023',
  },
  {
    id: 14,
    category: 'Gadgets',
    title: 'Tech brilliance, forging a path to a smarter, connected universe.',
    img: blog637Img,
    author: 'Tnews',
    date: '30 Mar, 2023',
  },
]

const author = {
  name: 'Joshua Ricardo',
  image: authorImg,
  role: 'Senior. Writer',
  post: 38,
  bio: 'Fusce interdum lectus nec nibh blandit ultrices. Praesent quis tortor eu massa faucibus aliquam. Aenean ultrices tempus magna, ut ultrices eros pulvinar id.',
  email: 'joshua.@gmail.com',
  phone: '+123 (302) 555-0107',
  socials: [
    {
      socialType: 'facebook',
      link: 'https://facebook.com',
    },
    {
      socialType: 'twitter',
      link: 'https://twitter.com',
    },
    {
      socialType: 'pinterest',
      link: 'https://pinterest.com',
    },
    {
      socialType: 'linkedin',
      link: 'https://linkedin.com',
    },
    {
      socialType: 'youtube',
      link: 'https://youtube.com',
    },
  ]
}


const Author: React.FC = () => {
  return (
    <section className="space space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="">
              {
                authorPosts.map(({ id, img, author, title, date, category }) => (
                  <div key={id} className="mb-4 border-blog ">
                    <div className="blog-style4">
                      <div className="blog-img w-270">
                        <Image src={img} alt="blog image" />
                      </div>
                      <div className="blog-content">
                        <a data-theme-color="#6234AC" href="blog.html" className="category">{category}</a>
                        <h3 className="box-title-22"><a className="hover-line" href="blog-details.html">{title}</a></h3>
                        <div className="blog-meta">
                          <a href="author.html"><i className="far fa-user"></i>By - {author}</a>
                          <a href="blog.html"><i className="fal fa-calendar-days"></i>{date}</a>
                        </div>
                        <a href="blog-details.html" className="th-btn style2">Read More<i className="fas fa-arrow-up-right ms-2"></i></a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="th-pagination pt-10">
              <ul>
                <li><a href="blog.html">01</a></li>
                <li><a href="blog.html">02</a></li>
                <li><a href="blog.html">03</a></li>
                <li><a href="blog.html"><i className="fas fa-arrow-right"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 sidebar-wrap">
            <div className="sidebar-area mb-0">
              <div className="widget  ">
                <div className="author-details">
                  <div className="author-img">
                    <Image src={author.image} alt={author.name} />
                  </div>
                  <div className="author-content">
                    <h3 className="box-title-24">{author.name}</h3>
                    <div className="info-wrap">
                      <span className="info">{author.role}</span>
                      <span className="info"><strong>Post: </strong>{authorPosts.length}</span>
                    </div>
                    <p className="author-bio">{author.bio}</p>
                    <div className="info-wrap top-border">
                      <span className="info"><strong>Email : </strong></span>
                      <span className="info"><a href="mailto:joshua.@gmail.com">{author.email}</a></span>
                    </div>
                    <div className="info-wrap">
                      <span className="info"><strong>Phone : </strong></span>
                      <span className="info"><a href="tel:+1233025550107">{author.phone}</a></span>
                    </div>
                    <h4 className="box-title-18">Social Media</h4>
                    <div className="th-social">
                      {
                        author.socials.map(({ socialType, link }, index) => (
                          <Link target="_blank" rel="noreferrer" key={index} href={link}>
                            {
                              socialType === 'facebook' && <i className="fab fa-facebook-f"></i>
                            }
                            {
                              socialType === 'twitter' && <i className="fab fa-twitter"></i>
                            }
                            {
                              socialType === 'pinterest' && <i className="fab fa-pinterest-p"></i>
                            }
                            {
                              socialType === 'linkedin' && <i className="fab fa-linkedin-in"></i>
                            }
                            {
                              socialType === 'youtube' && <i className="fab fa-youtube"></i>
                            }
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Author;