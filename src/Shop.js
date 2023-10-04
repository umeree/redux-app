import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./state/index";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, WithdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state) => state.amount);

  return (
    <div>
      <h2>Deposit / Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          WithdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance: {amount}
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
