import React from "react";
import Table from "react-bootstrap/Table";

const Tables = ({
  name,
  index,
  phoneno,
  address,
  brand,
  car,
  fueltype,
  description,
}) => {
  const value = () => {
    if (index === 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Table striped bordered hover variant="dark">
      {value() && (
        <thead className="text-white">
          <tr>
            <th className="th1">#</th>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th>Brand</th>
            <th>Car</th>
            <th>Fuel Type</th>
            <th>Description</th>
          </tr>
        </thead>
      )}
      <tbody>
        <tr>
          <td className="td1">{index}</td>
          <td>{name}</td>
          <td>{phoneno}</td>
          <td>{address}</td>
          <td>{brand}</td>
          <td>{car}</td>
          <td>{fueltype}</td>
          <td>{description}</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default Tables;
