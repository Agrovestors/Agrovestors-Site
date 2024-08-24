// EmployeePage.js
import React from "react";
import "./EmployeePage.css";

const employees = [
  {
    name: "John Doe",
    image:
      "https://i.pinimg.com/736x/26/38/ae/2638ae70dfd9d29d3a5287440f91d5f5.jpg",
  },
  {
    name: "Jane Smith",
    image: "https://i.pinimg.com/736x/9b/8a/d5/9b8ad5aa1da6cac14c97293c4aec5c6f.jpg", // Replace with actual image URL
  },
  {
    name: "Michael Johnson",
    image: "https://i.pinimg.com/564x/4f/ae/8a/4fae8aee506a3a66488eb1a58629fbc2.jpg", // Replace with actual image URL
  },
];

const EmployeePage = () => {
  return (
    <div className="employee-page">
      <h1 className="color-title">Our Team</h1>
      <h1> Here at <span className="color-title-small">AGROVESTORS™ </span> 
      we are made up of a group of young, bright and empowered Africans, driven in our goal
       to motive and change the agricultural landscape in Nigeria and African as a whole.
        <p>We are Bold. We are Young . We are..</p>
      </h1>
      <div className="employee-list">
        {employees.map((employee, index) => (
          <div key={index} className="employee-card">
            <img
              src={employee.image}
              alt={employee.name}
              className="employee-image"
            />
            <p className="employee-name">{employee.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeePage;
