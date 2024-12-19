import Hit from '@/components/Search/Hit'
import { searchClient } from '@/utils/search-client'
import React from 'react'
import { Configure, Hits, InstantSearch, SearchBox } from 'react-instantsearch-hooks-web'

export interface SearchProviderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  indexName: string
}

const SearchProvider: React.FC<SearchProviderProps> = ({ isOpen, setIsOpen, indexName }) => {

  return (
    <div className={`${isOpen ? 'd-block' : 'd-none'} position-fixed w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className='w-100 h-100 cursor-default backdrop-blur-sm bg-slate-900-30 z-0'
      ></button>

      <div className="news-search-box">
        <InstantSearch indexName={indexName} searchClient={searchClient}>
          <Configure hitsPerPage={6} />
          <SearchBox
            classNames={{
              root: 'w-100',
              form: 'w-100 position-relative',
              input: 'news-search-input',
              submitIcon: 'news-search-submit-icon',
              resetIcon: 'news-search-reset-icon',
            }}
            placeholder="Pesquisar..."
          />
          <Hits
            hitComponent={Hit}
            classNames={{
              root: 'news-search-hits',
            }}
          />
        </InstantSearch>
        <div className="h-4 w-100 bg-white position-absolute bottom-0 start-0 z-10"></div>
      </div>
    </div>
  )
}

export default SearchProvider