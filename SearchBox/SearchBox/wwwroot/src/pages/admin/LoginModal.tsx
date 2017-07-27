import * as React from 'react';
import {Modal, Button, Form, FormGroup, Col} from 'react-bootstrap';
import {SweetAlertResultEnums, SweetAlerts, SweetAlertTypeEnums} from "../../commons/sweet-alert";

export interface LoginRequestModel{
  Username:string,
  Password:string,
  IsRememberMe?:boolean
}


interface thisState {
  IsLoginResult: boolean,
  isShow: boolean,
  model: LoginRequestModel,
  isLoginFailed: boolean,
  response_InvalidMessage: string,
}

export class LoginModal extends React.Component<any, thisState> {
  componentWillMount() {
    this.setState({
      model: {
        IsRememberMe: false,
        Username: '',
        Password: '',
      }
    });
  }

  async ClickLogin() {
    SweetAlerts.show({
      title: "Success",
      text: 'Login Successfully'
    });
    this.close();
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
        <Modal.Title id="contained-modal-title-lg">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="panel panel-default plain">
          <div className="panel-body">
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Username</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <input type="text" className="form-control"
                         value={this.state.model.Username}
                         onChange={
                           (e) => {
                             this.state.model.Username = e.target.value;
                             this.forceUpdate();
                           }
                         }
                  />
                </div>
              </div>

              {
                this.state.isLoginFailed ?
                  <div className={`form-group has-error`}>
                    <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                    <span className="help-block col-sm-6 col-md-8 col-lg-8 m110" style={{paddingLeft:15}}>
                      {this.state.response_InvalidMessage}</span>
                  </div> : null
              }

              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label">Password</label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <input type="password" className="form-control"
                         value={this.state.model.Password}
                         onChange={
                           (e) => {
                             this.state.model.Password = e.target.value;
                             this.forceUpdate();
                           }
                         }
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <label> <input type="checkbox" checked={this.state.model.IsRememberMe}
                                 onChange={v => {
                                   this.state.model.IsRememberMe = v.target.checked;
                                   this.forceUpdate();
                                 }}
                  /> Remember?</label>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                <div className="col-sm-6 col-md-8 col-lg-8">
                  <a className="btn btn-primary" onClick={() => this.ClickLogin()}>Login</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  }
}