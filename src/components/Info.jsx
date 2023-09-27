import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Info = () => {
  return (
    <div className="container-fluid bg-info text-light d-flex justify-content-between p-2">
      <div>
        <span className="p-1 rounded-1 align-items-center m-2 fw-bold">
          Web Development
        </span>
        <span className="p-1 rounded-1 align-items-center m-2">
          <i className="p-1 rounded-1 align-items-center bi bi-star"></i>
        </span>
        <span className="p-1 rounded-1 align-items-center m-2">Personal</span>
        <span className="p-1 rounded-1 align-items-center m-2">
          <i className="bi bi-briefcase-fill m-1"></i>Private
        </span>
      </div>
      <div className="">
        <span className="p-1 rounded-1 align-items-center ">
          <i className="bi bi-three-dots m-1"></i>
          Show Menu
        </span>
      </div>
    </div>
  );
};

export default Info;
