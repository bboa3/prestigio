import Footer from '@/components/Footer'
import SEO from '@/components/Layout/SEO'
import Nav from '@/components/Menu'
import { Article, Category, Media } from '@/types/schema'
import React, { ReactNode } from 'react'

interface Props {
  description: string
  keywords: string
  title: string
  children: ReactNode
  robots?: string
  categories: Category[]
  featuredArticles: Article[]
  gallery: Media[]
}

const SimpleLayout: React.FC<Props> = ({ featuredArticles, categories, gallery, description, robots, keywords, title, children }) => {
  return (
    <>
      <SEO description={description} keywords={keywords} robots={robots} title={title} />

      <Nav categories={categories} />
      <main className='w-full min-h-screen overflow-hidden pt-12 lg:pt-32 pb-3 text-slate-800'>
        {children}
      </main>
      <Footer categories={categories} featuredArticles={featuredArticles} gallery={gallery} />
    </>
  )
}

export default SimpleLayout
