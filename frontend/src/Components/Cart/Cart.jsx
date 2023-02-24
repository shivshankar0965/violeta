import React, { useState } from 'react'
import CartComponents from './CartComponents'
import { dummy } from './data'
import EmptyCart from './EmptyCart'

const Cart = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  return (
    <div>
        {data.length===0?<EmptyCart />:<CartComponents data={data} />}
    </div>
  )
}

export default Cart