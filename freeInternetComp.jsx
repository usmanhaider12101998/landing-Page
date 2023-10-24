import React from "react";
import netUserImg from "../images/netUserImage.jpg";
import "aos/dist/aos.css";
import Aos from "aos";


export default function FreeInternetComp() {
  Aos.init({ duration: 2000 })
  return (
    <div className="container-fluid internetBgImage">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-end text-primary"
          data-aos="zoom-in-up">
          <div className="row ">
            <div className="col-sm-12 col-md-8 pt-2 pt-md-0">
              <h1 className="text-start">Free Internet for Eveyone</h1>
              <p className="text-start">
                One of the biggest challenges facing people living in poverty in
                access of technology.Tablets snd internet access can be
                expensive and many people in poverty cannot afford them.In
                regions grappling with poverty , the provision of complimentary
                tablets and internet access bears immense significance
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 pt-5 pb-2" data-aos="zoom-in-up">
          <img src={netUserImg} alt="map" className=" img-fluid opacity" />
        </div>
      </div>
    </div>
  );
}
