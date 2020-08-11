import {  Button,Row,Col } from "reactstrap";
import React from 'react'
import "../../css/myCss.css"
import logo from "./logo512.png"

function MyJumbotron() {
  return (
    <div className="rowBosluk">   
      <Row >
        <Col md="6">
        <h1 className="display-3 htemplategri">Hello React!</h1>
        <br></br>
        <h3 className="lead htemplategri">
          This is my first React Application.
        </h3>

        <hr className="my-2" />
        <p className="aciklama">
        I wanted to make a weather app with WeatherApi and Redux.
        </p>
        <br></br>
        <p className="lead">
          <Button className="goSource">Go to source code</Button>
        </p>
        </Col>
        <Col md="6">
        <img src={logo} className="reactPhoto" alt="description" ></img>
        </Col>
      </Row>

    </div>
  )
}

export default MyJumbotron

