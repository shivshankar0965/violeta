import React from 'react'
import Prod_Car from "../ProductPage/ProductCard.module.css"
import LinesEllipsis from 'react-lines-ellipsis'


const ProductCard = ({ images, id, price,strikedPrice,description,offer }) => {
    return (
        <>
             <div  id={Prod_Car.firstDiv} key={id} >
              <div   id={Prod_Car.imageDiv} >
                <img
                  src={images[0].url}
                  alt="images"
                  width="100%"
                />
              </div>
              <div id={Prod_Car.details}>
              <button id={Prod_Car.button} >{offer} offer</button>
            <h3 id={Prod_Car.description}><LinesEllipsis
              text={description}
              maxLine='2'
              ellipsis='...'
              trimRight
              basedOn='letters'
            /></h3>
              <div id={Prod_Car.oneLineDiv}>
              <h2>₹{price}</h2>
              <p><s>{strikedPrice}</s></p>
              <p>{`${(((strikedPrice-price)/strikedPrice)*100).toFixed(0)}% off`}</p>
              </div>

              <div>
              <button id={Prod_Car.cartButton}>Add to Cart</button>
              </div>

              </div>
              
            </div>
        </>
    )
}

export default ProductCard

