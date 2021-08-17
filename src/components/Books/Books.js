import './Books.css'

import React, { useEffect, useState } from 'react'

import Book from './components/Book/Book'
import { getBooks } from '../../services/api'
import { useSelector } from 'react-redux'

function Books() {
  const [books, setBooks] = useState([])
  const resultsSearch = useSelector((state) => state.resultsSearch.current)

  useEffect(() => {
    const getBooksDatas = async () => {
      const datas = await getBooks()
      setBooks(datas)
    }
    getBooksDatas()
  }, [])

  return (
    <div>
      {resultsSearch.length === 0 ? (
        <div className='Books'>
          {books.map((book, i) => (
            <Book key={i} book={book}></Book>
          ))}
        </div>
      ) : (
        <div className='Books'>
          {resultsSearch.map((book, i) => (
            <Book key={i} book={book[i]}></Book>
          ))}
        </div>
      )}
    </div>
  )
}

export default Books
