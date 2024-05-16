import React, { Component } from "react";

import axios from "axios";

import Card from "./card";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      city: "",
    };
  }

  fetchData() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}%2C${this.state.country}&appid=8d2de98e089f1c28e1a22fc19a24ef04&fbclid=IwAR3CJ3uwYYJ_hWquSMmrr6HOu7IwL0RMIMfxExwp1-TOxMGIqdl3lp_X8sg`
      )
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((res) => {
        console.log("Hello");
        this.setState({ data: null });
      });
  }

  handleCountryName = (e) => {
    this.setState({ country: e.target.value });
  };

  handleCityName = (e) => {
    this.setState({ city: e.target.value });
  };

  getWeatherData = (e) => {
    e.preventDefault();
    this.fetchData();
  };

  render() {
    return (
      <div>
        <h3>Find Todays Weather Here</h3>
        <form>
          <div id="element-container">
            <div>
              <label>Country Name</label> <br />
              <input
                type="text"
                name=""
                value={this.state.country}
                onChange={this.handleCountryName}
              />
              <br />
            </div>
            <div>
              <label>City Name</label>
              <br />
              <input
                type="text"
                name=""
                value={this.state.city}
                onChange={this.handleCityName}
              />{" "}
              <br />
            </div>
          </div>
          <button onClick={this.getWeatherData}>Get Weather</button>
        </form>
        <div>
          {this.state.data ? (
            <div>
              <h3 id="country">
                {this.state.data.name},{this.state.data.sys.country}
              </h3>
              <div id="center-div">
                <h4 id="cloud">{this.state.data.weather[0].main}</h4>
                <p id="temp">{this.state.data.main.temp}</p>
              </div>
              <div id="cards">
                <Card
                  title="Min Temperature"
                  data={this.state.data.main.temp_min}
                />
                <Card
                  title="Max Temperature"
                  data={this.state.data.main.temp_max}
                />
                <Card title="Humidity" data={this.state.data.main.humidity} />
                <Card title="Latitude" data={this.state.data.coord.lat} />
                <Card title="Longitude" data={this.state.data.coord.lon} />
                <Card title="Sunrise" data={this.state.data.sys.sunrise} />
                <Card title="Sunset" data={this.state.data.sys.sunset} />
              </div>
            </div>
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    );
  }
}
