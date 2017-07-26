import * as React from "react";
import {ProductModel} from "../model/product-model";
import {TableDataBootStrap} from "../components/TableData";

interface thisProps{
  product: ProductModel
}

interface  searchBoxProps{
  changeSearch: (a: string)=> void,
  filterText: string
}

interface  FilterableTableProps {
  products: ProductModel[]
}

interface  FilterableTableState {
  products: ProductModel[],
  filterText: string
}


//Component for search box
class  SearchBox extends React.Component<searchBoxProps,any> {

  render(){
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-4 col-md-offset-3">
            <form action="" className="search-form">
              <div className="form-group has-feedback">
                <label htmlFor="search" className="sr-only">Search</label>
                <input type="text" className="form-control" name="search" id="search" placeholder="search"
                       onChange={
                         (e) => {

                           this.props.changeSearch(e.target.value);
                         }
                       }
                ></input>
                <span className="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


// Component for row in table product
class ProductRow extends React.Component<thisProps,any> {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td  className="tableData">{this.props.product.Id}</td>
        <td  className="tableData">{name}</td>
        <td  className="tableData" >{this.props.product.price}</td>
        <td  className="tableData" >{this.props.product.stocked.toString()}</td>
      </tr>
    );
  }

}

interface  TableDataProps{
  products: ProductModel[],

}
//Component for Table displays data below search
class  TableData extends React.Component<TableDataProps,any> {


  render() {
    var rows:any = [];
    if (this.props.products && this.props.products.length <=0 )
    {
      return (
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h3>No data match your search please try another key word</h3>
          </div>
        </div>
      )
    }else{
      // show on product from props passed into
      rows = this.props.products && this.props.products.map((product)=>
         <ProductRow product={product} key={product.Id} />
      )

      // && this.props.products.forEach(function(product) {
      //   rows.push(<ProductRow product={product} key={product.id} />);
      // });

      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <table>
                <thead>
                <tr>
                  <th className="tableHearder">ID</th>
                  <th className="tableHearder" >Name</th>
                  <th className="tableHearder">Price</th>
                  <th className="tableHearder">Stocked</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

  }
}


// Filterable Product
export class FilterableProductTable extends React.Component<FilterableTableProps,FilterableTableState> {

 componentWillMount() {
   this.setState({
     filterText: '',
   });
  }
  componentDidMount(){
   debugger;
    this.setState({
      products: this.props.products
    });
  }

  componentWillReceiveProps(props) {
    debugger;
    this.setState({
      products: props.products
    });
  }

  filterProduct(text:string): ProductModel[] {

    let productFilter: ProductModel[] = this.props.products && this.props.products.filter(x=>{
      if(x.name.indexOf(text) >= 0) {
        return true;
      }
      return false;
    });

    // let abc = this.state.products.map(x=>{
    //   return x.name;
    // });
    //
    // let sort = this.state.products.sort((a,b)=>{
    //   return a.priority-b.priority;
    // });
    //
    // let cc = this.state.products.some(x=>{
    //   if(x.name == 'kkkk') return true;
    //   return false;
    // });
    return productFilter;
  }

  render() {
    return (
      <div>
        <SearchBox
          filterText={this.state.filterText}
          changeSearch={(e) => {
            var filteredProducts:ProductModel[] = this.filterProduct(e);
            this.setState({products: filteredProducts});
          }}
        />
        <TableDataBootStrap />
        {/*<TableData*/}
        {/*products={this.state.products}*/}
      {/*/>*/}
      </div>
    );
  }
}

export default FilterableProductTable;