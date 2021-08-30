import BtnAddCart from '../BtnAddCart/BtnAddCart'
import styles from './DetailsBook.module.css'
import { withRouter } from 'react-router'

function DetailsBook({
  location: {
    state: { book },
  },
}) {
  const { title, cover, price, synopsis } = book
  const {
    detailsContainer,
    coverContainer,
    infoContainer,
    resume,
    cost,
    addCart,
  } = styles
  return (
    <div className={detailsContainer}>
      <div className={coverContainer}>
        <img src={cover} alt='' />
      </div>
      <div className={infoContainer}>
        <h3>{title}</h3>
        <p className={cost}>{price} €</p>
        <p className={resume}>Résumé :</p>
        {synopsis.map((syno, i) => (
          <p key={i}>{syno}</p>
        ))}
        <div className={addCart}>
          <BtnAddCart book={book}></BtnAddCart>
        </div>
      </div>
    </div>
  )
}

export const Details = withRouter(DetailsBook)
