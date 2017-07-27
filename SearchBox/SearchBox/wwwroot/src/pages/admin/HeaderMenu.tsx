import * as React from 'react'
import {LoginModal} from "./LoginModal";

export class HeaderMenu extends React.Component
{
  loginModal: LoginModal
  render(){
    return (
      <div>
      <LoginModal ref={(e)=>{this.loginModal = e}}/>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">PRODUCTS MANAGER</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/AddProduct">Add</a></li>
            <li><a href="/Delete">Delete</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#" ><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a  onClick={()=>{this.loginModal.show()}}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}