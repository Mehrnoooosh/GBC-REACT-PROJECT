import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { walletAddress } from "../module/util";
import Reciept from "./Reciept";
const Transfer = () => {
  const wallet = walletAddress();
  const params = useParams();
  const [showReciept, setShowReciept] = useState(false);
  const [amount, setAmount] = useState("");
  console.log(amount);
  return (
    <>
      <h3 className="text-left">Transfer</h3>
      <div className="card mt-3 text-left">
        <div className="card-body">
          <p>
            <b>From:</b> 0xB3F0725999B7a16516235A709D8b1c871370eb42
          </p>
          <p>
            <b>To:</b> {params.to}
          </p>
          <p>
            <b>Amount:</b>{" "}
            <input
              onChange={(e) => {
                setAmount(e.target.value);
                setShowReciept(false);
              }}
            />
          </p>
          <button
            className="btn btn-success"
            onClick={() => setShowReciept(true)}
          >
            Submit
          </button>
        </div>
      </div>
      {showReciept ? (
        <Reciept from={wallet[0]} to={params.to} amount={amount} />
      ) : null}
    </>
  );
};

export default Transfer;
