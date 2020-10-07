import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import Service1 from "../service1.png";
import Service2 from "../service2.jpg";
import Service3 from "../service3.jpg";
import Service4 from "../service4.jpg";
import Service5 from "../service5.jpg";
import Service6 from "../service6.jpg";
import Service7 from "../service7.jpg";
import Service8 from "../service8.png";

const HomeServices = () => {
  return (
    <div>
      <CardDeck>
        <Card className="shadow">
          <Card.Img
            variant="top"
            style={{ marginBottom: "20px" }}
            src={Service1}
          />
          <Card.Body>
            <Card.Title>
              <h3>Regular Car Service</h3>
            </Card.Title>
            <Card.Text>
              Regular car service includes topup of regular mobile oil,radiator
              coolant,oil filter,air filter and AC air filer.It also involves
              cleaning of spark plugs, checking of break pads and other various
              checks which are available at your home doorsteps.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">By:-Authentic Mechanics</small>
          </Card.Footer>
        </Card>
        <Card className="shadow">
          <Card.Img
            style={{ width: "80%", marginLeft: "40px" }}
            variant="top"
            src={Service2}
          />
          <Card.Body>
            <Card.Title>
              <h3>Suspension Repair</h3>
            </Card.Title>
            <Card.Text>
              Suspension work includes repair of left/right front arm
              suspensions repair work, shockers checking, solution to irregular
              stearing handling ,wheel balancing and alignment which are
              available at our store at a very reasonable cost.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">By:-Authentic Mechanics</small>
          </Card.Footer>
        </Card>
        <Card className="shadow">
          <Card.Img
            variant="top"
            style={{ marginBottom: "15px" }}
            src={Service3}
          />
          <Card.Body>
            <Card.Title>
              <h3>Clutch Repair Work</h3>
            </Card.Title>
            <Card.Text>
              Clutch plates are one of the running part of a car.We provide this
              repair work at very reasonable cost your home doorstep.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">By:-Authentic Mechanics</small>
          </Card.Footer>
        </Card>
        <Card className="shadow">
          <Card.Img
            variant="top"
            style={{ marginBottom: "35px", marginTop: "10px" }}
            src={Service4}
          />
          <Card.Body>
            <Card.Title>
              <h3>Air Conditioner Service</h3>
            </Card.Title>
            <Card.Text>
              This includes servicing of air conditioner of your car and even
              the genuine cooling coils are also available at our store at a
              very reasonable cost.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">By:-Authentic Mechanics</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
      <CardDeck>
        <Card className="shadow">
          <Card.Img
            variant="top"
            style={{ width: "80%", marginLeft: "30px" }}
            src={Service5}
          />
          <Card.Body>
            <Card.Title>
              <h3>Car Washing And Dry Cleaning</h3>
            </Card.Title>
            <Card.Text>
              Washing and Dry-cleaning services includes engine washing and
              interior vaccum cleaning + polishing.This is also available at our
              store at a very reasonable cost.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">By:-Authentic Mechanics</small>
          </Card.Footer>
        </Card>
        <Card className="shadow">
          <Card.Img
            style={{ width: "80%", marginLeft: "25px", marginTop: "15px" }}
            variant="top"
            src={Service7}
          />
          <Card.Body>
            <Card.Title>
              <h3>Windshield and Wiper Repair</h3>
            </Card.Title>
            <Card.Text>
              We also repair broken windshields,side mirrors and rain wipers at
              your home doorstep at a very cheaper price.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">By:-Authentic Mechanics</small>
          </Card.Footer>
        </Card>
        <Card className="shadow">
          <Card.Img
            variant="top"
            style={{ width: "80%", marginLeft: "30px" }}
            src={Service6}
          />
          <Card.Body>
            <Card.Title>
              <h3>Custom Repair Work</h3>
            </Card.Title>
            <Card.Text>
              Custom repair services includes custom diagnosing of vehicle as
              per the customer and our well trained mechanic do it at a very
              resonable cost just at your home doorstep.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">By:-Authentic Mechanics</small>
          </Card.Footer>
        </Card>
        <Card className="shadow">
          <Card.Img
            variant="top"
            style={{ width: "80%", marginLeft: "29px", marginTop: "20px" }}
            src={Service8}
          />
          <Card.Body>
            <Card.Title>
              <h3>Battery Drain Problem</h3>
            </Card.Title>
            <Card.Text>
              Battery Drainage is a very common problem for cars with old
              batteries installed.And making a jump start of a car from a local
              mechanic cost more than 500 bucks.We provide jump start service at
              a very reasonable cost .
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">By:-Authentic Mechanics</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};
export default HomeServices;
