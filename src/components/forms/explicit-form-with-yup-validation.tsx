import { useFormik } from "formik";
import * as yup from "yup";

const ExplicitFormWithYupValidation = () => {
  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(3, "At least 3 characters required"),
    lastName: yup.string().required().min(3),
  });

  const formikForm = useFormik({
    initialValues: {
      firstName: "John",
      lastName: "Doe",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
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
              value={formikForm.values.firstName}
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
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
              value={formikForm.values.lastName}
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
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
    </>
  );
};

export default ExplicitFormWithYupValidation;
