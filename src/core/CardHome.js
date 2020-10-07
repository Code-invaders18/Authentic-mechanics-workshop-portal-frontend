import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Logo from "../Logo2.png";
import Logo3 from "../Logo3.png";
import Logo4 from "../Logo4.jpg";
import Logo5 from "../Logo5.jpg";

const CardHome = () => {
  return (
    <div>
      <CardDeck className="ml-3 mr-3">
        <Card className="shadow p-2 mb-5 bg-white rounded">
          <Card.Img className="mb-5" variant="top" src={Logo} />
          <Card.Body>
            <Card.Title className="mt-5">
              <h3>Car Brand & Model</h3>
            </Card.Title>
            <Card.Text>
              <hr className="ch mt-5 mb-3" />
              <div>Baleno(P)</div>
              <hr className="ch" />
              <div>Verna(P)</div>
              <hr className="ch" />
              <div>i20(P)</div>
              <hr className="ch" />
              <div>Wagon R(P)</div>
              <hr className="ch" />
              <div>Swift(P)</div>
              <hr className="ch" />
              <div>Tiago(P)</div>
              <hr className="ch" />
              <div>Vitara Breeza(D)</div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow p-2 mb-5 bg-white rounded">
          <Card.Img variant="top" src={Logo3} />
          <Card.Body>
            <Card.Title className="mt-5">
              <h3>Authorized Service Center Price</h3>
            </Card.Title>
            <Card.Text>
              <hr className="ch mt-5 mb-3" />
              <div>
                <del>Rs.4589</del>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.4890</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.4800</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.3000</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.3700</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.5515</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.5950</strike>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow p-2 mb-5 bg-white rounded">
          <Card.Img variant="top" src={Logo4} />
          <Card.Body>
            <Card.Title className="mt-4">
              <h3>Local Mechanic and Workshop</h3>
            </Card.Title>
            <Card.Text>
              <hr className="ch mt-5 mb-3" />
              <div>
                <strike>Rs.2750</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.2850</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.2800</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.2003</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.2566</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.3200</strike>
              </div>
              <hr className="ch" />
              <div>
                <strike>Rs.3570</strike>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow p-2 mb-5 bg-white rounded">
          <Card.Img variant="top" src={Logo5} />
          <Card.Body>
            <Card.Title>
              <h2>Authentic Mechanics Price</h2>
            </Card.Title>
            <Card.Text>
              <hr className="ch mt-4 mb-3" />
              <div className="Aprice">Rs.2265</div>
              <hr className="ch" />
              <div className="Aprice">Rs.2297</div>
              <hr className="ch" />
              <div className="Aprice">Rs.2267</div>
              <hr className="ch" />
              <div className="Aprice">Rs.1959</div>
              <hr className="ch" />
              <div className="Aprice">Rs.2165</div>
              <hr className="ch" />
              <div className="Aprice">Rs.2534</div>
              <hr className="ch" />
              <div className="Aprice">Rs.3185</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <p>
        <small className="text-muted">
          * Service cost shown above is just an estimation price. Authentic
          Mechanics servicing cost is best possible minimum pricing they could
          deliver at your home doorstep. This can vary subject to user choice.
        </small>
      </p>
    </div>
  );
};
export default CardHome;
