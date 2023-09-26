import { useParams } from "react-router-dom";
import "./Transactions.css";
import React, { useState, useEffect } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const id = useParams()["id"];
  var url = "http://localhost:8080/transactions";
  if (id) {
    url = url + "/" + id;
  }

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const transactions_response = await fetch(url);
      const transactions_data = await transactions_response.json();
      setTransactions(transactions_data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Receiver Id</th>
            <th>Sender ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.receiverAccountId}</td>
              <td>{transaction.senderAccountId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
