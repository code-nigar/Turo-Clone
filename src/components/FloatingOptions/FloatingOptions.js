import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FloatingOptions.css";

function FloatingOptions() {
  return (
    <div>
      <Container>
        <Row className="search-option">
          <Col sm={12} lg={5}>
            <div
              className="d-flex flex-column inp-grup"
              style={{ margin: "0px" }}
            >
              <p className="option-header">Where</p>
              <input
                type="text"
                placeholder="City, airport, address, or hotel "
              />
            </div>
          </Col>
          <Col sm={12} lg={3}>
            <div
              className="d-flex flex-column inp-grup"
              style={{ margin: "0px" }}
            >
              <p className="option-header">From</p>
              <div className="d-flex flex-row">
                <input type="date" />
                <input type="time" />
              </div>
            </div>
          </Col>
          <Col sm={12} lg={3}>
          <div
              className="d-flex flex-column inp-grup"
              style={{ margin: "0px" }}
            >
              <p className="option-header">Until</p>
              <div className="d-flex flex-row">
                <input type="date" />
                <input type="time" />
              </div>
            </div>
          </Col>
          <Col sm={12} lg={1} className="d-flex justify-content-end">
            <div className="searchBtnBg d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FloatingOptions;
