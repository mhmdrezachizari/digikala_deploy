import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import MyFormErrorComponent from "./MyFormErrorComponent";
import styles from "./Myform.module.css";
import { useRouter } from "next/router";
import Toast from 'react-bootstrap/Toast';



const MyForm = () => {
  const [nameUser, setnameUser] = useState('')
  const router = useRouter();
  const [massage1, setmassage1] = useState();
  const [flag, setflag] = useState(false);
  const singup = (values) => {
    fetch("https://6612ae9c53b0d5d80f6628ce.mockapi.io/api/project1/Login", {
      method: "post",
      body: JSON.stringify({
        username: values.name,
        lastname: values.lastname,
        password: values.password,
        email: values.email,
      }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((receivedData) => {
        console.log(receivedData);
      });
  };
  const formFields = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };
  const submitHandler = (values) => {
    singup(values);
    console.log(values)
    setmassage1("");
    setflag(true);
    setnameUser(values.lastname)
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("enter name please"),
    lastname: Yup.string().required("enter lastname please"),
    email: Yup.string()
      .required()
      .email("your email is not correct")
      .nullable(),
    password: Yup.string().required("enter password please"),
    nationalCode: Yup.string().matches(
      "kjghjdgfksdf@!#$adsfa",
      "national code in not coorect"
    ),
  });
  return (
    <div>
      <Formik
        validateOnBlur={false}
        validateOnChange={true}
        onSubmit={submitHandler}
        initialValues={formFields}
        validationSchema={validationSchema}
      >
        <Form className="container">
          <div className={styles.div1}>
            <div className={styles.divdakhel}>
              <label className={`${styles.c123} my-2`}>نام</label>
              <Field
                type="text"
                name="name"
                className="form-control"
                value={massage1}
              />
              <ErrorMessage name="name" component={MyFormErrorComponent} />
            </div>
            <div className={styles.divdakhel}>
              <label className={`${styles.c123} my-2`}>نام خانوادگی</label>
              <Field
                type="text"
                name="lastname"
                className="form-control"
                value={massage1}
              />
              <ErrorMessage name="lastname" component={MyFormErrorComponent} />
            </div>
            <div className={styles.divdakhel}>
              <label className={`${styles.c123} my-2`}>ایمیل</label>
              <Field
                type="text"
                name="email"
                className="form-control"
                value={massage1}
              />
              <ErrorMessage name="email" component={MyFormErrorComponent} />
            </div>
            <div className={styles.divdakhel}>
              <label className={`${styles.c123} my-2`}>رمز</label>
              <Field
                type="password"
                name="password"
                className="form-control"
                value={massage1}
              />
              <ErrorMessage name="password" component={MyFormErrorComponent} />
            </div>
            <button className="btn btn-primary mt-3" type="submit">
              signUp
            </button>
          </div>
        </Form>
      </Formik>
      <Toast autohide={true} onClose={()=>setflag(!flag)} delay={5000} animation={true} show={flag} bg="danger">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">خوش آمدید</strong>
      </Toast.Header>
      <Toast.Body>ثبت نام شما با موفقیت انجام شد اقای {nameUser}</Toast.Body>
    </Toast>
    </div>
  );
};

export default MyForm;
