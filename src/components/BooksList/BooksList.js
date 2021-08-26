import React, { useEffect, useState } from 'react'

import Book from '../Book/Book.js'
import { getBooks } from '../../services/api'
import styles from './BooksList.module.css'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooksDatas = async () => {
      const datasBooks = await getBooks()
      setBooks(datasBooks)
    }
    getBooksDatas()
  }, [])

  const { booksList } = styles

  return (
    <div>
      <div className={booksList}>
        {books.map((book, i) => (
          <Book key={i} book={book}></Book>
        ))}
      </div>
    </div>
  )
}

export default Books
