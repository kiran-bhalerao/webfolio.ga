import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column align-items-center pt-5 pb-5 w-100"
        style={{ background: "#fff" }}
        id="footer"
      >
        <p className="mb-1 pb-0">
          <span className="text-danger">{"<3"}</span>{" "}
          <strong>Open Source</strong>
        </p>
        <p>
          Copyright © 2018 Created by <strong>Kiran Bhalerao</strong>.
        </p>
      </div>
    );
  }
}
export default Footer;
