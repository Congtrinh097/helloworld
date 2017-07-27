import {ProductModel} from "../model/product-model";
import * as React from 'react';
import { BootstrapTable, TableHeaderColumn,SizePerPageDropDown } from 'react-bootstrap-table';
import {SweetAlertResultEnums, SweetAlerts, SweetAlertTypeEnums} from "../commons/sweet-alert";
import {ProductEdit} from "./ProductEdit";
import {ProductDetails} from "./ProductDetailsModal";

// var productItems:ProductModel[] = [
//   { Id: 1, name:'Test', price: 120 , category: 'Category1', stocked: 1},
//   { Id: 2, name:'Test', price: 120 , category: 'Category1', stocked: 1},
//   { Id: 3, name:'Test', price: 120 , category: 'Category1', stocked: 1},
//   { Id: 4, name:'Test', price: 120 , category: 'Category1', stocked: 0},
//   { Id: 5, name:'Test', price: 120 , category: 'Category1', stocked: 1},
// ]

interface thisState {
  isShow?: boolean,
  data?: any
  dataModelEdit?:ProductModel
}

interface thisProps {
  isShow?: boolean,

}

  export class TableDataBootStrap extends React.Component<thisProps,thisState>
  {
    private productEdit: ProductEdit
    private productDetail: ProductDetails

    componentWillMount(){
      this.setState({
        dataModelEdit: { name:"",
          price: 0,
          category:"",
          stocked:1
        }
      });
      this.getData();
    }

    async getData(){

      let result = await fetch('/api/product/get_all',
        {
          headers: {
            'auth': localStorage.getItem("user_token") + ""
          },
          method: 'GET',
          /**
           * make a fetch request with credentials such as cookies
           */
          credentials: 'include'
        });

      if(result.ok)
      {
        this.setState({ data: await result.json() });

      }

      return null;
    }

    componentDidMount(){


    }

    show() {
      this.setState({isShow: true});
    }

    hide() {
      this.setState({isShow: false});
    }

    async postDelete(url:string, data:number)
    {
      debugger;
      let result = await fetch(url,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth': localStorage.getItem("user_token") + ""
          },
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(data)
        });

      if (result.ok){

        return true;

      }else{
        return false;
      }
    }

    async ClickDelete(id:number){
      debugger;
      let result = await SweetAlerts.show({
        title: 'Confirmation',
        text: 'Are you sure?',
        type: SweetAlertTypeEnums.Warning,
        showCancelButton: true,
        confirmButtonText: 'Delete',
      });

      if (result == SweetAlertResultEnums.Confirm) {

        debugger;
        let resultDelete  = await this.postDelete("/api/product/remove",id);
        debugger;
        if (resultDelete) {
          SweetAlerts.show({
            title: "Success",
            text: 'Deleted Successfully'
          });
          this.getData();
        }else {
          SweetAlerts.show({
            title: "Error",
            text: 'Cannot delete this item, please try again!'
          });

        }
      }

    }

    ClickEdit(data:ProductModel){
      this.setState({
        dataModelEdit: data
      });
      debugger;
      this.productEdit.show();

    }

    ClickDetails(data:ProductModel){
      this.setState({
        dataModelEdit: data
      });
      debugger;
      this.productDetail.show();

    }

    bindActionData(data: ProductModel) {
      return (<div>
        <a className="btn-danger btn" onClick={() => {
            this.ClickDelete(data.Id)
        }}>Delete</a>
        <a className="btn-warning btn" onClick={() => {
          this.ClickEdit(data)
        }}>Edit</a>
        <a className="btn-info btn" onClick={() => {
          this.ClickDetails(data)
        }}>Details</a>
      </div>)
    }

    render(){
      debugger;
      return ( this.state.isShow ?
        <div>
          <ProductEdit onUpdateCompleted={()=>{this.getData()}} data={this.state.dataModelEdit} ref={(e)=>{this.productEdit = e}}/>
          <ProductDetails data={this.state.dataModelEdit} ref={(e)=>{this.productDetail = e}}/>

          <BootstrapTable data={this.state.data}
                          keyField="Id"
                          fetchInfo={{dataTotalSize:10}}
                          search={true}
                          pagination={true}
                          options={{
                            noDataText: "Khong co du lieu",
                            sizePerPage: 8,
                            sizePerPageList: [5, 10, 20, 30],
                            page: 1
                          }}
          >
            <TableHeaderColumn width="50" dataField="Id"
                               dataFormat={(r, data: ProductModel) => {
                                 return data.Id;
                               }}
                               dataSort={ true }
                               filter={{ type: 'TextFilter', delay: 200 }}>
              Id</TableHeaderColumn>

            <TableHeaderColumn width="200" dataField="name"
                               dataFormat={(r, data: ProductModel) => {
                                 return data.name;
                               }}
                               dataSort={ true }
                               filter={{ type: 'TextFilter', delay: 1000 }}
            >
              Name</TableHeaderColumn>
            <TableHeaderColumn width="150" dataField="price"
                               dataFormat={(r, data: ProductModel) => {
                                 return data.price;
                               }} dataSort={ true }
                               filter={ {
                                 type: 'NumberFilter',
                                 delay: 500,
                                 numberComparators: [ '=', '>', '<' ]
                               } }>
              Price</TableHeaderColumn>

            <TableHeaderColumn width="70" dataField="stocked"
                               dataFormat={(r, data: ProductModel) => {
                                 return  data.stocked;
                               }}
                               filter={ { type: 'SelectFilter', options: {'true':true, 'false':false} , selectText: 'Choose '} }>
              Stocked</TableHeaderColumn>

            <TableHeaderColumn width="100" dataField="category"
                               dataFormat={(r, data: ProductModel) => {
                                 return data.category;
                               }} dataSort={ true }
                               filter={{ type: 'TextFilter', delay: 1000 }}>
              Category</TableHeaderColumn>

            <TableHeaderColumn width="100" dataField="action"
                               dataFormat={(r, data: ProductModel) => {
                                 return this.bindActionData(data)
                               }} dataSort={ false }>
              Action</TableHeaderColumn>

          </BootstrapTable>
        </div> : null
      )
    }
  }

  export default TableDataBootStrap;