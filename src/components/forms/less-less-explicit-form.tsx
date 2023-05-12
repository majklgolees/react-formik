import * as yup from "yup";
import {Formik} from "formik";

const LessLessExplicitForm = () => {
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
        <form onSubmit={formikForm.handleSubmit} onReset={formikForm.handleReset}>
          <div className="row">
            <div className="col-6">
              <label htmlFor="firstName">
                First name {formikForm.touched.firstName ? "(Touched)" : null}
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                {...formikForm.getFieldProps("firstName")}
              />
              {formikForm.errors.firstName ? (
                <div className="text-danger mt-1">
                  {formikForm.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="col-6">
              <label htmlFor="lastName" id="lastName">
                Last name {formikForm.touched.lastName ? "(Touched)" : null}
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                {...formikForm.getFieldProps("lastName")}
              />
              {formikForm.errors.lastName ? (
                <div className="text-danger mt-1">
                  {formikForm.errors.lastName}
                </div>
              ) : null}
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
        </form>
      )}
    </Formik>
  );
};

export default LessLessExplicitForm;