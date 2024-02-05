
import React from 'react'
import Product from './Product'
export default function ProductList(props) {
    
  return (
    props.productList.length>0 ?
    props.productList.map((product,i)=>{
        return <Product product={product} key={i} incQuant={props.incQuant} index={i} decQuant={props.decQuant} removeItem={props.removeItem}/>
    })
    : <h1>No Products in the Cart</h1>
  )
}
