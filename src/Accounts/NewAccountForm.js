import React, { useState } from "react";
import axios from "axios";

function NewAccountForm() {
  const [formData, setFormData] = useState({
    customerId: 0,
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
    console.log(formData.customerId);

    try {
      const response = await axios.post(
        "http://localhost:8080/accounts",
        null,
        {
          params: {
            customerId: formData.customerId,
          },
        }
      );
      console.log("Account created: ", response.data);

      // Reset the form after successful submission
      setFormData({
        customerId: 0,
      });
    } catch (error) {
      console.log("Error creating account: ", error);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer Id:</label>
          <input
            type="number"
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewAccountForm;
