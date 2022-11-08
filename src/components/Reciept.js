import React, { useEffect, useState } from "react";
import { transactionHash } from "../module/util";

const Reciept = (props) => {
  const hash = transactionHash();
  return (
    <div className="card mt-3 text-left">
      <div className="card-body">
        <h3>Reciept</h3>
        <p>
          <b>Transaction Hash:</b> {hash[0]}
        </p>
        <p>
          <b>Block Hash:</b> {hash[1]}
        </p>
        <p>
          <b>Block Number:</b> 10
        </p>
        <p>
          <b>From:</b> {props.from}
        </p>
        <p>
          <b>To:</b> {props.to}
        </p>
        <p>
          <b>Gas Used:</b> {props.amount}
        </p>
      </div>
    </div>
  );
};

export default Reciept;
