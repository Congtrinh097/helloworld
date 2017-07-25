import * as React from "react";
import {FilterableProductTable} from "../components/FilterableTable";
import {ProductModel} from "../model/product-model";


export interface SearchPageState{
  data: ProductModel[];
}

export class SearchPage extends React.Component<any,SearchPageState>{

  componentWillMount()
    {
      this.setState({
      });

debugger;
  }


  async getData(): Promise<any> {

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
    this.getData();

  }

  render() {

      return(
          <FilterableProductTable products={this.state.data}/>
      )
  }
}

export default SearchPage;