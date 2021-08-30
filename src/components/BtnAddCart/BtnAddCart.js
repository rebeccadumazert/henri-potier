import { addToCart } from '../../store/cart'
import styles from './BtnAddCart.module.css'
import { useDispatch } from 'react-redux'

export default function BtnAddCart({ book }) {
  const dispatch = useDispatch()
  const buyIt = () => {
    dispatch(addToCart(book))
  }
  const { buyItBtn } = styles
  return (
    <button className={buyItBtn} onClick={buyIt}>
      Ajouter au panier
    </button>
  )
}
