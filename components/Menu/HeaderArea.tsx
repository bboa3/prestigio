import logoWhiteImg from '@assets/img/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Category {
  name: string;
  slug: string;
}

interface Props {
  categories: Category[];
}

const HeaderArea: React.FC<Props> = ({ categories }) => {
  return (
    <header className="th-header header-layout2 dark-theme">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-md-between align-items-center gy-2">
            <div className="col-auto d-none d-md-inline-block">
              <div className="header-icon">
                <Link href="/" className="simple-icon sideMenuToggler">
                  <i className="far fa-bars"></i>
                </Link>
                <button type="button" className="simple-icon">
                  <i className="far fa-user"></i>
                </button>
              </div>
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fal fa-calendar-days"></i>
                    <Link href="/publicacao/">Segunda-feira, 20 de agosto de 2023</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto d-none d-lg-inline-block">
              <div className=" w-32">
                <Link href="/">
                  <Image src={logoWhiteImg} alt="Prestígio" />
                </Link>
              </div>
            </div>
            <div className="col-auto text-center text-md-end">
              <div className="header-icon">
                <div className="theme-switcher">
                  <button>
                    <span className="dark"><i className="fas fa-moon"></i></span>
                    <span className="light"><i className="fas fa-sun-bright"></i></span>
                  </button>
                </div>
              </div>
              <div className="header-links">
                <ul>
                  <li><Link href="/sobre-nos">Política e privacidade</Link></li>
                  <li><Link href="/sobre-nos">Termos e condições</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-wrapper">
        {/* Sticky Menu Area */}
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto d-lg-none d-block">
                <div className="header-logo">
                  <Link href="/">
                    <Image src={logoWhiteImg} alt="Prestígio" />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li><Link href="/">Início</Link></li>
                    <li className="menu-item-has-children">
                      <Link href="#">Categorias</Link>
                      <ul className="sub-menu">
                        {
                          categories.map((category) => (
                            <li key={category.slug}>
                              <Link href={`/categoria/${category.slug}`}>
                                {category.name}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </li>
                    <li><Link href="/sobre-nos">Sobre nós</Link></li>
                    <li><Link href="/contacto">Contactos</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-auto">
                <div className="header-button">
                  <button type="button" className="simple-icon searchBoxToggler">
                    <i className="far fa-search"></i>
                  </button>
                  <button type="button" className="th-menu-toggle d-block d-lg-none">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderArea;