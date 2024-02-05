import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js'
import Footer from './components/Footer.js'
import React,{useState} from 'react';
import Additem from './components/Additem.js';
function App() {
  const products=[
    {
      price: 13000,
      name:"Vivo T2X" ,
      quantity:0,
    },
    {
      price: 14000,
      name:"Realme Narzo 20" ,
      quantity:0,
    }
  ]
  let [productList , setProductList]=useState(products)
  let [totalAmt , setTotalAmt]=useState(0)

  const incQuant=(index)=>{
    let newProductList=[...productList]
    let newTotalAmt=totalAmt
    newProductList[index].quantity++
    newTotalAmt += newProductList[index].price
    setTotalAmt(newTotalAmt)
    setProductList(newProductList);
  }
  const decQuant=(index)=>{
    let newProductList=[...productList]
    let newTotalAmt=totalAmt
    if(newProductList[index].quantity > 0) {
      newProductList[index].quantity--
      newTotalAmt -= newProductList[index].price
    } 
    setTotalAmt(newTotalAmt)
    setProductList(newProductList);
  }

  const resetQuant=()=>{
    let newProductList=[...productList]
    newProductList.map((products)=>{
      products.quantity=0
    })
    setProductList(newProductList)
    setTotalAmt(0)
  }

  const removeItem=(index)=>{
    let newProductList=[...productList]
    let newTotalAmt=totalAmt
    newTotalAmt -=
    newProductList[index].quantity*newProductList[index].price
    newProductList.splice(index,1)
    setProductList(newProductList)
    setTotalAmt(newTotalAmt)
  }

  return (
    <>
  <Navbar/>
  <main className='container mt-5'>
  <Additem />
  <ProductList productList={productList} incQuant={incQuant} decQuant={decQuant} removeItem={removeItem}/>
  </main>
  <Footer totalAmt={totalAmt} resetQuant={resetQuant}/>
    </>
  );
}

export default App;
