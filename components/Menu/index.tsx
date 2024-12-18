import HeaderArea from '@/components/Menu/HeaderArea';
import MobileMenu from '@/components/Menu/MobileMenu';
import SideMenu from '@/components/Menu/SideMenu';
import { Article, Category } from '@/types/schema';
import React from 'react';

interface Props {
  categories: Category[]
  featuredArticles: Article[]
}

const Nav: React.FC<Props> = ({ categories, featuredArticles }) => (
  <>
    <SideMenu featuredArticles={featuredArticles} />
    <MobileMenu categories={categories} />
    <HeaderArea categories={categories} />
  </>
)

export default Nav