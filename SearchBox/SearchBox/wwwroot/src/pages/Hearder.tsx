import * as React from 'react';

import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

import {SearchPage} from "./searchpage";
import {DeleteProductById} from "../components/DeleteProductById";
import {AddProduct} from "./AddProduct";
import {Master} from "./Master";
import {MasterAdmin} from "./MasterAdmin";




export class Header extends React.Component<any,any> {
  render(){

    return(
      <Router >
        <div>
          <Route exact path="/" component={MasterAdmin}/>
          <Route path="/user" component={Master}/>

        </div>
      </Router>
    )
  }
}



export default Header;