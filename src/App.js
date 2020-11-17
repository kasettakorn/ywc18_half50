import React, { Component } from "react";
import {
  Tag,
  Col,
  Input,
  Layout,
  Radio,
  Row,
  Select,
  Breadcrumb,
  Rate,
} from "antd";
import { PushpinFilled } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./styles/style.css";
import "./index.css";
import data from "./data/store.json";
import logo from "./assets/halfhalf-logo.png";
import miniLogo from "./assets/halfhalf-logo-mini.png";
import Search from "antd/lib/input/Search";

const { Header, Sider, Content } = Layout;
const { Option } = Select;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopType: -1,
      province: null,
      priceRange: null,
      subType: null,
    };
    this.handleShopTypeChange = this.handleShopTypeChange.bind(this);
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.handlePriceRangeChange = this.handlePriceRangeChange.bind(this);
    this.handleSubTypeChange = this.handleSubTypeChange.bind(this);
  }

  handleShopTypeChange = (e) => {
    this.setState({
      shopType: e.target.value,
    });
  };

  handleProvinceChange = (value) => {
    this.setState({
      province: value,
    });
  };

  handlePriceRangeChange = (value) => {
    this.setState({
      priceRange: value,
    });
  };

  handleSubTypeChange = (e) => {
    this.setState({
      subType: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };
    return (
      <Layout style={{ backgroundColor: "transparent" }}>
        <Header style={{ backgroundColor: "transparent" }}>
          <Row gutter={16}>
            <Col md={5}>
              <img className="full-logo" src={logo} alt="logo" />
              <img className="mini-logo" src={miniLogo} alt="minilogo" />
            </Col>
            <Col md={19} style={{marginTop:"20px"}}>
              <Input.Group compact>
                <Select
                  defaultValue="พื้นที่ใกล้ฉัน"
                  style={{ width: "15%" }}
                  onChange={this.handleProvinceChange}
                >
                  <Option key="พื้นที่ใกล้ฉัน" value="พื้นที่ใกล้ฉัน">
                    <PushpinFilled /> พื้นที่ใกล้ฉัน
                  </Option>
                  <Option key="สถานที่ทั้งหมด" value="สถานที่ทั้งหมด">
                    <PushpinFilled /> สถานที่ทั้งหมด
                  </Option>
                  {data.provinces.map((province) => {
                    return (
                      <Option key={province} value={province}>
                        {province}
                      </Option>
                    );
                  })}
                </Select>
                <Search
                  style={{ width: "85%" }}
                  placeholder="ค้นหาชื่อ ร้านอาหาร และเครื่องดื่ม"
                />
              </Input.Group>
            </Col>
          </Row>

          <Breadcrumb
            style={{
              margin: "16px 0",
              backgroundColor: "rgb(41,59,120)",
              color: "white",
              padding: "10px",
            }}
          >
            <Breadcrumb.Item>หน้าแรก</Breadcrumb.Item>
            <Breadcrumb.Item>ค้นหา</Breadcrumb.Item>
          </Breadcrumb>
        </Header>

        <Layout
          style={{
            backgroundColor: "transparent",
            marginTop: "120px",
            padding: "15px",
          }}
        >
          <Sider
            id="sider"
            width={300}
            style={{
              height: "max-content",
              backgroundColor: "white",
              padding: "10px",
              border: "0.5px solid black",
            }}
          >
            <div>ประเภทร้านค้า</div>
            <Radio.Group onChange={this.handleShopTypeChange}>
              <Radio key={-1} style={radioStyle} value={-1}>
                ทั้งหมด
              </Radio>
              {data.categories.map((category, index) => {
                return (
                  <Radio key={index} style={radioStyle} value={index}>
                    {category.name}
                  </Radio>
                );
              })}
            </Radio.Group>
            <Select
              defaultValue="พื้นที่ใกล้ฉัน"
              style={{ width: "100%" }}
              onChange={this.handleProvinceChange}
            >
              <Option key="พื้นที่ใกล้ฉัน" value="พื้นที่ใกล้ฉัน">
                <PushpinFilled /> พื้นที่ใกล้ฉัน
              </Option>
              <Option key="สถานที่ทั้งหมด" value="สถานที่ทั้งหมด">
                <PushpinFilled /> สถานที่ทั้งหมด
              </Option>
              {data.provinces.map((province) => {
                return (
                  <Option key={province} value={province}>
                    {province}
                  </Option>
                );
              })}
            </Select>
            <b>ราคา</b>
            <Select
              defaultValue="ไม่เกิน 100 บาท"
              style={{ width: "100%" }}
              onChange={this.handlePriceRangeChange}
            >
              {data.priceRange.map((price) => {
                return (
                  <Option key={price} value={price}>
                    {price}
                  </Option>
                );
              })}
            </Select>
            {this.state.shopType !== -1 ? (
              <div>
                <b>ประเภท {data.categories[this.state.shopType].name}</b>
                <Radio.Group onChange={this.handleSubTypeChange}>
                  {data.categories[this.state.shopType].subcategories.map(
                    (subcategory) => {
                      return (
                        <Radio
                          key={subcategory}
                          style={radioStyle}
                          value={subcategory}
                        >
                          {subcategory}
                        </Radio>
                      );
                    }
                  )}
                </Radio.Group>
              </div>
            ) : null}
          </Sider>
          <Content style={{ marginLeft: "50px" }}>
            {data.merchants
              .filter(
                (merchant) =>
                  merchant.subcategoryName === this.state.subType ||
                  merchant.addressProvinceName === this.state.province
              )
              .map((merchant) => {
                return (
                  <div>
                    <Row
                      gutter={16}
                      style={{
                        backgroundColor: "white",
                        border: "0.5px solid gray",
                        padding: "10px",
                      }}
                    >
                      <Col lg={6} md={9} sm={24}>
                        <img
                          src={merchant.coverImageId}
                          alt="coverID"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "200px",
                          }}
                        />
                      </Col>
                      <Col lg={18} md={15} sm={24}>
                        <span>
                          {merchant.shopNameTH}{" "}
                          {merchant.isOpen === "Y" ? (
                            <Tag color="green">เปิดอยู่</Tag>
                          ) : (
                            <Tag color="gray">ปิดแล้ว</Tag>
                          )}{" "}
                        </span>
                        <p>
                          {merchant.subcategoryName} |{" "}
                          {merchant.addressDistrictName +
                            " " +
                            merchant.addressProvinceName}
                        </p>
                        <Rate
                          character="฿"
                          value={merchant.priceLevel}
                          style={{ color: "gray" }}
                          disabled
                        />
                        <hr />
                        <p>
                          สินค้าแนะนำ :{" "}
                          {merchant.recommendedItems.map((item) => {
                            return item + " ";
                          })}
                        </p>
                      </Col>
                    </Row>
                    <br />
                  </div>
                );
              })}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
