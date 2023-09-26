import React, { useState } from "react";
import axios from "axios";

function NewCustomerForm() {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/customers",
        formData
      );
      console.log("Customer created: ", response.data);

      // Reset the form after successful submission
      setFormData({
        dateOfBirth: "",
        firstName: "",
        lastName: "",
      });
    } catch (error) {
      console.log("Error creating customer: ", error);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h2>Create New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewCustomerForm;
