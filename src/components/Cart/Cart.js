import { useEffect, useState } from 'react'

import { getCommercialOffers } from '../../services/api'
import { useSelector } from 'react-redux'

function Cart() {
  const [discountedTotal, setDiscountedTotal] = useState(0)

  const cart = useSelector((state) => state.cart.current)
  const total = cart.reduce((prev, current) => {
    return prev + current.price
  }, 0)

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
    if (total > 0) {
      getCommercialOffers(cart.map((cartItem) => cartItem.isbn)).then(
        (data) => {
          console.log(data)
          setDiscountedTotal(total - getBestOffer(data.offers))
        }
      )
      console.log('should fetch blabla', cart)
    }
  }, [cart, total])

  return (
    <div>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={`${index}-${cartItem.isbn}`}>
            {cartItem.isbn} : {cartItem.title}
          </li>
        ))}
      </ul>
      <p>
        Total : {total}€ (avec reduction : {discountedTotal}
      </p>
    </div>
  )
}

export default Cart
