import Base from "./components/base.tsx";
import Card from "./components/card";
import ExplicitForm from "./components/forms/explicit-form.tsx";
import ExplicitFormWithExplicitValidation from "./components/forms/explicit-form-with-explicit-validation.tsx";
import ExplicitFormWithExplicitValidationDebounced from "./components/forms/explicit-form-with-explicit-validation-debounced.tsx";

function App() {
  return (
    <Base>
      <Card cardHeaderText="Explicit form with Formik">
        <ExplicitForm></ExplicitForm>
      </Card>
      <Card cardHeaderText="Explicit form with Formik with explicit validation">
        <ExplicitFormWithExplicitValidation></ExplicitFormWithExplicitValidation>
      </Card>
      <Card cardHeaderText="Explicit form with Formik with explicit validation. Fields are debounced">
        <ExplicitFormWithExplicitValidationDebounced></ExplicitFormWithExplicitValidationDebounced>
      </Card>
    </Base>
  );
}

export default App;
