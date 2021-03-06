import * as React from 'react';
import {Modal, Button, Form, FormGroup, Col} from 'react-bootstrap';
import { SweetAlerts} from "../../commons/sweet-alert";
import {CategoryModel} from "../../model/category_model";

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
  model: CategoryModel,
  UnvalidData: boolean,
  response_InvalidMessage: string,
}

export class CategoryAdd extends React.Component<any, thisState> {
  componentWillMount() {
    this.setState({
      isShow: false,
      model:{
        name:"",
        parent_id: null,
        description: ''
      },
      UnvalidData: false,
      response_InvalidMessage:"",
    });
  }

  async postRequest(url:string, data:CategoryModel):Promise<number>
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
          name:"",
          parent_id: 0,
          description: ''
        }

      });
      return ResultEnum.OK;
    }
    else {

      return ResultEnum.FAIL;
    }
  }


  async ClickAdd() {
    let result = await this.postRequest("/api/cate/add", this.state.model);
    if (result == ResultEnum.OK){
      this.close()
      SweetAlerts.show({
        title: "Success",
        text: 'Add Successfully'
      });

      this.props.onAddCompleted();
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
        <Modal.Title id="contained-modal-title-lg">Add Category</Modal.Title>
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
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Parent Cate</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <input type="text" className="form-control"
                         value={this.state.model.parent_id}
                         onChange={
                           (e) => {
                             this.state.model.parent_id = parseInt(e.target.value);
                             this.forceUpdate();
                           }
                         }
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Description</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <input type="text" className="form-control"
                         value={this.state.model.description}
                         onChange={
                           (e) => {
                             this.state.model.description = e.target.value;
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
                <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <a className="btn btn-primary" onClick={() => this.ClickAdd()}>Add Product</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  }
}