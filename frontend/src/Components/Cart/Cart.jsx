import React from 'react'
import CartComponents from './CartComponents'
import { dummy } from './data'
import EmptyCart from './EmptyCart'

const Cart = () => {
    const data=[...dummy]
  return (
    <div>
        {data.length===0?<EmptyCart />:<CartComponents data={data} />}
    </div>
  )
}

export default Cart