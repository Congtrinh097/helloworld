import * as React from  'react'
import {LayoutHeader} from "./user_interface/LayoutHeader";
import {LeftSideMenu} from "./user_interface/LeftSideMenu";
import {LayoutFooter} from "./user_interface/LayoutFooter";
import {SearchPage} from "./searchpage";

export  class Master extends React.Component<any , any>{

  render(){
    return(

      <body>
      <LayoutHeader/>

      <section>
        <div className="container">
          <div className="row">
            <LeftSideMenu/>

           {/*contenT*/}
          </div>
        </div>
      </section>

      <LayoutFooter/>


      </body>

    )
  }
}