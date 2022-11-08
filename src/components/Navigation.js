import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Transaction from "./Transaction";
import Wallet from "./Wallet";
import Address from "./Address";
import Transfer from "./Transfer";
const Navigation = () => {

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg " >
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={"nav-link"} to="/">
                  Transactions
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} to="/address">
                  Addresses
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} to="/wallet">
                  Wallet
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Transaction />}></Route>
        <Route path="/wallet" element={<Wallet />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/transfer/:to" element={<Transfer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
