import * as React from 'react';
import {ProductModel} from "../model/product-model";

export enum BoolEnum
{
  TRUE = 1,
  FALSE = 0
}

interface thisState {
  IsLoginResult: boolean,
  isShow: boolean,
  model: ProductModel,
  isAddSuccess: boolean,
  response_InvalidMessage: string,
}

export class AddProduct extends React.Component<any, thisState> {
  componentWillMount() {
    this.setState({
      model:{
        name:'',
        price: 0,
        category: '',
        stocked: 1
      }
    });
  }
  async postRequest(url:string, data:ProductModel)
  {
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
      this.setState({isAddSuccess:true,
        model:{
          name:'',
          price: 0,
          category: '',
          stocked: 1
      }

      });
      return "OK";
    }
    else {
      this.setState({isAddSuccess:false});
      return "FAIL";
    }
  }

  ClickLogin() {

   this.postRequest("/api/product/add", this.state.model);
   this.props.onSubmit();

  }

  close() {
    this.setState({isShow: false});
  }

  show() {
    this.setState({isShow: true});
  }

  render() {
    return (
        <div>
          <div className="row">
            <h2 className="col-md-12 headerPage"> Add a Product</h2>
          </div>
          <div className="row">
          <div className=" panel panel-default plain">
            <div className="panel-body">
              <form className="form-horizontal">
                <div className="form-group">
                  <label className="col-sm-4 col-md-3 col-lg-4 control-label">Name</label>
                  <div className="col-sm-6 col-md-6 col-lg-8">
                    <input type="text" className="form-control"
                           value={this.state.model.name}
                           onChange={
                             (e) => {
                               this.state.model.name = e.target.value;
                               this.forceUpdate();
                             }
                           }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-6 col-md-3 col-lg-4 control-label">Price</label>
                  <div className="col-sm-6 col-md-6 col-lg-8">
                    <input type="number" className="form-control"
                           value={this.state.model.price}
                           onChange={
                             (e) => {
                               this.state.model.price = parseInt(e.target.value);
                               this.forceUpdate();
                             }
                           }
                    />
                  </div>
                </div>

                  <div className="form-group">
                    <label className="col-sm-6 col-md-4 col-lg-4 control-label">Stocked</label>
                    <div className="col-sm-6 col-md-8 col-lg-8">
                      <select  value={this.state.model.stocked}
                               onChange={
                                 (e) => {
                                   this.state.model.stocked = parseInt(e.target.value);
                                   this.forceUpdate();
                                 }
                               }
                      >
                        <option value={BoolEnum.TRUE}>True</option>
                        <option value={BoolEnum.FALSE}>False</option>
                      </select>

                    </div>
                </div>



                <div className="form-group">
                  <label className="col-sm-6 col-md-4 col-lg-4 control-label">Category</label>
                  <div className="col-sm-6 col-md-8 col-lg-8">
                    <input type="text" className="form-control"
                           value={this.state.model.category}
                           onChange={
                             (e) => {
                               this.state.model.category = e.target.value;
                               this.forceUpdate();
                             }
                           }
                    />
                  </div>
                </div>

                {
                  this.state.isAddSuccess ?
                    <div className={`form-group has-error`}>
                      <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                      <span className="help-block col-sm-6 col-md-8 col-lg-8 m110" style={{paddingLeft:15, color:'blue'}}>
                        Successfull Added data</span>
                    </div> : null
                }

                <div className="form-group">
                  <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                  <div className="col-sm-6 col-md-8 col-lg-8">
                    <a className="btn btn-primary" onClick={() => this.ClickLogin()}>Add</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    )

  }
}

export default AddProduct;