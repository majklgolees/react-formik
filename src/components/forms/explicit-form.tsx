import { useFormik } from "formik";
import { FormEvent } from "react";

const ExplicitForm = () => {
  const formikForm = useFormik({
    initialValues: {
      firstName: "John",
      lastName: "Doe",
    },
    onSubmit: (values) => {
      console.log("Executing onSubmit");
      alert(JSON.stringify(values, null, 2));
    },
    onReset: () => console.log("Executing onReset"),
  });

  const customHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log("Executing customHandleSubmit");
    formikForm.handleSubmit(event);
  };

  const customHandleReset = (event: FormEvent<HTMLFormElement>) => {
    console.log("Executing customHandleSubmit");
    formikForm.handleReset(event);
  };

  return (
    <>
      <form onSubmit={customHandleSubmit} onReset={customHandleReset}>
        <div className="row">
          <div className="col-6">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={formikForm.values.firstName}
              onChange={formikForm.handleChange}
            />
          </div>
          <div className="col-6">
            <label htmlFor="lastName" id="lastName">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={formikForm.values.lastName}
              onChange={formikForm.handleChange}
            />
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

export default ExplicitForm;
