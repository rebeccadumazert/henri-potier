import './Cart.css'

import { useEffect, useState } from 'react'

import { getCommercialOffers } from '../../services/api'
import { useSelector } from 'react-redux'

function Cart() {
  const [discountedTotal, setDiscountedTotal] = useState(0)
  const cart = useSelector((state) => state.cart.current)
  const total = cart.reduce((prev, current) => {
    return prev + current.price
  }, 0)

  // fonction qui permet de tester les différentes offfres renvoyées par l'api et qui renvoie la meilleure
  function getBestOffer(offers) {
    let bestDiscount = 0
    for (let i = 0; i < offers.length; i++) {
      let discount = 0
      switch (offers[i].type) {
        case 'percentage':
          discount = (total * offers[i].value) / 100
          break
        case 'minus':
          discount = offers[i].value
          break
        case 'slice':
          discount = Math.floor(total / offers[i].sliceValue) * offers[i].value
          break
        default:
          discount = 0
      }
      if (bestDiscount < discount) {
        bestDiscount = discount
      }
    }
    return bestDiscount
  }

  useEffect(() => {
    ;(async () => {
      if (total > 0) {
        try {
          const data = await getCommercialOffers(
            cart.map((cartItem) => cartItem.isbn)
          )
          setDiscountedTotal(total - getBestOffer(data.offers))
        } catch (e) {
          console.error(e)
        }
      }
    })()
  }, [cart, total])

  return (
    <div>
      {total === 0 ? (
        <p>Vous n'avez pas d'article dans votre panier !</p>
      ) : (
        <div className='ContainerTotal'>
          <div className='ContainerBookCart'>
            {cart.map((cartItem, index) => (
              <div key={index} className='BookCart'>
                <div className='PicContainer'>
                  <img src={cartItem.cover} alt='' />
                </div>
                <div className='InfoBookToBuy'>
                  <p>{cartItem.title}</p>
                  <p className='Price'>{cartItem.price} €</p>
                </div>
              </div>
            ))}
          </div>
          <div className='TotalBuy'>
            <h3>Total de vos achats</h3>
            <p>
              Total : <span>{total} €</span>
            </p>
            <p>
              Total après réduction : <span>{discountedTotal} €</span>
            </p>
            <button>PAIEMENT</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
