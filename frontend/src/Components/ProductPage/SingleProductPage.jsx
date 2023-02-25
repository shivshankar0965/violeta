import React from 'react'
import style from "../ProductPage/SingleProductPage.module.css"




const SingleProductPage = () => {
  return (
    <div className={style.SingleDiv}>
      <div class={style.left}>
        <div class={style.left_first}>
          <img src="https://media6.ppl-media.com/tr:h-75,w-75,c-at_max,dpr-2/static/img/product/270491/insight-cosmetics-pore-minimizer-primer-30ml_7_display_1674203745_c9692978.jpg" alt="" />
          <img src="https://media6.ppl-media.com/tr:h-75,w-75,c-at_max,dpr-2/static/img/product/270491/insight-cosmetics-pore-minimizer-primer-30ml_9_display_1674203747_7159b9fb.jpg" alt="" />
          <img src="https://media6.ppl-media.com/tr:h-75,w-75,c-at_max,dpr-2/static/img/product/270491/insight-cosmetics-pore-minimizer-primer-30ml_8_display_1674203696_4bb5182c.jpg" alt="" />
          <img src="https://media6.ppl-media.com/tr:h-75,w-75,c-at_max,dpr-2/static/img/product/270491/insight-cosmetics-pore-minimizer-primer-30ml_8_display_1674203696_4bb5182c.jpg" alt="" />
        </div>
        <div>
          <img src="https://media6.ppl-media.com/tr:h-75,w-75,c-at_max,dpr-2/static/img/product/270491/insight-cosmetics-pore-minimizer-primer-30ml_8_display_1674203696_4bb5182c.jpg" alt="" width={"500px"} />
        </div>

      </div>
      <div class={style.right}>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, aliquid.</h1>
        <h1>price</h1>
        <h1>rating</h1>
        <button>Add to Cart</button>
        

        <div class={style.extraa}>
          <div style={{display:"flex",gap:"2rem"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9sX0bA2LHXRGVYiQY4GbsSweerEraya5tA&usqp=CAU" alt="truck" width={"10%"} /><span>2-3 business days delivery</span></div>
          <div style={{display:"flex",gap:"2rem"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnuc0Ibtm459SgYSiqk1PtFYIxAsVrcNaWA&usqp=CAU" alt="truck" width={"10%"} /><span>100% Genuine Products</span></div>
          <div style={{display:"flex",gap:"2rem"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQminS9JStVAB9HVFDlIbDg4Mo_KXiUv2naGw&usqp=CAU" alt="truck" width={"10%"} /><span>Return in 15 days</span></div>
          <div style={{display:"flex",gap:"2rem"}}><img src="https://thumbs.dreamstime.com/b/wallet-icon-card-cash-vector-illustration-eps-220137972.jpg" alt="truck" width={"10%"} /><span>Free COD above 499</span></div>
          
         
       
          
        </div>
       
      </div>

      {/* extraa information */}

    </div>
  )
}

export default SingleProductPage


// truck 
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9sX0bA2LHXRGVYiQY4GbsSweerEraya5tA&usqp=CAU

//shield
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnuc0Ibtm459SgYSiqk1PtFYIxAsVrcNaWA&usqp=CAU

//arrow
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQminS9JStVAB9HVFDlIbDg4Mo_KXiUv2naGw&usqp=CAU

//wallet
//https://thumbs.dreamstime.com/b/wallet-icon-card-cash-vector-illustration-eps-220137972.jpg