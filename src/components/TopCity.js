import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ChangeCity,
  GetCountryList,
  GetCityList,SetForeCast
} from "../Redux/Actions/index";
import { Row, Col, Badge } from "reactstrap";
import "../css/myCss.css";

class TopCity extends Component {
  getCountries = () => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => GetCountryList(data));
  };
  componentDidMount() {
    this.getCountries();
  }

  setCities = (event) => {
    console.log("suan setcitiesteyim");

    var selectedCity = event.target.value;
    ChangeCity(selectedCity);

    let apiUrl =
      "http://api.weatherapi.com/v1/forecast.json?key=45617d4e89734ea78bc170434200808&q="+selectedCity+"&days=3";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => SetForeCast(data));


  };

  getCities = (event) => {
    var selectedCountry = event.target.value;
    fetch("http://localhost:3000/countries?name=" + selectedCountry)
      .then((res) => res.json())
      .then((data) => GetCityList(data));
  };

  render() {
    return (
      <div>
        <Row>
          <Col md="6">
            <Badge color="myBadge" className=" text-center myBadge">
              <h3>Country List</h3>
            </Badge>
            <br></br>
            <br></br>
            <select onChange={this.getCities} className="form-control ">
              {this.props.countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </Col>

          <Col md="6">
            <Badge color="myBadge" className="text-center myBadge">
              <h3>City List</h3>
            </Badge>
            <br></br>
            <br></br>

            <select onChange={this.setCities} className="form-control">
              {this.props.cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentCity: state.CityReducer.currentCity,
  countries: state.CityReducer.countryList,
  cities: state.CityReducer.cityList,
});

export default connect(mapStateToProps)(TopCity);
