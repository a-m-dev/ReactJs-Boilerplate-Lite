import React from "react";
import { useFormik } from "formik";
import { Formik } from "./Formik";
import * as Yup from "yup";

export const SignupForm = () => {
  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    getFieldProps,
  } = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
    },
    // validate: (values) => {
    //   const errors = {};
    //   if (!values.firstname) {
    //     errors.firstname = "firstname is required!";
    //   } else if (values.firstname.length > 15) {
    //     errors.firstname = "must be 15 chars or less";
    //   }

    //   if (!values.lastname) {
    //     errors.lastname = "lastname is required!";
    //   } else if (values.lastname.length > 20) {
    //     errors.lastname = "must be 15 chars or less";
    //   }

    //   if (!values.email) {
    //     errors.email = "email is required!";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = "invalid email";
    //   }

    //   return errors;
    // },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "must be 15 chars or less")
        .required("Required"),
      lastname: Yup.string().max(20, "Must be 20 chars or less").required(),
      email: Yup.string().email("Invalid Email...").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">Firstname</label>
      <input
        name="firstname"
        {...getFieldProps("firstname")}
        // id="firstname"
        // type="text"
        // onChange={handleChange}
        // onBlur={handleBlur}
        // value={values.firstname}
      />
      {touched.firstname && errors.firstname ? (
        <em>{errors.firstname}</em>
      ) : null}
      <br />
      <label htmlFor="lastname">Lastname</label>
      <input
        name="lastname"
        {...getFieldProps("lastname")}
        // id="lastname"
        // type="text"
        // onChange={handleChange}
        // onBlur={handleBlur}
        // value={values.lastname}
      />
      {touched.lastname && errors.lastname ? <em>{errors.lastname}</em> : null}
      <br />
      <label htmlFor="email">Email Address</label>
      <input
        name="email"
        {...getFieldProps("email")}
        // id="email"
        // type="email"
        // onChange={handleChange}
        // onBlur={handleBlur}
        // value={values.email}
      />
      {touched.email && errors.email ? <em>{errors.email}</em> : null}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export const SignupFormWithContextMock = () => {
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "" }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .max(15, "max is 15 chars")
          .required("first name is required"),
        lastname: Yup.string()
          .max(20, "max is 20 chars")
          .required("lastname is required"),
        email: Yup.string()
          .email("invalid email")
          .required("email is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, touched, errors, getFieldProps }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">Firstname</label>
          <input id="firstname" {...getFieldProps("firstname")} />
          {touched.firstname && errors.firstname ? (
            <em>{errors.firstname}</em>
          ) : null}
          <br />
          <label htmlFor="lastname">lastname</label>
          <input id="lastname" {...getFieldProps("lastname")} />
          {touched.lastname && errors.lastname ? (
            <em>{errors.lastname}</em>
          ) : null}
          <br />
          <label htmlFor="email">email</label>
          <input id="email" {...getFieldProps("email")} />
          {touched.email && errors.email ? <em>{errors.email}</em> : null}
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
