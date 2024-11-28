import logoImg from '@/assets/img/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  name: string;
  slug: string;
}

interface Props {
  categories: Category[];
}

const MobileMenu: React.FC<Props> = ({ categories }) => {
  return (
    <div className="th-menu-wrapper">
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle"><i className="fal fa-times"></i></button>
        <div className="mobile-logo">
          <Link href="home-newspaper.html">
            <Image src={logoImg} alt="Prestígio" />
          </Link>
        </div>
        <div className="th-mobile-menu">
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
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;