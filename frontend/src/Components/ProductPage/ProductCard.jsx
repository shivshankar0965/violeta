import React from 'react'


const ProductCard = ({ image, id, price, title,rating }) => {
    return (
        <>
            <div >
                <img src={image} alt="img" />
                <h1>{price}</h1>
                <h1>{title}</h1>
                <h1>{rating}</h1>
                <button>Add to Cart</button>
            </div>
        </>
    )
}

export default ProductCard