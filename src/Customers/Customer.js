import "./Customer.css";
import React, { useState, useEffect } from "react";

function createNewCustomer() {
  window.location.href = "/customers/new";
}

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const customers_response = await fetch("http://localhost:8080/customers");
      const customers_data = await customers_response.json();
      setCustomers(customers_data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Date of Birth</th>
            <th>Firstname</th>
            <th>Surname</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.dateOfBirth}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={createNewCustomer}>Add a new customer</button>
    </div>
  );
};

export default Customer;
