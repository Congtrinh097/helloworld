import * as React from "react";
import * as ReactDOM from "react-dom";


import {SearchPage} from "./pages/searchpage";
import {Header} from "./pages/Hearder";
import {ModalGallery} from "./pages/RouterExample"
import {TableDataBootStrap} from "./components/TableData"
import {MasterAdmin} from "./pages/MasterAdmin";


ReactDOM.render(
  <div>
    {/*<Header/>*/}
    <MasterAdmin/>
  </div>,
  document.getElementById("example")
);