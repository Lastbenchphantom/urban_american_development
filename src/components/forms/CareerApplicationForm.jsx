import { useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.position.trim()) errors.position = "Position applied for is required.";
  if (!values.experience.trim()) errors.experience = "Experience is required.";
  if (!values.message.trim()) errors.message = "Cover letter is required.";
  return errors;
};

export function CareerApplicationForm({ job }) {
  const [status, setStatus] = useState(null);
  const [fileName, setFileName] = useState(null);
  const defaults = {
    name: "",
    email: "",
    phone: "",
    position: job || "",
    experience: "",
    message: "",
  };

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
          "This is a frontend demonstration. Your application has not been transmitted to Urban American Development Company. No file was uploaded or stored.",
      });
    }, 800);
  });

  const handleFileChange = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Input
        id="career-position"
        label="Position applied for"
        name="position"
        value={values.position}
        onChange={handleChange}
        required
        error={errors.position}
        disabled
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="ca-name"
          label="Full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          error={errors.name}
        />
        <Input
          id="ca-email"
          label="Email address"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          error={errors.email}
        />
        <Input
          id="ca-phone"
          label="Phone number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
          error={errors.phone}
        />
        <Input
          id="ca-experience"
          label="Years of experience"
          name="experience"
          value={values.experience}
          onChange={handleChange}
          required
          error={errors.experience}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="ca-resume" className="block text-sm font-medium text-slate-700 mb-1.5">
          Resume / CV <span className="text-rose-500">*</span>
        </label>
        <input
          id="ca-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-slate-300 file:text-sm file:font-medium file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
        />
        {fileName && (
          <p className="mt-2 text-xs text-slate-500">
            Selected: {fileName}
          </p>
        )}
        <p className="mt-2 text-xs text-slate-500">
          File selection is UI only in this demo. No file is uploaded or stored.
        </p>
      </div>
      <Textarea
        id="ca-message"
        label="Cover letter"
        name="message"
        value={values.message}
        onChange={handleChange}
        required
        error={errors.message}
      />
      <p className="text-xs text-slate-500">
        The previous recruitment notice (deadline August 30, 2018) is expired.
        This is a general interest form only; no current vacancy is confirmed.
      </p>
      <Button type="submit" variant="primary" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Sending..." : "Submit Application"}
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
