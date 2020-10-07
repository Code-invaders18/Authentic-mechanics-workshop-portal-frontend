import React from "react";
import "../styles.css";
import Base from "./Base";
import gifts from "../gifts.jpg";
import oil from "../oil.jpg";
import Car1 from "../car1.jpg";
import Car2 from "../car2.jpg";
import Car3 from "../car3.jpg";
import Car4 from "../car4.jpg";
import Car5 from "../car5.jpg";
import Car6 from "../car6.jpg";
import Carousel from "react-bootstrap/Carousel";
import Signup from "../user/Signup";
import CardHome from "./CardHome";
import AboutPic from "../homepic.jpg";
import AboutPic2 from "../homepic4.jpg";
import HomeServices from "./HomeSevices";
import { isAuthenticated } from "../auth/helper";
import Footer from "../user/Footer";
import HowTo from "./HowTo";
import { Card } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Base>
        <div className="row px-0 ml-3 ">
          <div
            className={` ${
              isAuthenticated() ? "col-md-11 edit" : "col-md-8 px-0 py-auto"
            }`}
          >
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100 " src={gifts} alt="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-80 "
                  src={Car5}
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-55"
                  src={Car6}
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 " src={oil} alt="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Car3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-85"
                  src={Car1}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-4">
            {!isAuthenticated() && (
              <Card className="bg-dark" style={{ paddingTop: "0px" }}>
                <Card.Body>
                  <Card.Text>
                    <h2 className="display-5 mb-3">
                      The Best Car Service Awaits You
                    </h2>
                    <h1 className="mt-3 mb-3">SIGN UP </h1>
                  </Card.Text>
                  <Signup />
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </Base>
      <div>
        <div className="bg-white ml-4 mr-4 mb-4 px-5 py-5 mt-3">
          <h1 className="display-4 ml-1">About Us</h1>
          <br />
          <img className="aboutus shadow" src={AboutPic} />
          <h4 className="monospace">
            Authentic Mechanics have come up with an initiative to provide their
            customer "Door step home facility for car services" and an
            affordable car service at our store/workshop. Our aim is to provide
            our customers with car services at a very reasonable cost, providing
            them with genuine spare parts, protecting them from market
            malfunctioning like offset genuine parts, local mechanic tricks and
            most importantly save their time and money in the comfort of their
            houses.
          </h4>
          <br />
          <img className="aboutus2 shadow mr-3" src={AboutPic2} />
          <h4 className="monospace">
            In the market, authorized car dealer service stations and
            professional workshop charge an exorbitant amount of money from
            their customers and even then they sometimes practice service
            malfunctioning and charge more than the actual cost of the spare
            parts.
          </h4>
          <br />
          <h4 className="monospace mb-4">
            So, Authentic Mechanics have taken initiative of providing a
            different way of servicing cars, making our customers aware,
            protecting them from cheating in their local workshops and save
            their money.
          </h4>
        </div>
        <div className="bg-white ml-4 mr-4 mt-4 p-1">
          <h3 className="display-4 text-center mt-5 mb-5">
            Price Comparison Chart
          </h3>
          <CardHome />
        </div>
        <div className="bg-white ml-4 mr-4 mb-4 px-5 py-5 mt-5">
          <h3 className="display-4 text-center mb-5">
            Why Authentic Mechanics ?
          </h3>
          <HomeServices />
        </div>
        <HowTo />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Footer />
      </div>
    </div>
  );
}
// <div className="card bg-dark" style={{ width: "30rem" }}>
//                 <div className="card-body">
//                   <div className="card-text">
//                     <h2 className="mb-3">The Best Car Service Awaits You</h2>
//                     <h1 className="mt-3 mb-3">SIGN UP </h1>
//                     <p className="display"></p>
//                   </div>
//                   <Signup />
//                 </div>
//               </div>
