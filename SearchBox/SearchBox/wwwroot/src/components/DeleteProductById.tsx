import * as React from 'react';


export class DeleteProductById extends React.Component<any,any> {
  componentWillMount(){
    this.setState({
      id: 0,
      isSuccess: false,
      MessageShow: "NONE"
    })
  }

  async postRequest(url:string, data:number)
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
        isSuccess: true,
        MessageShow:  await result.text()
      })

    }else{

      this.setState({
        isSuccess: true,
        MessageShow: "Request failed with unknow error"
      })

    }
  }

  ClickSubmit(){
    let id = this.state.id;
    this.postRequest("/api/product/remove",id);

  }

  render(){
    return(
      <div>
        <form>

        <div className="form-group">
          <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
          <div className="col-sm-6 col-md-8 col-lg-8">
            <h3>Delete item by Id</h3>
            <input type="number" className="form-control"
                   value={this.state.id}
                   onChange={
                     (e) => {
                       this.state.id = parseInt(e.target.value);
                       this.forceUpdate();
                     }
                   }
            />
          </div>
        </div>

          {
            this.state.isSuccess ?
              <div className={`form-group has-error`}>
                <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
                <span className="help-block col-sm-6 col-md-8 col-lg-8 m110" style={{paddingLeft:15, color:'blue'}}>
                  {this.state.MessageShow}</span>
              </div> : null
          }

        <div className="form-group">
          <label className="col-sm-6 col-md-4 col-lg-4 control-label"></label>
          <div className="col-sm-6 col-md-8 col-lg-8">
            <a className="btn btn-primary" onClick={() => this.ClickSubmit()}>Delete</a>
          </div>
        </div>
        </form>
      </div>
    );
  }

}

export  default DeleteProductById;