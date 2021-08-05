import './SearchBar.css'

import React, { useEffect, useState } from 'react'

import { Results } from './components/Results'
import { findResultBySearch } from '../../services/searchBook'
import { getBooks } from '../../services/api'

export const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  const [titleFromSearch, setTitleFromSearch] = useState([])

  useEffect(() => {
    const getBooksDatas = async () => {
      const datas = await getBooks()
      setBooks(datas)
    }
    getBooksDatas()
  }, [])

  const getTitle = () => {
    const titles = findResultBySearch(search, books)
    setTitleFromSearch(titles)
    setSearch('')
  }

  const getSearchByCustomer = ({ target: { value } }) => {
    setSearch(value)
  }
  return (
    <div>
      <nav className='SearchBar'>
        <input
          type='text'
          placeholder='Trouve livre à ton pied'
          value={search}
          onChange={getSearchByCustomer}
        />
        {search !== '' ? (
          <button onClick={getTitle}>
            <img
              src='https://img.icons8.com/material-outlined/24/000000/search--v1.png'
              alt=''
            />
          </button>
        ) : (
          <></>
        )}
      </nav>
      <Results results={titleFromSearch}></Results>
    </div>
  )
}
