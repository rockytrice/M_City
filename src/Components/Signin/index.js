import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { showToastSuccess, showToastError } from "../Utils/tools";

const SignIn = (props) => {
  const [loading, setLoading] = useState(false);
  // create configuration of formik. It is like a hook. We pass an object and inside the oject we need at least 3 different properties.
  const formik = useFormik({
    // what is the form going to be and all the fields insid of the form 😎
    initialValues: {
      email: "",
      password: "",
    },
    //validation for the form. Using formik and yup instead of doing by hand.
    //we use an object and it needs values that we configured above.
    validationSchema: Yup.object({
      //first we use the yup method and we specify what it is. In this case it is a string. Then we chain on other methods. So we are validating an email. In some methods we can also pass in an argument.
      email: Yup.string()
        .email("Invalid email address")
        .required("The email is required"),
      password: Yup.string().required("Password is required"),
    }),
    //now we create an on submit. if the form is correct it will trigger this call back function. this will contain all the values we need from the form
    onSubmit: (values) => {
      setLoading(true);
      // go to server with field values
      console.log(values);
      submitForm(values);
    },
  });
  const auth = getAuth();
  const submitForm = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        props.history.push("/dashboard");
        //show success toast
        showToastSuccess("Welcome Back");
      })
      .catch((err) => {
        setLoading(false);
        //show toast message
        showToastError(err.message);
      });
  };

  return (
    <div className="container">
      <div className="signin_wrapper" style={{ margin: "100px" }}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Please Login</h2>
          <input
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {/* error message handling. you get access to the errors array from formik */}
          {formik.touched.email && formik.errors.email ? (
            <div className="error_label">{formik.errors.email}</div>
          ) : null}
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="error_label">{formik.errors.password}</div>
          ) : null}

          {loading ? (
            <CircularProgress
              color="secondary"
              className="progress"
              style={{ background: "none" }}
            />
          ) : (
            <button type="submit">Login</button>
          )}

          {/* {loading ? (
            <CircularProgress color="secondary" className="progress" />
          ) : (
            <button type="submit">Login</button>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
