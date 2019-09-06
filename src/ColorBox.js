import React, { Component } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      //using the CopyToClipboard from the liray in order to copy the color from the entire ColorBox
      <CopyToClipboard text={background}> 
      <div style={{ background }} className="ColorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">COPY</button>
        </div>
        <span className="see-more">More</span>
        </div>
        </CopyToClipboard>

    );
  }
}

export default ColorBox;
