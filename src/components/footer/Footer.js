import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column align-items-center pt-4 pb-4 w-100"
        style={{ background: "#fff" }}
        id="footer"
      >
        <p className="mb-1 pb-0">
          <span className="text-danger">{"<3"}</span>{" "}
          <strong>Open Source</strong>
        </p>
        <p className="text-center p-3">
          Copyright © 2018 Designed and Developed by <strong>Kiran Bhalerao</strong>.
        </p>
      </div>
    );
  }
}
export default Footer;
