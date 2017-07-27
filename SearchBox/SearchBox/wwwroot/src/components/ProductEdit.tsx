import * as React from 'react';
import {Modal, Button, Form, FormGroup, Col} from 'react-bootstrap';
import {ProductModel} from "../model/product-model";
import { SweetAlerts} from "../commons/sweet-alert";

export enum BoolEnum
{
  TRUE = 1,
  FALSE = 0
}

export enum ResultEnum
{
  OK = 1,
  FAIL = 0
}

interface thisState {
  isShow: boolean,
  model: ProductModel,
  isFirst: boolean,
  UnvalidData: boolean,
  response_InvalidMessage: string,
}

export class ProductEdit extends React.Component<any, thisState> {
  componentWillMount() {
    this.setState({
      isShow: false,
      model: this.props.data,
      isFirst: true,
      UnvalidData: false,
      response_InvalidMessage:"",
    });
  }

  componentWillReceiveProps(props){
    this.setState({
      model: props.data
    });

  }
  async postRequest(url:string, data:ProductModel):Promise<number>
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
      this.setState({
        model:{
          name:'',
          price: 0,
          category: '',
          stocked: 1
        }

      });
      return ResultEnum.OK;
    }
    else {

      return ResultEnum.FAIL;
    }
  }


  async clickUpdate() {
    let result = await this.postRequest("/api/product/add", this.state.model); //temporaty use add API
    if (result == ResultEnum.OK){
      this.close()
      SweetAlerts.show({
        title: "Success",
        text: 'Update Successfully'
      });

    }else {
      this.setState({
        UnvalidData:true,
        response_InvalidMessage: 'An error ocurred'
      })
    }
  }

  close() {
    this.setState({isShow: false});
  }

  show() {
    this.setState({isShow: true});
  }

  render() {
    return <Modal show={this.state.isShow} onHide={() => this.close()}
                  aria-labelledby="contained-modal-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="panel panel-default plain">
          <div className="panel-body">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Name</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
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
                this.state.UnvalidData ?
                  <div className={`form-group has-error`}>
                    <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                    <span className="help-block col-sm-6 col-md-8 col-lg-8 m110" style={{paddingLeft:15}}>
                      {this.state.response_InvalidMessage}</span>
                  </div> : null
              }

              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Price</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
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
                <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <a className="btn btn-primary" onClick={() => this.clickUpdate()}>Update Product</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  }
}