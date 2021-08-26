import { addToCart } from '../../store/cart'
import styles from './Book.module.css'
import { useDispatch } from 'react-redux'

export default function Book({ book }) {
  const { cover = '', title = '', price = '' } = book
  const dispatch = useDispatch()

  const buyIt = () => {
    dispatch(addToCart(book))
  }

  const { bookCard, picContainer, infoBook, priceBook, buyItBtn } = styles
  return (
    <div className={bookCard}>
      <div className={picContainer}>
        <img src={cover} alt='' />
      </div>
      <div className={infoBook}>
        <p>{title}</p>
        <p className={priceBook}>{price}€</p>
        <button className={buyItBtn} onClick={buyIt}>
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}
