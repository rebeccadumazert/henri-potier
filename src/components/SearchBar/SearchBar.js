import './SearchBar.css'

import React, { useEffect, useState } from 'react'

import FlashOnIcon from '@material-ui/icons/FlashOn'
import { Link } from 'react-router-dom'
import Results from '../Results/Results'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { booksBySearch } from '../../store/resultSearch'
import { getBooks } from '../../services/api'
import logoSearch from '../../images/search.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [popUp, setPopUp] = useState(false)
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  const totalItemsInCart = useSelector((state) => state.cart.current).length

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
    setPopUp(true)
  }

  function triggerSearch(event) {
    if (event.code === 'Enter') {
      searchThroughTitles()
    }
  }

  const searchThroughTitles = () => {
    findResultBySearch(search, books)
    setSearch('')
  }

  const setSearchByCustomer = ({ target: { value } }) => {
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
            onChange={setSearchByCustomer}
            onKeyDown={triggerSearch}
          />
          {!search ? (
            <span></span>
          ) : (
            <button onClick={searchThroughTitles}>
              <img src={logoSearch} alt='' />
            </button>
          )}
        </div>

        <Link
          to='/cart'
          className='Icon'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ShoppingCartIcon />
          <p>{totalItemsInCart}</p>
        </Link>
      </nav>
      {popUp && <Results popUp={popUp} setPopUp={setPopUp} />}
    </div>
  )
}
