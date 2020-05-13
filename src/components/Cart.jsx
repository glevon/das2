import React, { Component } from 'react'

class Cart extends Component {
    render() {
        return (
            <div>
                <h1>Cart</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody> 
              {
                this.props.state.cart.map((a, i)=>(
                  <tr key ={a.id}>
                  <td>
                  <img alt={a.name} src={a.image} style={{height:"60px",width:"60px"}}></img>
                  </td>
                  <td>
                    {a.name}
                  </td>
                  <td>
                    {a.price}
                  </td>
                  <td>
                    {a.quantity}
                  </td>
                    <button className="btn btn-primary" onClick= {this.props.minus.bind(this,a)}>-</button>
                    <button className="btn btn-success" onClick= {this.props.plus.bind(this,a)}>+</button>
                    <button className="btn btn-danger" onClick= {this.props.delete.bind(this,a)} >Delete</button>
                  </tr>
                ))
              }
            
            </tbody>

          </table>
          
            </div>
        )
    }
}

export default Cart
