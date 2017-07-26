import * as React from "react";
import {FilterableProductTable} from "../components/FilterableTable";
import {ProductModel} from "../model/product-model";
import {TableDataBootStrap} from "../components/TableData";


export class SearchPage extends React.Component<any,any>{

  render() {

      return(
        <div>
          <div className="row">
            <h2 className="col-md-12 headerPage"> List of Product</h2>
          </div>

          <TableDataBootStrap />
        </div>
      )
  }
}

export default SearchPage;