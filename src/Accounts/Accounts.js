import "./Accounts.css";
import React, { useState, useEffect } from "react";

function createNewAccount() {
  window.location.href = "/accounts/new";
}

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const accounts_response = await fetch("http://localhost:8080/accounts"); // Replace with your API URL
      const accounts_data = await accounts_response.json();
      setAccounts(accounts_data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <table className="account-table">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Account Number</th>
            <th>Balance</th>
            <th>Customer ID</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>
                <a href={"/transactions/" + account.id}>{account.id}</a>
              </td>
              <td>{account.accountNumber}</td>
              <td>{account.balance}</td>
              <td>{account.customerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={createNewAccount}>Add a new account</button>
    </div>
  );
};

export default Accounts;
