import * as React from "react";
import {FilterableProductTable} from "../components/FilterableTable";
import {ProductModel} from "../model/product-model";
import {TableDataBootStrap} from "../components/TableData";
import {ProductDetailsModal} from "../components/ProductDetailsModal";


export class SearchPage extends React.Component<any,any>{
  table: TableDataBootStrap;
  modal: ProductDetailsModal;

  componentDidMount() {
    this.table.show();
  }

  render() {

      return(
        <div>
          <div className="row">
            <h2 className="col-md-12 headerPage"> List of Product</h2>
          </div>

          {/*<button onClick={() => {*/}
            {/*this.table.show();*/}
          {/*}}>Show Table</button>*/}

          {/*<button onClick={() => {*/}
            {/*this.table.hide();*/}
          {/*}}>Hide Table</button>*/}

          <button className="btn btn-primary" onClick={() => {
            this.modal.show();
          }}>Add Product</button>


          <ProductDetailsModal onAddCompleted = {()=>{this.table.getData()}} ref={(e)=>this.modal = e}/>
          <TableDataBootStrap  ref={(e)=>this.table = e}/>

        </div>
      )
  }
}

export default SearchPage;