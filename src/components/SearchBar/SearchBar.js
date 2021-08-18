import './SearchBar.css'

import React, { useEffect, useState } from 'react'

import FlashOnIcon from '@material-ui/icons/FlashOn'
import { Link } from 'react-router-dom'
import Results from './components/Results'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { booksBySearch } from '../../store/resultSearch'
import { getBooks } from '../../services/api'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [popUp, setPopUp] = useState(false)
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  const [titleFromSearch, setTitleFromSearch] = useState([])
  const totalItemsInCart = useSelector((state) => state.cart.current).length

  let showResults
  if (popUp) {
    showResults = <Results popUp={popUp} setPopUp={setPopUp}></Results>
  }
  useEffect(() => {
    const getBooksDatas = async () => {
      const datas = await getBooks()
      setBooks(datas)
    }
    getBooksDatas()
  }, [])
  function findResultBySearch(search, booksList) {
    const searchRegex = new RegExp(`/*${search}*`, 'i')
    const resultSearch = booksList.filter(({ title }) =>
      searchRegex.test(title)
    )
    dispatch(booksBySearch(resultSearch))
    setPopUp(!popUp)
  }

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
            <button onClick={getTitle}>
              <img
                src='https://img.icons8.com/material-outlined/24/000000/search--v1.png'
                alt=''
              />
            </button>
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
      {showResults}
    </div>
  )
}
