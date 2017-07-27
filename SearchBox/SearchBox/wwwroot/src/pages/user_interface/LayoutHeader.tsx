import * as React from 'react';



export  class LayoutHeader extends React.Component<any,any>{
render(){
  return(
    <header id="header">
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li><a href="#"><i className="fa fa-phone"></i> +84 164 982 1146</a></li>
                  <li><a href="#"><i className="fa fa-envelope"></i> congtrinh097@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo pull-left">

                <a href="/"><img src="wwwroot/asset/user_interface/images/home/logo.png" alt="" /></a>
              </div>
              <div className="btn-group pull-right">
                <div className="btn-group">
                  <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                    Việt Nam
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Canada</a></li>
                    <li><a href="#">English</a></li>
                  </ul>
                </div>

                <div className="btn-group">
                  <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                    VND
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">USD</a></li>
                    <li><a href="#">YPN</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav">
                  <li><a href="#"><i className="fa fa-user"></i> Tài khoản</a></li>
                  <li><a href="#"><i className="fa fa-star"></i> Yêu thích</a></li>

                  <li><a href="{{route('pages.cart')}}"><i className="fa fa-shopping-cart"></i> Giỏ hàng</a></li>
                  <li><a href="{{route('login')}}"><i className="fa fa-lock"></i> Đăng nhập</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li><a href="/" className="active">Trang chủ</a></li>
                  <li ><a href="/Product">Sản phẩm</a>

                  </li>
                  <li className="dropdown"><a href="#">Kinh nghiệm<i className="fa fa-angle-down"></i></a>
                    <ul role="menu" className="sub-menu">
                      <li><a href="/">Blog List</a></li>
                      <li><a href="/">Blog Single</a></li>
                    </ul>
                  </li>

                  <li><a href="/">Liên hệ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Tìm kiếm"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
}