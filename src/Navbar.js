import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">React color</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select>
            <MenuItem value="hex">HEX - #fffff</MenuItem>
            <MenuItem value="rgb">RGB - #fffff</MenuItem>
            <MenuItem value="rgba">RGBA - #fffff</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
