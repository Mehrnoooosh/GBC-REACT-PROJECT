import React from "react";
import { Link } from "react-router-dom";
import { walletAddress } from "../module/util";

const Address = () => {
  const wallet = walletAddress();
  return (
    <div className="card card-body text-left">
      <h3>Blockchain Node Addresses</h3>
      {wallet.length ? wallet.map((item) =><p><Link to={`/transfer/${item}`}>{item}</Link></p> ) : null}
    </div>
  );
};

export default Address;
