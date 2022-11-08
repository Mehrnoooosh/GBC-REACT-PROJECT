import React, { useEffect, useState } from "react";
import { transactionHash, walletAddress } from "../module/util";

const Transaction = () => {
  const [history, setHistory] = useState([]);
  const wallet = walletAddress();
  const hash=transactionHash();
  const createTransaction = () => {
    setHistory([
      [
        hash[0],
        "SUCCESS",
        new Date().toLocaleString(),
        wallet[0],
        wallet[1],
        "250 ETH",
        "21000",
      ],
      [
        hash[1],
        "SUCCESS",
        new Date().toLocaleString(),
        wallet[2],
        wallet[3],
        "500 ETH",
        "22000",
      ],
    ]);
  };
  useEffect(() => {
    createTransaction();
  }, []);

  return (
    <>
      {history.length
        ? history.map((item) => (
            <div className="card mt-3 text-left">
              <div className="card-body">
                <p><b>Transaction Hash:</b> {item[0]}</p>
                <p><b>Status:</b> {item[1]}</p>
                <p><b>Timestamp:</b> {item[2]}</p>
                <p><b>From:</b> {item[3]}</p>
                <p><b>To:</b> {item[4]}</p>
                <p><b>Value:</b> {item[5]}</p>
                <p><b>Gas Used:</b> {item[6]}</p>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default Transaction;
