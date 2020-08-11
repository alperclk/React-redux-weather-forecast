import React, { Component } from "react";
import MyHeader from "../Header/MyHeader.js";
import MyJumbotron from "../Jumbotron/MyJumbotron.js"
import "../../css/myCss.css"
import Weather from "../Weather.js";
import TopCity from "../TopCity.js";

class App extends Component {
  render() {
    return (
      <div className="">
        <MyHeader></MyHeader>
        <div className="container">
        <MyJumbotron></MyJumbotron>

        <TopCity>

        </TopCity>
        <br></br>

        <Weather></Weather>
        

        </div>
        

      
      </div>
    );
  }
}

export default App;
