import React from "react";
import Card from "react-bootstrap/Card";

const PackageService = () => {
  return (
    <div>
      <Card className="shadow " style={{ width: "20rem", marginTop: "25px" }}>
        <Card.Img
          variant="top"
          style={{ marginBottom: "20px" }}
          src=""
          alt="An image is here"
        />
        <Card.Body>
          <Card.Title>
            <h3>Regular Car Service</h3>
          </Card.Title>
          <Card.Text>
            Regular car service includes changing of regular mobile oil,radiator
            coolant,oil filter,air filter and Ac air filter.It also involves
            cleaning of spark plugs, checking of break pads and other various
            checks which are available at your home doorsteps.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">By:-Authentic Mechanics</small>
        </Card.Footer>
      </Card>
    </div>
  );
};
export default PackageService;
