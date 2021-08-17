import './Book.css'

import { addToCart } from '../../../../store/cart'
import { useDispatch } from 'react-redux'

export default function Book({ book }) {
  const dispatch = useDispatch()

  const buyIt = () => {
    dispatch(addToCart(book))
  }
  return (
    <div className='bookCard'>
      <div className='picContainer'>
        <img src={book.cover} alt='' />
      </div>
      <div>
        <p>{book.title}</p>
        <p>Price : {book.price} €</p>
        <button onClick={buyIt}>Mettre dans le panier</button>
      </div>
    </div>
  )
}
