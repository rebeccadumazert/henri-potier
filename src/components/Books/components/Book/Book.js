import './Book.css'

export default function Book({ bookdata: { title, price, cover, synopsis } }) {
  return (
    <div className='bookCard'>
      <div className='picContainer'>
        <img src={cover} alt='' />
      </div>
      <div>
        <p>{title}</p>
        <p>Price : {price} €</p>
        {/* <p>Synopsis: {synopsis}</p> */}
      </div>
    </div>
  )
}
