import "../../css/myCss.css";
import React, { Component } from "react";
import { Row, Col,Table } from "reactstrap";
import percentage from "../../images/percentage.png"
import sun from "../../images/sun.png"
import moon from "../../images/moon.png"
import now from "../../images/now.png"

class WeatherCard extends Component {
  render() {
    return (
      <div>
        <Row>
          {this.props.foreCastes.map((foreCast) => (
            <Col md="4" key={foreCast.code}>
              <div className="card bg-light extraCard">
                <div className="card-header">
                  <Row>
                    <Col className="d-flex justify-content-start" md="4">
                      <img
                        src={foreCast.icon} className="" alt="description"
                      ></img>
                    </Col>
                    <Col
                      className="d-flex justify-content-end align-items-center" md="8"
                    >
                      <h6 className="text-center font-weight-bold">
                        {foreCast.name} {foreCast.date}{" "}
                      </h6>
                    </Col>
                  </Row>
                </div>
                <div className="card-body">

                <Table>
                  <thead>
                    <tr>
                    <th><img src={now} alt="now"></img></th>
                    <th><img src={sun} alt="max"></img></th>
                    <th><img src={moon} alt="min"></img></th>
                    </tr>
                    
                  </thead>
                  <tbody>
                    <tr>
                      <th>{foreCast.current_c} &#8451;</th>
                      <th>
                      {foreCast.maxtemp_c} &#8451;
                      </th>
                      <th>
                      {foreCast.mintemp_c} &#8451;
                      </th>
                    </tr>
                  </tbody>
                </Table>       
                  <p className="card-text font-weight-bold">Chance of rain <img src={percentage} alt="percentage"></img>  {foreCast.chanceofRain}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default WeatherCard;
