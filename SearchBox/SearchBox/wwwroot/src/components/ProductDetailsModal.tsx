import * as React from 'react';
import {Modal, Button, Form, FormGroup, Col} from 'react-bootstrap';
import {ProductModel} from "../model/product-model";
import { SweetAlerts} from "../commons/sweet-alert";

export enum BoolEnum
{
  TRUE = 1,
  FALSE = 0
}


interface thisState {
  isShow: boolean,
  model: ProductModel
}

export class ProductDetails extends React.Component<any, thisState> {
  componentWillMount() {
    this.setState({
        isShow: false,
        model: this.props.data,
    });
  }

  componentWillReceiveProps(props){
    this.setState({
      model: props.data
    });

  }

  close() {
    this.setState({isShow: false});
  }

  show() {
    this.setState({isShow: true});
  }

  render() {
    debugger;
    return <Modal show={this.state.isShow} onHide={() => this.close()}
                  aria-labelledby="contained-modal-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">Details of Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="panel panel-default plain">
          <div className="panel-body">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Name</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <input type="text" className="form-control" readOnly={true}
                           value={this.state.model.name}

                />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Category</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <input type="text" className="form-control"
                         value={this.state.model.category}

                         readOnly={true}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Price</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <input type="number" className="form-control"
                         value={this.state.model.price}

                         readOnly={true}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Stocked</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <input type="text" className="form-control"
                         value={this.state.model.stocked}

                         readOnly={true}
                  />

                </div>
              </div>


              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <a className="btn btn-primary" onClick={() => this.close()}>Close</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  }
}