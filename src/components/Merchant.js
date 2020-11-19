import React, { Component } from "react";
import { Row, Col, Rate, Tag } from "antd";
export default class Merchant extends Component {
  render() {
    const {
      coverImageId,
      shopNameTH,
      isOpen,
      subcategoryName,
      addressDistrictName,
      addressProvinceName,
      priceLevel,
      recommendedItems,
      facilities
    } = this.props;
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
          <Col lg={9} md={12} sm={24}>
            <img
              src={coverImageId}
              alt="coverID"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "200px",
              }}
            />
          </Col>
          <Col lg={15} md={12} sm={24}>
            <span>
              {shopNameTH}{" "}
              {isOpen === "Y" ? (
                <Tag color="green">เปิดอยู่</Tag>
              ) : (
                <Tag color="gray">ปิดแล้ว</Tag>
              )}{" "}
            </span>
            <p>
              {subcategoryName} |{" "}
              <Rate
                character="฿"
                value={priceLevel}
                style={{ color: "gray" }}
                disabled
              />{" "}
              | {addressDistrictName + " " + addressProvinceName}
            </p>

            <hr />
            <p>
              เมนูแนะนำ :{" "}
              {recommendedItems.map((item, i) => {
                if (i == recommendedItems.length - 1) {
                  return item;
                } else {
                  return item + ", ";
                }
              })}
            </p>
            <p>
              สิ่งอำนายความสะดวก :{" "}
              {facilities.map((item, i) => {
                if (i == facilities.length - 1) {
                  return item;
                } else {
                  return item + ", ";
                }
              })}
            </p>
          </Col>
        </Row>
        <br />
      </div>
    );
  }
}
