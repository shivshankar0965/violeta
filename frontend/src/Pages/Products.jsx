import React from 'react'
import CarousalSecond from '../Components/ProductPage/CarousalSecond'
import style from "../style/Products.module.css"
import CarousalTop from '../Components/ProductPage/CarousalTop'
import CarousalThird from '../Components/ProductPage/CarousalThird'
import CarousalForth from '../Components/ProductPage/CarousalForth'
import Filter from '../Components/ProductPage/Filter'
import AllProducts from "../Components/ProductPage/AllProducts"

const Products = () => {
  return (
    <div className={style.products_Div}>
        <CarousalTop/>
        <Filter/>
        <h1 >BEST SELLERS</h1>
        <CarousalSecond/>
        <h1 >CURRENTLY TRENDING</h1>
        <CarousalThird/>
        <h1>CURATED FOR YOU</h1>
        <CarousalForth/>
        <h1>ALL PRODUCTS</h1>
        <AllProducts/>


       
    </div>
  )
}

export default Products