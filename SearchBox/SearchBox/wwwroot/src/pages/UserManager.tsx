import * as React from "react";

import {ProductTableData} from "../components/Products/ProductTableData";
import {ProductAdd} from "../components/Products/ProductAdd";



export class UserManager extends React.Component<any,any>{

  table: ProductTableData;
  modal: ProductAdd;

  componentDidMount() {
    this.table.show();
  }

  render() {

    return(
      <div>

        <div className="row">
          <h2 className="col-md-12 headerPage"> Management Users</h2>
        </div>

        <button className="btn btn-primary" onClick={() => {
          this.modal.show();
        }}>Add New</button>


        <ProductAdd onAddCompleted = {()=>{this.table.getData()}} ref={(e)=>this.modal = e}/>
        {/*<ProductTableData  ref={(e)=>this.table = e}/>*/}

      </div>
    )
  }
}
