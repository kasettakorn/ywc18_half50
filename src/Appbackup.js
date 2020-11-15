import React, { Component } from 'react';
import './styles/style.css';
import './index.css';
import data from './data/store.json';
import logo from './assets/halfhalf-logo.png';
import miniLogo from './assets/halfhalf-logo-mini.png';
export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="banners">
          <img className="full-logo" src={logo} alt="logo"  />
          <img className="mini-logo" src={miniLogo} alt="minilogo"  />
        </div>
        <div className="row">
          <div id="sidebar" className="col-xl-3 col-md-4">
            <b>ประเภทร้านค้า</b>
            {/* Default checked  */}
            <div class="custom-control custom-radio">
              <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios" />
              <label class="custom-control-label" for="defaultChecked">ทั้งหมด</label>
              
            </div>
            {data.categories.map(category => {
              return <div class="custom-control custom-radio">
                      <input type="radio" class="custom-control-input" id={category.name} name={category.name}  />
                      <label class="custom-control-label" for="defaultChecked">{category.name}</label>
                      
                    </div>;
            })}
            <b>จังหวัดใกล้ฉัน</b>
            <div class="form-group">
              <select class="form-control" id="province">
                {data.provinces.map(province => {
                  return <option value={province}>{province}</option>
                })}
              </select>
            </div>
            <b>ประเภทสินค้าทั่วไป</b>
            

            
          </div>
          <div id="content" className="col-xl-9 col-md-8">
            {data.merchants.map(merchant => {
              return <div className="store-description">
                        <div className="row">
                          
                          <div className="col-6 col-sm-4">
                              <img src={merchant.coverImageId} />
                            
                          </div>
                          <div className="col-6 col-sm-8">
                              <b>{merchant.shopNameTH}</b><br/>
                              <p>{merchant.categoryName}</p><hr/>
                              <p>{merchant.addressDistrictName + " " + merchant.addressProvinceName}</p>
                              
                          </div>
                        </div><br/>
                    </div>
            })}

            
          </div> 
          
        </div>
      </div>
    );
  }
}
