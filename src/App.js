import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      products:[
        {
          id:101,
          name:"prd1",
          image:"./images/1.png", 
          price:450,
          count:12,
        },
        {
          id:102,
          name:"prod2",
          image:"./images/2.png", 
          price:700,
          count:8,
        },
        {
          id:103,
          name:"prod3",
          image:"./images/3.png", 
          price:1400,
          count:20,
        },
        {
          id:104,
          name:"prod4",
          image:"./images/4.png", 
          price:500,
          count:16,
        },
        {
          id:105,
          name:"prod5",
          image:"./images/5.png", 
          price:700,
          count:6,
        },
      ],
    cart:[],
    sum:0,
    }
  }
  addCart(item,i){
    if(this.state.products[i].count>0){
        let prod =Object.assign({quantity:1},this.state.products[i])
      let k = this.state.cart.find(x=>{
        return x.id === this.state.products[i].id
      })
      if(k){
        k.quantity++
      }
      else{
        this.state.cart.push(prod)
      }
      this.state.products[i].count--
      this.setState({})
    }
    else{
      alert("STOP...")
    }
    this.sum()
  }
  sum(){
    let s=0
    this.state.cart.forEach(item=>{
      s+=item.quantity*item.price
    })
    this.state.sum=s
    this.setState({})
  //   this.setState({
  //     sum:s
  //   })
    }
  minus(q){
    if (q.quantity>1){
      q.quantity--
    }
    else{
      this.state.cart.splice(this.state.cart.indexOf(q),1)
      // this.state.cart.splice(q,1)
    }
    this.state.products.find(o => o.id === q.id).count++
    this.sum()
    this.setState({})
  }
  plus(q){
    if (this.state.products.find(o => o.id === q.id).count>0){
      q.quantity++
      this.state.products.find(o => o.id === q.id).count--
    }
    else{
      alert("STOP...")
    }
    this.sum()
    this.setState({})
  }
  delete(q){
    console.log(q)
    this.state.products.find(o => o.id === q.id).count+=q.quantity
    this.state.cart.splice(this.state.cart.indexOf(q),1)
    // this.state.cart.splice(q,1)
    this.sum()
    this.setState({})
  }

  render(){
    return (
      <div className="row">
        <div className="col-8">
          <h1>Products</h1>
          {
            this.state.products.map((item, index)=>(
              <div key={index} className="card" style={{ height:"285px", width:"200px", float :"left"}}>
                <img className="card-img-top" src={item.image} alt={item.name} style={{ height:"150px"}} ></img>
                <div>
                  <h4 className="card-name">{item.name}</h4>
                  <h5 className="card-name">{item.price}</h5>
                  <h6 className="card-name" style={{color:item.count==0?"red":""}} >{item.count}</h6>
                </div>
                <button onClick={this.addCart.bind(this,item,index)} className = "btn btn-outline-warning">Add to cart</button>
              </div>
            ))
          }
        </div>
        <div className="col-3">
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
                this.state.cart.map((a, i)=>(
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
                  <button className="btn btn-primary" onClick= {this.minus.bind(this,a)}>-</button>
                  <button className="btn btn-success" onClick= {this.plus.bind(this,a)}>+</button>
                  <button className="btn btn-danger" onClick= {this.delete.bind(this,a)} >Delete</button>
                  </tr>
                ))
              }
            
            </tbody>

          </table>
          <h3><i>Total sum:{this.state.sum}</i></h3>
        </div>

      </div>
    )
  }

}

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       name:""

//     }
//   }
//   change(e){
//     this.state.name =e.target.value
//     this.setState({})

//   }
//   barev(){
//     console.log(`barev ${this.state.name}`)
//   }
//   render(){
//     return(
//       <div>
//         <input type="text" value={this.state.name} onChange ={this.change.bind(this)}></input>
//         <button onClick ={this.barev.bind(this)}>ok</button>
//       </div>
//     )
//   }
// }
export default App;
