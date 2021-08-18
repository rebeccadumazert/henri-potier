import './Book.css'

import { addToCart } from '../../../../store/cart'
import { useDispatch } from 'react-redux'

export default function Book({ book }) {
  const { cover = '', title = '', price = '' } = book
  const dispatch = useDispatch()

  const buyIt = () => {
    dispatch(addToCart(book))
  }
  return (
    <div className='bookCard'>
      <div className='picContainer'>
        <img src={cover} alt='' />
      </div>
      <div className='InfoBook'>
        <p>{title}</p>
        <p className='Price'>{price}€</p>
        <button className='buyIt' onClick={buyIt}>
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}
