import React, { Component } from 'react'
import data from "../store.js"
export default class Products extends Component {
    render() {
        return (
            <>
               <div className="row text-center ">
                 {data.map((value,index) => {
                     return (
                        <div key={value.id} className="col-md-4 mt-4">
                        <div className="item "> 
                        <img height="300px" className="w-100" src={value.image} />
                       <div className="cartTitle">
                       <h6 className="my-3">{value.title}</h6>
                        <span>{value.price}$</span>
                       </div>
                        <button onClick={()=>{this.props.addItem(value)}} className="btn mainColor mt-3 text-white py-3 px-5 w-100">add to cart</button>
                        </div>
                    </div>
                     )
                 })}
                   </div> 
            </>
        )
    }
}
