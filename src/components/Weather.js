import React, { Component } from "react";
import { connect } from "react-redux";
import { SetForeCast } from "../Redux/Actions/index";

import WeatherCard from "./WeatherCard/WeatherCard.js";

class Weather extends Component {
  

  componentDidMount() {
    this.sendReq();
  }

  

  sendReq = () => {
    console.log("send reqteyim");

    
      let apiUrl =
      "http://api.weatherapi.com/v1/forecast.json?key=45617d4e89734ea78bc170434200808&q=London&days=3";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => SetForeCast(data));
    

    
  };

  render() {
    return (
      <div>
        <div>
          <h2 className="text-center">
            {this.props.currentCity} Weather Forecast
          </h2>
          <hr></hr>
          <br></br>

          <WeatherCard foreCastes={this.props.foreCastes}></WeatherCard>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentCity: state.CityReducer.currentCity,
  foreCastes: state.CityReducer.foreCastes,
});

export default connect(mapStateToProps)(Weather);
