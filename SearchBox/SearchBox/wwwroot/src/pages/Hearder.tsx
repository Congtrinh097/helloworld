import * as React from 'react';

// import Router from 'react-router-dom/BrowserRouter';
// import Route from 'react-router-dom/Route';
//import Link from 'react-router-dom/Link';
//import {Link} from 'react-router';
import {SearchPage} from "./searchpage";
import {DeleteProductById} from "../components/DeleteProductById";
import {AddProduct} from "./AddProduct";

import { CSSTransitionGroup } from 'react-transition-group'



import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

export class Header extends React.Component<any,any> {
  render(){

    return(
      <Router >

        <div>
          <ul>
              <Link to="/">Search Product</Link>
              <Link to="/AddProduct">Add Product</Link>
              <Link to="/Delete">Delete Product</Link>

          </ul>



          <hr/>

          <Route exact path="/" component={SearchPage}/>
          <Route path="/AddProduct" component={AddProduct}/>
          <Route path="/Delete" component={DeleteProductById}/>

        </div>
      </Router>
    )
  }
}



export default Header;