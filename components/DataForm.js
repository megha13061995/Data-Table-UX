import React, { useState } from "react";
const EmployeeForm = ({ onAddEntry }) => {
    const [formData, setFormData] = useState({
      EID: "",
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNumber: "",
      Salary: "",
      Country: "",
      DepartmentName: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddEntry(formData);
      setFormData({
        EID: "",
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Salary: "",
        Country: "",
        DepartmentName: "",
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-1">
        <h2 className="text-xl font-semibold mb-2 text-center">Add Employee</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div>
            <label htmlFor="EID">EID</label>
            <input type="number" id="EID" name="EID" value={formData.EID} onChange={handleChange} required className="p-2 w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="FirstName">First Name</label>
            <input type="text" id="FirstName" name="FirstName" value={formData.FirstName} onChange={handleChange} required className="p-2 w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="LastName">Last Name</label>
            <input type="text" id="LastName" name="LastName" value={formData.LastName} onChange={handleChange} required className="p-2 w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" name="Email" value={formData.Email} onChange={handleChange} required className="p-2 w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input type="tel" id="PhoneNumber" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} required className="p-2 w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="Salary">Salary</label>
            <input type="number" id="Salary" name="Salary" value={formData.Salary} onChange={handleChange} required className="p-2 w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="Country">Country</label>
            <input type="text" id="Country" name="Country" value={formData.Country} onChange={handleChange} required className="p-2 w-full border border-gray-300" />
          </div>
          <div>
            <label htmlFor="DepartmentName">Department Name</label>
            <input type="text" id="DepartmentName" name="DepartmentName" value={formData.DepartmentName} onChange={handleChange} required className="p-2 w-full border border-gray-300" />
          </div>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add Employee</button>
      </form>
    );
  };
  export default EmployeeForm