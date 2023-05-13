import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";

const ImplicitForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "John", lastName: "Doe" }}
      validationSchema={
        yup.object({
          firstName: yup
            .string()
            .required("First name is required")
            .min(3, "At least 3 characters required"),
          lastName: yup.string().required().min(3),
        })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {formikForm => (
        <Form>
          <div className="row">
            <div className="col-6">
              <label htmlFor="firstName">
                First name {formikForm.touched.firstName ? "(Touched)" : null}
              </label>
              <Field name="firstName" type="text" className="form-control"/>
              <ErrorMessage name="firstName">
                {(errorMessage) =>   <div className="text-danger mt-1">{errorMessage}</div>}
              </ErrorMessage>
            </div>
            <div className="col-6">
              <label htmlFor="lastName" id="lastName">
                Last name {formikForm.touched.lastName ? "(Touched)" : null}
              </label>
              <Field name="lastName" type="text" className="form-control"/>
              <ErrorMessage name="lastName" component="label" className="text-danger mt-1"/>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ImplicitForm;