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
  if (!values.topic.trim()) errors.topic = "Please select a service topic.";
  if (!values.message.trim()) errors.message = "Please describe your request.";
  return errors;
};

export function HandoverForm() {
  const [status, setStatus] = useState(null);
  const defaults = { name: "", email: "", phone: "", topic: "", property: "", message: "" };

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
          "This is a frontend demonstration. Your service request has not been sent to Urban American Development Company.",
      });
    }, 800);
  });

  const TOPICS = [
    { value: "handover-process", label: "Handover process" },
    { value: "after-sales", label: "After-sales service" },
    { value: "documents", label: "Document request" },
    { value: "complaint", label: "Complaint / issue" },
    { value: "other", label: "Other" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="hv-name"
          label="Full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          error={errors.name}
        />
        <Input
          id="hv-email"
          label="Email address"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          error={errors.email}
        />
        <Input
          id="hv-phone"
          label="Phone number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
          error={errors.phone}
        />
        <Select
          id="hv-topic"
          label="Service topic"
          name="topic"
          value={values.topic}
          onChange={handleChange}
          required
          placeholder="Select a topic"
          options={TOPICS}
          error={errors.topic}
        />
        <Input
          id="hv-property"
          label="Project / unit reference (if any)"
          name="property"
          value={values.property}
          onChange={handleChange}
        />
      </div>
      <Textarea
        id="hv-message"
        label="Your request"
        name="message"
        value={values.message}
        onChange={handleChange}
        required
        error={errors.message}
      />
      <p className="text-xs text-slate-500">
        Specific service-level agreements or handover policies are not published
        publicly. Our team will respond with verified guidance.
      </p>
      <Button type="submit" variant="primary" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Sending..." : "Send Request"}
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
