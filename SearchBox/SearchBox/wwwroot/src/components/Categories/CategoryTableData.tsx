import * as React from 'react'

import {CategoryModel} from "../../model/category_model";
import { BootstrapTable, TableHeaderColumn,SizePerPageDropDown } from 'react-bootstrap-table';
import {SweetAlertResultEnums, SweetAlerts, SweetAlertTypeEnums} from "../../commons/sweet-alert";


export interface CategoryTableDataProps {

}

export interface CategoryTableDataState {
  data?: CategoryModel[],
}

export  class CategoryTableData extends React.Component<CategoryTableDataProps,CategoryTableDataState> {
  componentWillMount(){
    this.setState({});
    this.getData();
  }

  async getData(){

    let result = await fetch('/api/cate/get_all',
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

  ClickDelete(id:number){

  }

  ClickEdit(data:CategoryModel){

  }
  ClickDetails(data:CategoryModel){

  }

  bindActionData(data: CategoryModel) {
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
    return(
      <div>
        <BootstrapTable data={this.state.data}
                        keyField="Id"
                        fetchInfo={{dataTotalSize:10}}
                        search={true}
                        pagination={true}
                        options={{
                          noDataText: "No data to show",
                          sizePerPage: 8,
                          sizePerPageList: [5, 10, 20, 30],
                          page: 1
                        }}
        >
          <TableHeaderColumn width="50" dataField="Id"
                             dataFormat={(r, data: CategoryModel) => {
                               return data.Id;
                             }}
                             dataSort={ true }
                             filter={{ type: 'TextFilter', delay: 200 }}>
            Id</TableHeaderColumn>

          <TableHeaderColumn width="100" dataField="name"
                             dataFormat={(r, data: CategoryModel) => {
                               return data.name;
                             }}
                             dataSort={ true }
                             filter={{ type: 'TextFilter', delay: 1000 }}
          >Name</TableHeaderColumn>

          <TableHeaderColumn width="200" dataField="description"
                             dataFormat={(r, data: CategoryModel) => {
                               return data.description;
                             }}
                             dataSort={ true }
                             filter={{ type: 'TextFilter', delay: 1000 }}
          >Description</TableHeaderColumn>

          <TableHeaderColumn width="100" dataField="parent_id"
                             dataFormat={(r, data: CategoryModel) => {
                               return data.parent_id;
                             }} dataSort={ true }
                             filter={ {
                               type: 'TextFilter',
                               delay: 500
                             } }>
            Parent Cate</TableHeaderColumn>



          <TableHeaderColumn  width="120" dataField="action"
                              dataFormat={(r, data: CategoryModel) => {
                                return this.bindActionData(data)
                              }} dataSort={ false }>
            Action</TableHeaderColumn>

        </BootstrapTable>
      </div>
    );
  }
}


