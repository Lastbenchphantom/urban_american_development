import { useState } from "react";

/**
 * Base form state handling helper.
 * Returns validation helpers and a submit handler that prevents default,
 * validates required fields, and calls onSubmit with normalized data.
 */
export function useFormValidation(initialValues, validate, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitting(false);
      return;
    }
    setSubmitting(false);
    onSubmit(values);
  };

  return {
    values,
    errors,
    submitting,
    status,
    handleChange,
    handleSubmit,
    setStatus,
  };
}
