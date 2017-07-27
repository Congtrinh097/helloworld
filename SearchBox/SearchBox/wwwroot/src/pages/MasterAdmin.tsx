import * as React from  'react'
import {HeaderMenu} from "./admin/HeaderMenu";

import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import {SearchPage} from "./searchpage";
import {AddProduct} from "./AddProduct";
import {DeleteProductById} from "../components/DeleteProductById";


export  class MasterAdmin extends React.Component<any , any>{

  render(){
    return(

      <body>

        <HeaderMenu/>
        <section>
          <div className="container">
            <div className="row">
              <Router >
                <div>

                  {/*</ul>*/}
                  <Route exact path="/" component={SearchPage}/>
                  <Route exact path="/product" component={SearchPage}/>
                  <Route path="/AddProduct" component={AddProduct}/>
                  <Route path="/Delete" component={DeleteProductById}/>


                </div>
              </Router>

              {/*contenT*/}
            </div>
          </div>
        </section>

        {/*<LayoutFooter/>*/}
      </body>

    )
  }
}