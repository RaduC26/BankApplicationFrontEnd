import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "./Components/Button";
import Customer from "./Customers/Customer";
import Accounts from "./Accounts/Accounts";
import Transactions from "./Transactions/Transactions";
import NewCustomerForm from "./Customers/NewCustomerForm";
import NewAccountForm from "./Accounts/NewAccountForm";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Button displayName="Accounts" linkTo="/accounts" />
      <Button displayName="Customer" linkTo="/customers" />
      <Button displayName="Transactions" linkTo="/transactions" />
      <Routes>
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/:id" element={<Transactions />} />
        <Route path="/customers/new" element={<NewCustomerForm />} />
        <Route path="/accounts/new" element={<NewAccountForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
