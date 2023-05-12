import { FormikErrors, FormikValues, useFormik } from "formik";
import { useEffect, useMemo } from "react";
import { debounce } from "lodash";

interface IFormProps {
  firstName: string;
  lastName: string;
}

const ExplicitFormWithExplicitValidationDebounced = () => {
  const validate = (values: FormikValues) => {
    const errors: FormikErrors<IFormProps> = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length <= 2) {
      errors.firstName = "At least 3 characters required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length <= 2) {
      errors.lastName = "At least 3 characters required";
    }
    return errors;
  };

  const formikForm = useFormik({
    initialValues: {
      firstName: "John",
      lastName: "Doe",
    },
    validate,
    validateOnChange: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const debouncedValidate = useMemo(
    () => debounce(formikForm.validateForm, 500),
    [formikForm.validateForm]
  );

  useEffect(() => {
    debouncedValidate(formikForm.values);
    return () => {
      debouncedValidate.cancel();
    };
  }, [debouncedValidate, formikForm.values]);

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

export default ExplicitFormWithExplicitValidationDebounced;
