import * as React from 'react';

import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

import {SearchPage} from "./searchpage";
import {DeleteProductById} from "../components/DeleteProductById";
import {AddProduct} from "./AddProduct";
import {TableDataBootStrap} from "../components/TableData";




export class Header extends React.Component<any,any> {
  render(){

    return(
      <Router >
        <div>
          <ul>
              <button><Link to="/">Product List</Link></button>
              <button><Link to="/AddProduct">Add Product</Link></button>
              <button><Link to="/Delete">Delete Product</Link></button>
              <button><Link to="/TableData">Table Product</Link></button>

          </ul>

          <hr/>

          <Route exact path="/" component={SearchPage}/>
          <Route path="/AddProduct" component={AddProduct}/>
          <Route path="/Delete" component={DeleteProductById}/>
          <Route path="/TableData" component={TableDataBootStrap}/>

        </div>
      </Router>
    )
  }
}



export default Header;