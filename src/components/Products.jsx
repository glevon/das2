import React, { Component } from 'react'

class Products extends Component {
    render() {
        return (
            <div>
                <h1>Products</h1>
                {
                    this.props.state.products.map((item, index)=>(
                    <div key={index} className="card" style={{ height:"285px", width:"200px", float :"left"}}>
                        <img className="card-img-top" src={item.image} alt={item.name} style={{ height:"150px"}} ></img>
                        <div>
                        <h4 className="card-name">{item.name}</h4>
                        <h5 className="card-name">{item.price}</h5>
                        <h6 className="card-name" style={{color:item.count===0?"red":""}} >{item.count}</h6>
                        </div>
                        <button onClick={this.props.addCart.bind(this,item,index)} className = "btn btn-outline-warning">Add to cart</button>
                    </div>
                    ))
                }
            </div>
        )
    }
}

export default Products
