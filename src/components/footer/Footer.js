import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column align-items-center pt-5 pb-5 w-100"
        style={{ background: "#fff" }}
      >
        <p className="mb-0 pb-0">All code released under the MIT License</p>
        <p>
          Copyright © 2018 Created by <strong>Kiran Bhalerao</strong>.
        </p>
      </div>
    );
  }
}
export default Footer;
