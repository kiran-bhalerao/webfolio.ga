import React, { Component } from "react";
import "./Showcase.css";
import Navbar from "../navbar/Navbar";

class Showcase extends Component {
  render() {
    return (
      <div id="showcase">
        <Navbar />
        <section>
          <div className="row">
            <div className="col-lg-5 ">
              <div className="content d-flex flex-column align-items-center">
                <div>
                <h1>
                  HELLO,
                  <br />I AM KIRAN.
                </h1></div>
                <p>
                  I'm Glad that you visited my site where you get to know me and
                  my work.
                </p>
                <button className="btn big ui button mt-4">Next</button>
              </div>
            </div>
            <div className="col-lg-5" />
          </div>
        </section>
      </div>
    );
  }
}
export default Showcase;
