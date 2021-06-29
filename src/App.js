import React, { Component } from 'react'
import Navbar from './Comonents/Navbar.jsx'
import Products from './Comonents/Products.jsx'
import Cart from './Comonents/Cart.jsx'
export default class App extends Component {
 
  state={ cartItems:[] }
  componentDidMount(){
    let data= JSON.parse(localStorage.getItem('data'))
    if(data!=null){
      this.setState({cartItems: data})

    }
  }
  // =====================
addToLocalStorage=(cart)=>{
  localStorage.setItem("data",JSON.stringify(cart))
}
  // =======================
addItem = (item) =>{
let exist=this.state.cartItems.find((elem)=> elem.id === item.id)
if (exist) {

let cart = this.state.cartItems.map((elem)=>elem.id===item.id?{...exist,qty:exist.qty+1}:elem)
this.setState({ cartItems: cart })
this.addToLocalStorage(cart)

}else{
  let cart=[...this.state.cartItems,{ ...item, qty:1 }]
  this.setState({ cartItems: cart })
  this.addToLocalStorage(cart)
}
 
}
// =======================================================
removeItem = (item) =>{
  let exist=this.state.cartItems.find((elem)=> elem.id === item.id)
  if (exist.qty > 1) {
    let cart = this.state.cartItems.map((elem)=>elem.id===item.id?{...exist,qty:exist.qty-1}:elem)
    this.setState({ cartItems: cart })
    this.addToLocalStorage(cart)

  }

}
// ========================================================
removeProduct =(item)=>{
let cart = this.state.cartItems.filter((elem) => elem.id !== item.id)
this.setState({ cartItems: cart })
this.addToLocalStorage(cart)
}

  render() {
    let totalQty = this.state.cartItems.reduce((x,y)=>x + y.qty,0)
    let totalPrice = this.state.cartItems.reduce((x,y)=>x + y.qty *y.price,0)
    return (
      <>
        
        <Navbar totalQty={totalQty} totalPrice={totalPrice}/>
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-9">
          <Products addItem={this.addItem} />
          </div>
          <div className="col-md-3">
          <Cart removeProduct={this.removeProduct}  removeItem={this.removeItem}  addItem={this.addItem} cartItems={this.state.cartItems}/>
            </div>
          </div>
        </div>

       
     
     
      </>
    )
  }
}
