import * as React from "react";

import {ProductTableData} from "../components/Products/ProductTableData";
import {CategoryTableData} from "../components/Categories/CategoryTableData";
import {CategoryAdd} from "../components/Categories/CategoryAdd";



export class CategoryManager extends React.Component<any,any>{

  modal: CategoryAdd;

  render() {

    return(
      <div>

        <div className="row">
          <h2 className="col-md-12 headerPage"> Management Category</h2>
        </div>

        <button className="btn btn-primary" onClick={() => {
          this.modal.show();
        }}>Add New</button>


        <CategoryAdd ref={(e)=>{this.modal = e}}/>
        <CategoryTableData/>

      </div>
    )
  }
}
