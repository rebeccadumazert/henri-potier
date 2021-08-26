import './BooksList.css'

import React, { useEffect, useState } from 'react'

import Book from '../Book/Book.js'
import { getBooks } from '../../services/api'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooksDatas = async () => {
      const datasBooks = await getBooks()
      setBooks(datasBooks)
    }
    getBooksDatas()
  }, [])

  return (
    <div>
      <div className='Books'>
        {books.map((book, i) => (
          <Book key={i} book={book}></Book>
        ))}
      </div>
    </div>
  )
}

export default Books
