import axios from 'axios'
import React, { useEffect,useState } from 'react'
import ProductCard from './ProductCard'
import STYLE from "../ProductPage/AllProducts.module.css"
import { Link } from 'react-router-dom'
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'



const AllProducts = () => {
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(false)
  


  const getData=()=>{
    setLoading(true)
   axios.get("https://render-mock-server.onrender.com/makeup").then((res)=>{
    console.log(res.data)
    setData(res.data)
    setLoading(false)
   }).catch((err)=>{
    console.log(err)
    setError(true)
   })
  }

 
 

  useEffect(()=>{
     getData()
  },[])

  if(loading){
    return <Box padding='6' boxShadow='lg' bg='white'>
    <SkeletonCircle size='10' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  </Box>
  }

  if(error){
    return <h1 style={{fontSize:"40px",color:"red"}}>error....</h1>
  }


  return (
    <>
    <div className={STYLE.ProductsDiv}>
    { 
      data?.map((el)=>{
        return <Link to={`/products/:${el.id}`}><ProductCard key={el.id} {...el}/></Link>
      })  
    }
    </div>
    </>
  )
}

export default AllProducts