import { useState } from "react";
import { useFormik } from "formik";
import './Form.scss';
import { Button } from "../index";


function Form() {
  let [sendForm, setSendForm] = useState(false);

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
      setSendForm(true);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="group">
        <label htmlFor="userEmail">Email</label>
        <input
          id="userEmail"
          type="text"
          name="userEmail"
          value={formik.values.userEmail}
          onChange={formik.handleChange}
          placeholder="my-email@gmail.com (example)"
        />
        {formik.touched.userEmail && formik.errors.userEmail ? (
          <p className="message message--error">{formik.errors.userEmail}</p>
        ) : null}
      </div>
      <div className="group">
        <div className="checkbox">
          <input className={`checkbox__input ${formik.values.userPrivacy ? 'checked' : ''}`}
            id="userPrivacy"
            type="checkbox"
            name="userPrivacy"
            checked={formik.values.userPrivacy}
            onChange={formik.handleChange}
          />
          <label className="checkbox__label" htmlFor="userPrivacy">
            I have read and accepted the privacy policies
          </label>
        </div>
        {formik.touched.userPrivacy && formik.errors.userPrivacy ? (
          <p className="message message--error">{formik.errors.userPrivacy}</p>
        ) : null}
      </div>
      <Button className="primary" type="submit">
        Submit
      </Button>
      {sendForm ? (
          <p className="message message--success">Form sent successfully</p>
      ) : null}
      
    </form>
  );
}

export default Form;
