import * as React from 'react';

import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';


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