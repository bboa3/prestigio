import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

export const SearchButton: React.FC<Props> = ({ setIsOpen, isOpen }) => {

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      className="w-full lg:w-44 h-9 lg:h-8 text-slate-500 bg-slate-200 lg:bg-slate-800 rounded-full flex justify-start items-center cursor-pointer focus:outline-none ring-0"
    >
      <MagnifyingGlassIcon className='w-6 h-6 pl-1.5 fill-slate-400 hover:fill-slate-300' />
      <span className='pl-2'>
        Pesquisar
      </span>
    </button>
  )
}

export default SearchButton
