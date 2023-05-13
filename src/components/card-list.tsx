import Card from "./card.tsx";
import ExplicitForm from "./forms/explicit-form.tsx";
import ExplicitFormWithExplicitValidation from "./forms/explicit-form-with-explicit-validation.tsx";
import ExplicitFormWithExplicitValidationDebounced from "./forms/explicit-form-with-explicit-validation-debounced.tsx";
import ExplicitFormWithYupValidation from "./forms/explicit-form-with-yup-validation.tsx";
import LessExplicitForm from "./forms/less-explicit-form.tsx";
import LessLessExplicitForm from "./forms/less-less-explicit-form.tsx";
import ImplicitForm from "./forms/implicit-form.tsx";
import {useState} from "react";

const CardList = () => {
  const [index, setIndex] = useState(0);

  const listOfFormikForms = [
    <Card cardHeaderText="Explicit form with Formik">
      <ExplicitForm></ExplicitForm>
    </Card>,
    <Card cardHeaderText="Explicit form with Formik with explicit validation">
      <ExplicitFormWithExplicitValidation></ExplicitFormWithExplicitValidation>
    </Card>,
    <Card cardHeaderText="Explicit form with Formik with explicit validation, fields are debounced">
      <ExplicitFormWithExplicitValidationDebounced></ExplicitFormWithExplicitValidationDebounced>
    </Card>,
    <Card cardHeaderText="Explicit form with Formik with yup validation, fields are debounced">
      <ExplicitFormWithYupValidation></ExplicitFormWithYupValidation>
    </Card>,
    <Card cardHeaderText="Less explicit form with Formik">
      <LessExplicitForm></LessExplicitForm>
    </Card>,
    <Card cardHeaderText="Less explicit form by Formik component">
      <LessLessExplicitForm></LessLessExplicitForm>
    </Card>,
    <Card cardHeaderText="Implicit form by Formik component">
      <ImplicitForm></ImplicitForm>
    </Card>
  ];

  const increment = () =>
    setIndex(prevState => (prevState + 1) % listOfFormikForms.length);

  const decrement = () =>
    setIndex(prevState => prevState > 0 ? prevState - 1 : (listOfFormikForms.length - 1));

  return (
    <>
      {listOfFormikForms[index]}
      <div className="d-flex justify-content-between mt-4">
        <button type="reset"
                className="btn btn-secondary"
                onClick={decrement}>
          Previous
        </button>
        <label>{index + 1}/{listOfFormikForms.length}</label>
        <button type="submit"
                className="btn btn-primary"
                onClick={increment}>
          Next
        </button>
      </div>
    </>
  );
};

export default CardList;