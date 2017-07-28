import * as React from  'react'
import {HeaderMenu} from "./admin/HeaderMenu";
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import {ProductManager} from "./ProductManager";
import {CategoryManager} from "./CategoryManager";
import {UserManager} from "./UserManager";




export  class MasterAdmin extends React.Component<any , any>{

  render(){
    return(

     <div>
        <HeaderMenu/>
        {/*<SidebarMenu/>*/}
        <section>
          <div className="container">
            <div className="row">
              <Router >
                <div>

                  {/*</ul>*/}
                  <Route exact path="/" component={ProductManager}/>
                  <Route path="/product-management" component={ProductManager}/>
                  <Route path="/category-management" component={CategoryManager}/>
                  <Route path="/user-management" component={UserManager}/>


                </div>
              </Router>

              {/*contenT*/}
            </div>
          </div>
        </section>

        {/*<LayoutFooter/>*/}
      </div>

    )
  }
}