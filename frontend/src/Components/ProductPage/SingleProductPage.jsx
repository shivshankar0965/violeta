
import { useState } from "react"
import style from "../ProductPage/SingleProductPage.module.css"





const SingleProductPage = () => {


  let singleData = JSON.parse(localStorage.getItem("product"))
  console.log(`hbfdjngebsdfhjdegf${singleData}`)

  const { description, price, images, strikedPrice } = singleData

const [curr, setCurrent] = useState(0);




  return (
    <div className={style.SingleDiv}>
      <div class={style.left}>
        <div class={style.left_first}>
          
          {
           images.map((el,i)=>(
            <img onClick={()=>setCurrent(i)} key={i} src={el.url} alt="" width={"100%"} height={"90%"} />
           ))
          }
         
        </div>
        <div className={style.ImageContainer}>
          <img src={images[curr].url} alt="" width={"500px"} />
        </div>

      </div>
      <div class={style.right}>
        <h1>{description}</h1>
        <div class={style.info}>
        <h1 id={style.price}>₹{price}</h1>
        <h1  id={style.strikedPrice}><s>{strikedPrice}</s></h1>
        <p  id={style.off}>{`${(((strikedPrice - price) / strikedPrice) * 100).toFixed(0)}% off`}</p>
        </div>
        
        <button>Add to Cart</button>


        <div class={style.extraa}>
          <div style={{ display: "flex", gap: "2rem" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9sX0bA2LHXRGVYiQY4GbsSweerEraya5tA&usqp=CAU" alt="truck" width={"10%"} /><span>2-3 business days delivery</span></div>
          <div style={{ display: "flex", gap: "2rem" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnuc0Ibtm459SgYSiqk1PtFYIxAsVrcNaWA&usqp=CAU" alt="truck" width={"10%"} /><span>100% Genuine Products</span></div>
          <div style={{ display: "flex", gap: "2rem" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQminS9JStVAB9HVFDlIbDg4Mo_KXiUv2naGw&usqp=CAU" alt="truck" width={"10%"} /><span>Return in 15 days</span></div>
          <div style={{ display: "flex", gap: "2rem" }}><img src="https://thumbs.dreamstime.com/b/wallet-icon-card-cash-vector-illustration-eps-220137972.jpg" alt="truck" width={"10%"} /><span>Free COD above 499</span></div>




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