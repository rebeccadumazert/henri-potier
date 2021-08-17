import './Books.css'

import React, { useEffect, useState } from 'react'

import Book from './components/Book/Book'
import { getBooks } from '../../services/api'

function Books() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const getBooksDatas = async () => {
      const datas = await getBooks()
      setBooks(datas)
    }
    getBooksDatas()
  }, [])
  return (
    <div className='Books'>
      {books.map((book, i) => (
        <Book key={i} book={book}></Book>
      ))}
    </div>
  )
}

export default Books
