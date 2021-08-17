import './SearchBar.css'

import React, { useEffect, useState } from 'react'

import FlashOnIcon from '@material-ui/icons/FlashOn'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { booksBySearch } from '../../store/resultSearch'
import { getBooks } from '../../services/api'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState([''])
  const [books, setBooks] = useState([])
  const [titleFromSearch, setTitleFromSearch] = useState([])
  const totalItemsInCart = useSelector((state) => state.cart.current).length

  function findResultBySearch(search, booksList) {
    const searchRegex = new RegExp(`/*${search}*`, 'i')
    const resultSearch = booksList.filter((book) =>
      searchRegex.test(book.title)
    )
    dispatch(booksBySearch(resultSearch))
  }

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
      <nav className='Head'>
        <Link to='/' className='Icon'>
          <FlashOnIcon style={{ margin: '5px' }}></FlashOnIcon>
        </Link>
        <div className='SearchBar'>
          <input
            type='text'
            placeholder='Trouve livre à ton pied'
            value={search}
            onChange={getSearchByCustomer}
          />
          {search === '' ? (
            <span></span>
          ) : (
            <Link to='/search'>
              <img
                onClick={getTitle}
                src='https://img.icons8.com/material-outlined/24/000000/search--v1.png'
                alt=''
              />
            </Link>
          )}
        </div>

        <Link
          to='/cart'
          className='Icon'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ShoppingCartIcon></ShoppingCartIcon>
          <p>{totalItemsInCart}</p>
        </Link>
      </nav>
    </div>
  )
}
