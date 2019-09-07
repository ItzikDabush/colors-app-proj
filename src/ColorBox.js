import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import "./ColorBox.css";
import { palette } from "@material-ui/system";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  //change the state of copied for 2 sec and change it back using a callback
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    return (
      //using the CopyToClipboard from the library in order to copy the color from the entire ColorBox
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">COPY</button>
          </div>

          {showLink && (
            <Link to={moreUrl} onClick={event => event.stopPropagation()}>
              <span className="see-more">More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
