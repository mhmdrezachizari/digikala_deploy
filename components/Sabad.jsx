import React from 'react'
import styles from './Sabad.module.css'
import Button from "react-bootstrap/Button";
const Sabad = (props) => {

  return (
    <div className={styles.divoutainer}>
        <h5 className={styles.h5in}>قیمت کل:{props.date.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }تومان</h5>
        <h5 className={styles.h5in}>تعداد کالا ها:{props.date.totalCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
        <Button className={styles.btnin}>پرداخت نهایی</Button>
    </div>
  )
}

export default Sabad