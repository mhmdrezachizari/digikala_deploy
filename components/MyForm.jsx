import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import MyFormErrorComponent from "./MyFormErrorComponent";
import styles from "./Myform.module.css";
import { useRouter } from "next/router";
import Modal from "./Modal";
import Spinner from "./Spinner";



const MyForm = () => {
  const [nameUser, setnameUser] = useState('')
  const [spinner, setspinner] = useState(false)
  const router = useRouter();
  const [flag, setflag] = useState(false);
  const [errorHnadle , setErrorHandle] = useState(false)
  const singup = (values) => {
    fetch("http://80.75.14.90:9090/users/register", {
      method: "post",
      body: JSON.stringify({
        username: values.name,
        password: values.password
      }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
       if (response.status===200){
        setflag(true);
        setErrorHandle(true)
        setspinner(false)
       }
       else{
        router.push(`/LoginCng/${values.name}`)
       }
      })
  };
  const formFields = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };
  const submitHandler = (values) => {
    setspinner(true)
    singup(values);
    console.log(values)


    setnameUser(values.lastname)
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("enter name please"),
    lastname: Yup.string().required("enter lastname please"),
    email: Yup.string()
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
        {
          spinner === true ? <Spinner/>:     <div>
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
                  />
                  <ErrorMessage name="name" component={MyFormErrorComponent} />
                </div>
                <div className={styles.divdakhel}>
                  <label className={`${styles.c123} my-2`}>نام خانوادگی</label>
                  <Field
                    type="text"
                    name="lastname"
                    className="form-control"
                  />
                  <ErrorMessage name="lastname" component={MyFormErrorComponent} />
                </div>
                <div className={styles.divdakhel}>
                  <label className={`${styles.c123} my-2`}>ایمیل</label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage name="email" component={MyFormErrorComponent} />
                </div>
                <div className={styles.divdakhel}>
                  <label className={`${styles.c123} my-2`}>رمز</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage name="password" component={MyFormErrorComponent} />
                </div>
                <button className="btn btn-primary mt-3" type="submit">
                  signUp
                </button>
              </div>
            </Form>
          </Formik>
          {
            errorHnadle === true ? <Modal error={"نام کاربردی شما قبلا ثبت شده است"} flag={flag} setflag={()=>setflag((!flag))} />:null
          }
              </div>
        }

    </div>
    
  );
};

export default MyForm;
