import  * as React from 'react';


export class LeftSideMenu extends React.Component<any,any>{

  render(){
    
    return (
      <div className="col-sm-3">
        <div className="left-sidebar">
          <h2>PHÂN LOẠI</h2>

          <div className="panel-group category-products" id="accordian">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordian" href="#{!!$menu->name!!}">
                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                    Menu
                  </a>
                </h4>
              </div>
              <div id="{!!$menu->name!!}" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul>

                    <li><a href="{{route('pages.shop',$menu2->id)}}"><span className="pull-right">(10)</span>Menu 2 </a></li>

                  </ul>
                </div>
              </div>
            </div>


          </div>


          <div className="brands_products">
            <h2>Thương hiệu</h2>
            <div className="brands-name">
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#"> Hải sản vinh hiền</a></li>
                <li><a href="#"> Hải sản vinh thanh</a></li>
                <li><a href="#"> Hải sản biển thuận an</a></li>
                <li><a href="#"> Hải sản cảng tư hiền</a></li>
                <li><a href="#"> Hải sản cảng chân mây</a></li>
                <li><a href="#"> Hải sản cảng tiên sa</a></li>
              </ul>
            </div>
          </div>

          <div className="price-range">
            <h2>Mức giá</h2>
            <div className="well text-center">
              <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="2000000" data-slider-step="5" data-slider-value="[50000,1000000]" id="sl2" /><br />
                <b className="pull-left">0 VND</b> <b className="pull-right">2.000.000 VND</b>
            </div>
          </div>

          <div className="shipping text-center">
            <img src="{{asset('user/images/home/shipping.jpg')}}" alt="" />
          </div>

        </div>
      </div>

    )
  }
}