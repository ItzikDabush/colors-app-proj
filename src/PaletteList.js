import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    console.log(palettes);
    return (
      <div>
        <h1>Palletlist</h1>
        {palettes.map(palette => (
            <MiniPalette {...palette}/>
        ))}
      </div>
    );
  }
}

export default PaletteList;
