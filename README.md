# Formik Training
Repo was made for training purposes. React application contains several simple forms, each has a slightly
different implementation. Some are more explicit that other, some have some extra feature build in to cover some useful
use case. Including some notes that may not be related to Formik itself, but are found during implementation.

## Installation
```shell
git clone https://github.com/ronwum/react-formik.git
cd react-formik
npm install
npm run dev
```


## Explicit form
Simple form, most explicit, using `useFormik` hook. There is no validation, just submitting and reseting functionality.

**Notes:**
- There is custom implementation of submitting and reseting form. Implementation needs to call default `handleSubmit` 
and `handleReset` so Formik can react on submission and reset.
- By default, when submitting form every form field is marked as Touched.
```react
<ExplicitForm></ExplicitForm>
```

## Explicit form with explicit validation
Simple form, explicit, using `useFormik` hook. Adding validation by `valiate` field.

**Note:**
- Adding validation, it's simple but implementation is quite long. See `validate` and notice usage of `FormikValues` 
and `FormikErrors<IFormProps>`. `IFormProps` is needed because of TypeScript.
- Example is overriding default behavior of marking fields as Touched after submission. See `customHandleSubmit`.
```react
<ExplicitFormWithExplicitValidation></ExplicitFormWithExplicitValidation>
```

## Explicit form with explicit validation debounced
Simple form, explicit, validated, using `useFormik` hook. Fields are debounced with `lodash`.

**Note:**
- To achieve debounce effect there is a need to use debounce `validateForm` method. 
- TODO: understand better usage of useMemo, useEffect, debounce and deps in following context:
```react
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
```
```react
<ExplicitFormWithExplicitValidationDebounced></ExplicitFormWithExplicitValidationDebounced>
```

## Explicit form with yup validation
Simple form, explicit, validated with `yup`, using `useFormik` hook. Fields are debounced with `lodash`.

**Note:**
- Validation is done by `yup` see `validationSchema`. Is much shorter and it's easier to read.
- Notice that validation is not done by `validate` field, but by `validationSchema`.
```react
<ExplicitFormWithYupValidation></ExplicitFormWithYupValidation>
```