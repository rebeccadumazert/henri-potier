import BtnAddCart from '../BtnAddCart/BtnAddCart'
import { Link } from 'react-router-dom'
import styles from './Book.module.css'

export default function Book({ book }) {
  const { cover = '', title = '', price = '', isbn = '' } = book

  const { bookCard, picContainer, infoBook, priceBook, link } = styles
  return (
    <div className={bookCard}>
      <Link
        to={{
          pathname: `/bookInfo/${isbn}`,
          state: { book },
        }}
        className={link}
      >
        <div className={picContainer}>
          <img src={cover} alt='' />
        </div>
        <div className={infoBook}>
          <p>{title}</p>
          <p className={priceBook}>{price}€</p>
        </div>
      </Link>
      <BtnAddCart book={book}></BtnAddCart>
    </div>
  )
}
