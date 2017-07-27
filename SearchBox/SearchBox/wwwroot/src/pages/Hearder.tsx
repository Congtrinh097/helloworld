import * as React from 'react';

import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

import {SearchPage} from "./searchpage";
import {DeleteProductById} from "../components/DeleteProductById";
import {AddProduct} from "./AddProduct";
import {Master} from "./Master";




export class Header extends React.Component<any,any> {
  render(){

    return(
      <Router >
        <div>
          {/*<ul>*/}
              {/*<button className="btn btn-default"><Link to="/">Product List</Link></button>*/}
              {/*<button className="btn btn-default"><Link to="/AddProduct">Add Product</Link></button>*/}
              {/*<button className="btn btn-default"><Link to="/Delete">Delete Product</Link></button>*/}
              {/*<button className="btn btn-default"><Link to="/TableData">Table Product</Link></button>*/}

          {/*</ul>*/}
          <Route path="/Product" component={SearchPage}/>
          <Route path="/AddProduct" component={AddProduct}/>
          <Route path="/Delete" component={DeleteProductById}/>
          <Route exact path="/" component={Master}/>

        </div>
      </Router>
    )
  }
}



export default Header;