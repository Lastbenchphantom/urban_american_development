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
  if (!values.project.trim()) errors.project = "Please select a project.";
  return errors;
};

export function ProjectEnquiryForm({ project }) {
  const [status, setStatus] = useState(null);
  const defaults = { name: "", email: "", phone: "", project: project || "", message: "" };

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
          "This is a frontend demonstration. Your enquiry has not been sent to Urban American Development Company.",
      });
    }, 800);
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Input
        id="project-name"
        label="Project"
        name="project"
        value={values.project}
        onChange={handleChange}
        required
        error={errors.project}
        disabled
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="enq-name"
          label="Full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          error={errors.name}
        />
        <Input
          id="enq-email"
          label="Email address"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          error={errors.email}
        />
        <Input
          id="enq-phone"
          label="Phone number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
          error={errors.phone}
        />
      </div>
      <Textarea
        id="enq-message"
        label="Your enquiry"
        name="message"
        value={values.message}
        onChange={handleChange}
        placeholder="Tell us about your requirements (unit type, budget, timeline)"
      />
      <Button type="submit" variant="primary" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Sending..." : "Send Enquiry"}
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
