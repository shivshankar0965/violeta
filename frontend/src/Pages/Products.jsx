import React from 'react'
import CarousalSecond from '../Components/ProductPage/CarousalSecond'
import style from "../style/Products.module.css"
import CarousalTop from '../Components/ProductPage/CarousalTop'
import CarousalThird from '../Components/ProductPage/CarousalThird'
import CarousalForth from '../Components/ProductPage/CarousalForth'

const Products = () => {
  return (
    <div className={style.products_Div}>
        <CarousalTop/>
        <h1 >BEST SELLERS</h1>
        <CarousalSecond/>
        <h1 >CURRENTLY TRENDING</h1>
        <CarousalThird/>
        <h1>CURATED FOR YOU</h1>
        <CarousalForth/>


       
    </div>
  )
}

export default Products