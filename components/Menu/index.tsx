import HeaderArea from '@/components/Menu/HeaderArea';
import MobileMenu from '@/components/Menu/MobileMenu';
import SideMenu from '@/components/Menu/SideMenu';
import React from 'react';

const newsCategories = [
  {
    name: 'Política',
    slug: 'politica',
  },
  {
    name: 'Negócios',
    slug: 'negocios',
  },
  {
    name: 'Saúde',
    slug: 'saude',
  },
  {
    name: 'Tecnologia',
    slug: 'tecnologia',
  },
  {
    name: 'Desporto',
    slug: 'desporto',
  },
  {
    name: 'Entretenimento',
    slug: 'entretenimento',
  },
];


const Nav: React.FC = () => (
  <>
    <SideMenu />
    <MobileMenu categories={newsCategories} />
    <HeaderArea categories={newsCategories} />
  </>
)

export default Nav