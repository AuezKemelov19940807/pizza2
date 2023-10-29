//components
'use client'
//components
import ContentMain from '@/components/ContentMain'
import ContentTop from '@/components/ContentTop'
import Pagination from '@/components/Pagination'

export default function Home() {
  return (
    <main>
      <ContentTop />
      <ContentMain />
      <Pagination />
    </main>
  )
}
