import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Products from './components/Products';
import Cart from './components/Cart';
import Totalsum from './components/Totalsum';


class App extends React.Component {
  constructor(){
    super()
    this.state={
      products:[
        {
          id:101,
          name:"prod1",
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
  addCart=(item,i)=>{
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
  sum=()=>{
    let s=0
    this.state.cart.forEach(item=>{
      s+=item.quantity*item.price
    })
    this.state.sum=s
    this.setState({})
    }
  minus=(q)=>{
    if (q.quantity>1){
      q.quantity--
    }
    else{
      this.state.cart.splice(this.state.cart.indexOf(q),1)
    }
    this.state.products.find(o => o.id === q.id).count++
    this.sum()
    this.setState({})
  }
  plus=(q)=>{
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
  delete=(q)=>{
    this.state.products.find(o => o.id === q.id).count+=q.quantity
    this.state.cart.splice(this.state.cart.indexOf(q),1)
    this.sum()
    this.setState({})
  }

  render(){
    return ( 
      <Router>
        <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/shop">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Totalsum state={this.state} sum={this.sum}/>
          </li>
        </ul>
        </nav>
          <Route path="/shop" exact render={(props)=>(<Products state={this.state} sum={this.sum} addCart={this.addCart} />)} />
          <Route path="/cart" render={(props)=>(<Cart  state={this.state} sum={this.sum} minus={this.minus} plus={this.plus} delete={this.delete} />)} />
    </Router>
    )
  }

}

export default App;
