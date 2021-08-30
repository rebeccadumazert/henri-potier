import React, { useEffect, useState } from 'react'

import FlashOnIcon from '@material-ui/icons/FlashOn'
import { Link } from 'react-router-dom'
import Results from '../Results/Results'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { booksBySearch } from '../../store/resultSearch'
import { getBooks } from '../../services/api'
import logoSearch from '../../images/search.png'
import styles from './SearchBar.module.css'
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

  // regex to filter the search

  function findResultBySearch(search, booksList) {
    const searchRegex = new RegExp(`/*${search}*`, 'i')
    const resultSearch = booksList.filter(({ title }) =>
      searchRegex.test(title)
    )
    dispatch(booksBySearch(resultSearch))
    setPopUp(true)
  }

  function triggerSearch({ code }) {
    if (code === 'Enter' && search.length > 0) {
      searchThroughTitles()
    }
    if (code === 'Escape') {
      setPopUp(false)
    }
  }

  function searchThroughTitles() {
    findResultBySearch(search, books)
    setSearch('')
  }

  function setSearchByCustomer({ target: { value } }) {
    setSearch(value)
  }

  const { searchBar, head, icon, homeIcon } = styles

  return (
    <div>
      <nav className={head}>
        <Link to='/' className={icon}>
          <FlashOnIcon className={homeIcon}></FlashOnIcon>
        </Link>
        <div className={searchBar}>
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

        <Link to='/cart' className={icon}>
          <ShoppingCartIcon />
          <p>{totalItemsInCart}</p>
        </Link>
      </nav>
      {popUp && <Results popUp={popUp} setPopUp={setPopUp} />}
    </div>
  )
}
