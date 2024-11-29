import HeaderArea from '@/components/Menu/HeaderArea';
import MobileMenu from '@/components/Menu/MobileMenu';
import SideMenu from '@/components/Menu/SideMenu';
import { Category } from '@/types/schema';
import React from 'react';

interface Props {
  categories: Category[]
}

const Nav: React.FC<Props> = ({ categories }) => (
  <>
    <SideMenu />
    <MobileMenu categories={categories} />
    <HeaderArea categories={categories} />
  </>
)

export default Nav