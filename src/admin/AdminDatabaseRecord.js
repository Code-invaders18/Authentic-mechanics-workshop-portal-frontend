import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getAllRecords, deleteRecord } from "./helper/adminRequestApiCalls";
import Tables from "./Tables";
import Footer from "../user/Footer";
import { format } from "date-fns";
const AdminDatabaseRecord = () => {
  const [records, setRecords] = useState([]);
  const { user, token } = isAuthenticated();

  const preload = () =>
    getAllRecords().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRecords(data);
      }
    });
  useEffect(() => {
    preload();
  }, []);

  const deleteThisRecord = (recordId) => {
    deleteRecord(recordId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };
  return (
    <Base title="Welcome admin" description="Manage Services here">
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="display-4 text-center text-white mb-5">
            Admin Record
          </h2>
          {records.map((record, index) => (
            <div key={index} className="row text-center mb-2 ">
              <div className="col-12">
                <Tables
                  index={index}
                  name={record.name}
                  phoneno={record.phone}
                  address={record.address}
                  brand={record.brand}
                  car={record.car}
                  fueltype={format(
                    new Date(record.createdAt),
                    "dd-MM-yyyy HH:mm"
                  )}
                  description={record.serviceDescription}
                />

                <div className="float-right mb-2">
                  <button
                    onClick={() => {
                      deleteThisRecord(record._id); //if we would have not pass any value
                      //we could have use {delteThisProduct} method..here we r accessing
                      //it by callback function method
                    }}
                    className="btn btn-danger"
                  >
                    Delete above Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Base>
  );
};
export default AdminDatabaseRecord;
