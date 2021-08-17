import './Book.css'

export default function Book({ bookdata: { title, price, cover, synopsis } }) {
  const putOnBasket = () => {}
  return (
    <div className='bookCard'>
      <div className='picContainer'>
        <img src={cover} alt='' />
      </div>
      <div>
        <p>{title}</p>
        <p>Price : {price} €</p>
        <button onClick={putOnBasket}>Mettre dans le panier</button>
      </div>
    </div>
  )
}
