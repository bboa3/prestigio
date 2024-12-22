import AuthorArticle from '@/components/Author/AuthorArticle';
import SimpleLayout from '@/components/Layout/SimpleLayout';
import LoadingIndicator from '@/components/LoadingIndicator';
import useStorage from '@/hooks/create/useStorage';
import useArticles from '@/hooks/store/useArticles';
import useAuthor from '@/hooks/store/useAuthor';
import useCategories from '@/hooks/store/useCategories';
import useFeaturedArticles from '@/hooks/store/useFeaturedArticles';
import useMedias from '@/hooks/store/useMedias';
import { ArticleStatus, UserRole } from '@/types/schema';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React, { useMemo } from 'react';

interface Props {
  id: string
}

const Author: React.FC<Props> = ({ id }) => {
  const { author } = useAuthor(id);
  const { getUrl } = useStorage();
  const categoriesOption = useMemo(() => ({ filter: { isDeleted: { eq: false } }, limit: 6 }), []);
  const galleryOption = useMemo(() => ({ limit: 6 }), []);

  const articleOptions = useMemo(() => ({
    filter: {
      isDeleted: { eq: false },
      status: { eq: ArticleStatus.PUBLISHED },
      authorId: { eq: id },
    },
  }), [id]);

  const { articles } = useArticles(articleOptions);

  const { medias } = useMedias(galleryOption);
  const { categories } = useCategories(categoriesOption);
  const { articles: featured } = useFeaturedArticles({ limit: 5 });

  if (!author || !articles || !medias || !categories || !featured) {
    return <LoadingIndicator />;
  }

  return (
    <SimpleLayout
      title={author.name || 'Autor'}
      description={author.bio || 'Revista Prestígio - Revista de economia, negócios, desporto e cultura em moçambique'}
      keywords='Revista Prestígio, Revista, economia, negócios, desporto, cultura, moçambique'
      categories={categories}
      featuredArticles={featured}
      gallery={medias}
    >
      <section className="space space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="">
                {
                  articles.map((article) => <AuthorArticle key={article.id} article={article} author={author} />)
                }
              </div>
              <div className="th-pagination pt-10">
                {/* <ul>
                <li><a href="blog.html">01</a></li>
                <li><a href="blog.html">02</a></li>
                <li><a href="blog.html">03</a></li>
                <li><a href="blog.html"><i className="fas fa-arrow-right"></i></a></li>
              </ul> */}
              </div>
            </div>
            <div className="col-xl-4 sidebar-wrap">
              <div className="sidebar-area mb-0">
                <div className="widget  ">
                  <div className="author-details">
                    <div className="author-img">
                      {
                        author.profilePicture && (
                          <Image
                            width={600}
                            height={600}
                            src={getUrl(author.profilePicture)}
                            alt={author.name || 'Autor'}
                            layout='fixed'
                          />
                        )
                      }
                    </div>
                    <div className="author-content">
                      <h3 className="box-title-24">{author.name}</h3>
                      <div className="info-wrap">
                        <span className="info">{author.role === UserRole.AUTHOR ? 'Escritor' : 'Editor'}</span>
                        <span className="info"><strong>Artigos: </strong>{articles.length}</span>
                      </div>
                      <p className="author-bio">{author.bio}</p>
                      <div className="info-wrap top-border">
                        <span className="info"><strong>Email : </strong></span>
                        <span className="info"><a href={`mailto:${author.email}`}>{author.email}</a></span>
                      </div>
                      <div className="info-wrap">
                        <span className="info"><strong>Telefone: </strong></span>
                        <span className="info"><a href={`tel:+258${author.phone?.split(' ').join('')}`}>{author.phone}</a></span>
                      </div>
                      <h4 className="box-title-18">Redes sociais</h4>
                      <div className="th-social">
                        {/* {
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
                      } */}
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
  );
}

export default Author;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id

  return {
    props: {
      id
    },
    revalidate: 60 * 10
  }
}