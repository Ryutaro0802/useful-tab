import React, { Component } from "react";

export default class RainIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{ width: this.props.width }}
      >
        <path
          d="M416.296,232.076c-0.042,0-0.079,0.009-0.121,0.009c0.056-1.594,0.121-3.187,0.121-4.79 c0-76.646-62.131-138.771-138.763-138.771c-71.785,0-130.854,54.521-138.03,124.419c-10.066-3.113-20.755-4.791-31.842-4.791 C48.207,208.152,0,256.354,0,315.814c0,59.46,48.207,107.662,107.662,107.662h308.634c52.852,0,95.704-42.842,95.704-95.695 C512,274.919,469.148,232.076,416.296,232.076z"
          fill={this.props.fill}
        />
      </svg>
    );
  }
}
