import { useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";

const TOPICS = [
  { value: "general", label: "General enquiry" },
  { value: "project", label: "Project information" },
  { value: "sales", label: "Sales & booking" },
  { value: "handover", label: "Handover & after-sales" },
  { value: "landowner", label: "Landowner partnership" },
  { value: "career", label: "Career / recruitment" },
  { value: "other", label: "Other" },
];

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.topic) errors.topic = "Please select a contact topic.";
  if (!values.message.trim()) errors.message = "Please enter your message.";
  return errors;
};

export function ContactForm({ initialValues = {} }) {
  const [status, setStatus] = useState(null);
  const defaults = {
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    ...initialValues,
  };

  const {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  } = useFormValidation(defaults, validate, () => {
    setStatus({ type: "info", message: "Submitting..." });
    // Simulate async submission
    setTimeout(() => {
      setStatus({
        type: "info",
        message:
          "This is a frontend demonstration. Your information has not been sent to Urban American Development Company.",
      });
    }, 800);
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="name"
          label="Full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          error={errors.name}
        />
        <Input
          id="email"
          label="Email address"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          error={errors.email}
        />
        <Input
          id="phone"
          label="Phone number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
          error={errors.phone}
        />
        <Select
          id="topic"
          label="Contact topic"
          name="topic"
          value={values.topic}
          onChange={handleChange}
          required
          placeholder="Select a topic"
          options={TOPICS}
          error={errors.topic}
        />
      </div>
      <Textarea
        id="message"
        label="Message"
        name="message"
        value={values.message}
        onChange={handleChange}
        required
        error={errors.message}
      />
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        className="w-full"
      >
        {submitting ? "Sending..." : "Send Message"}
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
