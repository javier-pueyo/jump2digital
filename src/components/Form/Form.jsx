import React from "react";
import { useFormik } from "formik";
import './Form.scss';
import Button from "../Button/Button";


function Form() {
  const validate = (values) => {
    const errors = {};

    if (values.userPrivacy === false) {
      errors.userPrivacy = "You must accept the privacy policies";
    }

    if (!values.userEmail) {
     errors.userEmail = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
     errors.userEmail = 'Invalid email address';
   }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPrivacy: false,
    },
    validate,
    onSubmit: (values) => {
      console.log("submit");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="group">
        <label htmlFor="formEmail">Email</label>
        <input
          type="email"
          name="userEmail"
          value={formik.values.userEmail}
          onChange={formik.handleChange}
          placeholder="my-email@gmail.com (example)"
        />
        {formik.touched.userEmail && formik.errors.userEmail ? (
          <p className="error">{formik.errors.userEmail}</p>
        ) : null}
      </div>
      <div className="group">
        <div className="checkbox">
          <input className={`checkbox__input ${formik.values.userPrivacy ? 'checked' : ''}`}
            type="checkbox"
            name="userPrivacy"
            checked={formik.values.userPrivacy}
            onChange={formik.handleChange}
          />
          <label className="checkbox__label" htmlFor="signCheck">
            I have read and accepted the privacy policies
          </label>
        </div>
        {formik.touched.userPrivacy && formik.errors.userPrivacy ? (
          <p className="error">{formik.errors.userPrivacy}</p>
        ) : null}
      </div>
      <Button className="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Form;
