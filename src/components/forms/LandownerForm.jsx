import { useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.landType.trim()) errors.landType = "Please select land type.";
  if (!values.message.trim()) errors.message = "Please describe your land/requirement.";
  return errors;
};

export function LandownerForm() {
  const [status, setStatus] = useState(null);
  const defaults = { name: "", email: "", phone: "", landType: "", location: "", area: "", message: "" };

  const {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  } = useFormValidation(defaults, validate, () => {
    setStatus({ type: "info", message: "Submitting..." });
    setTimeout(() => {
      setStatus({
        type: "info",
        message:
          "This is a frontend demonstration. Your landowner enquiry has not been sent to Urban American Development Company.",
      });
    }, 800);
  });

  const LAND_TYPES = [
    { value: "residential", label: "Residential land" },
    { value: "commercial", label: "Commercial land" },
    { value: "mixed-use", label: "Mixed-use land" },
    { value: "other", label: "Other" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="lo-name"
          label="Full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          error={errors.name}
        />
        <Input
          id="lo-email"
          label="Email address"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          error={errors.email}
        />
        <Input
          id="lo-phone"
          label="Phone number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
          error={errors.phone}
        />
        <Select
          id="lo-land-type"
          label="Land type"
          name="landType"
          value={values.landType}
          onChange={handleChange}
          required
          placeholder="Select land type"
          options={LAND_TYPES}
          error={errors.landType}
        />
        <Input
          id="lo-location"
          label="Land location / area"
          name="location"
          value={values.location}
          onChange={handleChange}
        />
        <Input
          id="lo-area"
          label="Approximate area (katha / sft)"
          name="area"
          value={values.area}
          onChange={handleChange}
        />
      </div>
      <Textarea
        id="lo-message"
        label="About your land / requirement"
        name="message"
        value={values.message}
        onChange={handleChange}
        required
        error={errors.message}
      />
      <p className="text-xs text-slate-500">
        Specific land-sharing ratios, returns, or contractual terms are not
        promised here and will be discussed on a case-by-case basis.
      </p>
      <Button type="submit" variant="primary" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Sending..." : "Submit Enquiry"}
      </Button>
      {status && (
        <div
          className={[
            "rounded-lg p-4 text-sm",
            status.type === "success"
              ? "bg-green-50 text-green-800 border border-green-100"
              : "bg-amber-50 text-amber-800 border border-amber-100",
          ].join(" ")}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}
    </form>
  );
}
