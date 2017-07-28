import * as React from "react";
import * as ReactDOM from "react-dom";

import { ToastContainer } from 'react-toastify';

import {Header} from "./pages/Hearder";
import {MasterAdmin} from "./pages/MasterAdmin";



ReactDOM.render(
  <div>
    {/*<Header/>*/}
    <MasterAdmin/>
    <ToastContainer />
  </div>,
  document.getElementById("example")
);