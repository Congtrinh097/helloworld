import * as React from 'react';



export  class LayoutFooter extends React.Component<any,any>{
  render(){
    return(
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="companyinfo">
                  <h2><span>T</span>-SEAFOODS</h2>
                  <p>Mục tiêu của chúng tôi là không ngừng đổi mới, nâng cao chất lượng thực phẩm, cũng như cách phục vụ để đáp ứng nhu cầu ngày càng cao của Quý Khách</p>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="wwwroot/asset/user_interface/images/home/iframe1.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                    </a>
                    <p>Trần Công Trình</p>
                    <h2>Hổ trợ kỉ thuật </h2>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="wwwroot/asset/user_interface/images/home/iframe2.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                    </a>
                    <p>Nguyễn Thị Tú</p>
                    <h2>Nhân viên tư vấn</h2>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="wwwroot/asset/user_interface/images/home/iframe3.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                    </a>
                    <p>Lê Phụ Thái</p>
                    <h2>Đại diện bán hàng</h2>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <a href="#">
                      <div className="iframe-img">
                        <img src="wwwroot/asset/user_interface/images/home/iframe4.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                    </a>
                    <p>Nguyễn Thị Bé Tý</p>
                    <h2>Chăm sóc khách hàng</h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="address">
                  <img src="wwwroot/asset/user_interface/images/home/map.png" alt="" />
                  <p>Vinh Giang ward, Phu Loc district, Thua Thien Hue Province, Viet Nam</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p className="pull-left">Copyright © 2017 T-SEAFOODS Inc. All rights reserved.</p>
              <p className="pull-right">Designed by <span><a target="_blank" href="http://www.fb.com/congtrinhtran">congtrinh097</a></span></p>
            </div>
          </div>
        </div>

      </footer>
    )
  }
}