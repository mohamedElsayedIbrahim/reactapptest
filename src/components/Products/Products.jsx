import React, { Component } from 'react'
import CardProduct from './CardProduct'
import axios from 'axios'

export default class Products extends Component {

  constructor(){
    super()

    this.state = {
      name:'Mohamed',
      count:0,
      productsList:[]
    }
    
  }

  componentDidMount(){
    axios.get('https://fakestoreapi.com/products')
    .then(({data})=>{
      this.setState({productsList:data})
    })
    console.log('componentDidMount');
  }
  

  // btnClick = (name)=>{
  //   alert('button is clicked by '+name)
  // }

  // increamentBtn = ()=>{
  //   let newCount = this.state.count + 1;

  //   this.setState({count:newCount});
  // }

  // decreamentBtn = ()=>{
  //   let newCount = this.state.count - 1;

  //   this.setState({count:newCount});
  // }

  removeProduct = (productId)=>{
    
    let newProductList = this.state.productsList.filter((product)=>product.id!== productId)
    this.setState({productsList:newProductList})
    
  }

  render() {
    console.log('render');
    
    return <>
    {/* <div className="my-5 container">
      <p>count is: {this.state.count}</p>
      <button type='button' onClick={this.decreamentBtn} className='btn mx-3 btn-warning'>decreament</button>

      <button type='button' onClick={()=>{this.btnClick("Ali")}} className='btn mx-3 btn-primary'>Click me</button>

      <button type='button' onClick={this.increamentBtn} className='btn mx-3 btn-success'>increament</button>
    </div> */}
      <div className='text-center py-5'>
        <h1>Store Products</h1>
        <p>Lorem, ipsum dolor.</p>
      </div>
      <div className="container mb-3">
        <div className="row g-3">
          
          {this.state.productsList&&this.state.productsList.map((product,index)=><CardProduct key={index} productData={product} price={product.price} productTitle={product.title} removeEvent={()=>{this.removeProduct(product.id)}}/>)}
        </div>
      </div>
      
    </>
  }
}
