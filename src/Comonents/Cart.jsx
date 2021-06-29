import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        console.log(this.props.cartItems)
        return (
            <>
                <div>
                    <h3 className="cartItems my-5">Cart Items</h3>
                    {this.props.cartItems.length===0 ? <h5>cart is empty</h5> :''}
             {this.props.cartItems.map((value,index)=>{
                 return(
                     <div key={value.id}> 
                  <div className="cartItem overflow-hidden">
                        <div className="cartImage float-left px-3">
                             <img className="w-100 " src={value.image} /> 
                        </div>
                        <div className="cartAction float-left text-center">
                            <h6>{value.title}</h6>
                            <p className="price">{value.price}$</p>
                            <button onClick={()=>{this.props.addItem(value)}}  className="btn btn-info"> + </button>
                            <span className="px-3">{value.qty}</span>
                            <button  onClick={()=>{this.props.removeItem(value)}} className="btn btn-danger"> - </button>
                            <button  onClick={()=>{this.props.removeProduct(value)}} className="btn btn-danger ml-3"> <i className="fas fa-trash"></i> </button>
                        </div>
                       
                    </div>
                    <hr/>
                     </div>
                      
                 )
             })}
                </div>
            </>
        )
    }
}
