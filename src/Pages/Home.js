import React, { Component } from "react";
import "./Home.css";

import Me from "../Pages/asset/mee.png";
import facebook from "../Pages/asset/fb.png";
import link from "../Pages/asset/link.png";
import wa from "../Pages/asset/wa.png";
import ig from "../Pages/asset/ig.png";

class Home extends Component {
  render() {
    return (
      <div className="bg">
        <div className="container" style={{ width: "42rem" }}>
          <div className="row">
            <div className="jumbotron mt-4">
              <img
                src={Me}
                alt="Mee"
                className="mx-auto d-block"
                style={{ width: "12rem", borderRadius: "50%" }}
              />
              <h3
                className="display-5 mt-5"
                style={{ borderBottom: "2px solid black", width: "8rem" }}
              >
                About Me
              </h3>
              <p className="lead">
                I am a simple, creative and innovative person who has a passion
                in science and technology, strong analytical skills to identify
                critical problem. I am looking forward to join with your team.
              </p>
              <hr className="my-4" />

              <div className="row foto">
                <div className="col-md-3 col-sm-12">
                  <a href="https://www.facebook.com/indra.kawasansiahaan/" target="blank">
                    <img className="spasi" src={facebook} alt="" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="https://www.linkedin.com/in/siahaan-kawasan/" target="blank">
                    <img className="spasi" src={link} alt="" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="https://wa.me/886975642739" target="blank">
                    <img className="spasi" src={wa} alt="" />
                  </a>
                </div>
                <div className="col-md-3 col-sm-12">
                  <a href="https://www.instagram.com/kawasansiahaan/" target="blank">
                    <img className="spasi" src={ig} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
