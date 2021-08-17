import './SearchBar.css'

import React, { useEffect, useState } from 'react'

import FlashOnIcon from '@material-ui/icons/FlashOn'
import { Link } from 'react-router-dom'
import { Results } from './components/Results'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { findResultBySearch } from '../../services/searchBook'
import { getBooks } from '../../services/api'

export const SearchBar = () => {
  const [search, setSearch] = useState([''])
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
        <Link to='/'>
          <FlashOnIcon style={{ margin: '5px' }}></FlashOnIcon>
        </Link>
        <input
          type='text'
          placeholder='Trouve livre à ton pied'
          value={search}
          onChange={getSearchByCustomer}
        />
        <button onClick={getTitle}>
          <img
            src='https://img.icons8.com/material-outlined/24/000000/search--v1.png'
            alt=''
          />
        </button>

        <Link to='/cart'>
          <ShoppingCartIcon style={{ margin: '5px' }}></ShoppingCartIcon>
        </Link>
      </nav>
      <Results results={titleFromSearch}></Results>
    </div>
  )
}
