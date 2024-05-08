import React from "react";
import styles from "./Buttoonfirst.module.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { additem } from "@/redux/shoppingCartReducer";
const Buttoonfirst = (props) => {
  const dispach = useDispatch();
  const changeHandler = (date) => {
    dispach(additem(date));
  };
  return (
    <div className={styles.outainerdiv}>
      <Button onClick={() => changeHandler(props.date)} variant="primary">
        اضافه به سبد خرید
      </Button>
    </div>
  );
};

export default Buttoonfirst;
