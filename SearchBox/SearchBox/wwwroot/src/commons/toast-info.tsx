import { toast } from 'react-toastify';
import * as React from 'react';



const options = {
  // onOpen: props => console.log(props.foo),
  // onClose: props => console.log(props.foo),
  autoClose: 6000,
  type: toast.TYPE.INFO,
  hideProgressBar: true,
  position: toast.POSITION.TOP_RIGHT
};


export class ToastManager {

  static ShowToastInfo(title:string, body:string)
  {
      return(
        toast.info(
          <span>
              <h4>{title}</h4>
              <p>{body}</p>
          </span>
        )
      )
  }

  static ShowToastWarning(title:string, body:string)
  {
    return(

        toast.warning(<div>

          <span><img src="wwwroot/asset/images/success-icon-2.png" width={"32px"} height={"32px"}/>
          </span>
          <span>
              <h4>{title}</h4>
              <p>{body}</p>
          </span>

        </div>, options)

    )
  }

  static ShowToastSuccess(title:string, body:string){
    toast.success(  <span>
                      <h4>{title}</h4>
                      <p>{body}</p>
                    </span>, options)
  }
}