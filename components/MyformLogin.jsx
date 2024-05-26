import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import MyFormErrorComponent from "./MyFormErrorComponent";
import styles from "./Myform.module.css";
import { useRouter } from "next/router";
import Modal from "./Modal";
import Spinner from "./Spinner";
import axios from "axios";
import Cookies from "js-cookie";
const MyformLogin = () => {
  const [errorHandle, seterrorHandle] = useState(false);
  const [spinner, setspinner] = useState(false);
  const router = useRouter();
  const [flag, setflag] = useState(false);
  const singup = (values) => {
    axios.post("http://80.75.14.90:9090/users/login", values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.hasOwnProperty("token")) {
          Cookies.set("newjwt", response.data.token, {
            expires: 1,
            path: "/admin",
          });
          router.push(`/Dashboard/${values.username}`);
        } 
        else {
          console.log(response)
          setspinner(false);
          setflag(true);
          seterrorHandle(true)
        }
      });
  };
  // console.log(singup())
  const formFields = {
    username: "",
    password: "",
  };
  const submitHandler = (values) => {
    setspinner(true);
    console.log(values);
    singup(values);
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("enter name please"),
    password: Yup.string().required("enter password please"),
  });
  return (
    <div>
      {spinner === true ? (
        <Spinner />
      ) : (
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
                  <Field type="text" name="username" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component={MyFormErrorComponent}
                  />
                </div>
                <div className={styles.divdakhel}>
                  <label className={`${styles.c123} my-2`}>رمز</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component={MyFormErrorComponent}
                  />
                </div>
                <button className="btn btn-primary mt-3" type="submit">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
          {errorHandle === true ? 
            <Modal
              error={'رمز یا نام کاربری شما غلط است'}
              flag={flag}
              setflag={() => setflag(!flag)}
            />
           :null}
        </div>
      )}
    </div>
  );
};

export default MyformLogin;
