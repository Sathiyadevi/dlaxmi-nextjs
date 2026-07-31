"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Building2,
  Send,
} from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  organization: string;
  enquiryType: string;
  message: string;
};

type FormErrors = {
  name: string;
  email: string;
  enquiryType: string;
  message: string;
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    organization: "",
    enquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    enquiryType: false,
    message: false,
  });

  const blockedDomains = [
  "mailinator.com",
  "10minutemail.com",
  "guerrillamail.com",
  "tempmail.com",
];

const validateName = (value: string) => {
  if (!value.trim()) return "Name is required.";

  if (value.trim().length < 2)
    return "Name must contain at least 2 characters.";

  return "";
};

const validateEmail = (value: string) => {
  if (!value.trim())
    return "Email address is required.";

  const email =
    value.trim().toLowerCase();

  const emailPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailPattern.test(email))
    return "Please enter a valid email address.";

  const domain =
    email.split("@")[1];

  if (
    blockedDomains.includes(domain)
  ) {
    return "Temporary email addresses are not allowed.";
  }

  return "";
};

const validateEnquiryType = (
  value: string
) => {
  if (!value)
    return "Please select an enquiry type.";

  return "";
};

const validateMessage = (
  value: string
) => {
  if (!value.trim())
    return "Message is required.";

  if (value.trim().length < 20)
    return "Please enter at least 20 characters.";

  if (value.length > 500)
    return "Maximum 500 characters allowed.";

  return "";
};

const validateField = (
  name: keyof FormValues,
  value: string
) => {
  switch (name) {
    case "name":
      return validateName(value);

    case "email":
      return validateEmail(value);

    case "enquiryType":
      return validateEnquiryType(value);

    case "message":
      return validateMessage(value);

    default:
      return "";
  }
};

const handleChange = (
  e: ChangeEvent<
    HTMLInputElement |
    HTMLTextAreaElement |
    HTMLSelectElement
  >
) => {
  const { name, value } = e.target;

  setFormValues((prev) => ({
    ...prev,
    [name]: value,
  }));

  if (
    name === "name" ||
    name === "email" ||
    name === "enquiryType" ||
    name === "message"
  ) {
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(
        name as keyof FormValues,
        value
      ),
    }));
  }

  setErrorMessage("");
};

const handleBlur = (
  e: ChangeEvent<
    HTMLInputElement |
    HTMLTextAreaElement |
    HTMLSelectElement
  >
) => {
  const { name } = e.target;

  setTouched((prev) => ({
    ...prev,
    [name]: true,
  }));
};

const isFormValid = useMemo(() => {

  return (

    validateName(formValues.name) === "" &&

    validateEmail(formValues.email) === "" &&

    validateEnquiryType(
      formValues.enquiryType
    ) === "" &&

    validateMessage(
      formValues.message
    ) === ""

  );

}, [formValues]);



  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          enquiryType: formData.get("enquiryType"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "Unable to send enquiry.");
        setStatus("error");
        return;
      }

      setErrorMessage("");
      setStatus("success");
      form.reset();

    } catch (error) {
      console.error(error);

      setErrorMessage("Unable to connect to the server.");
      setStatus("error");

    } finally {
      setIsSubmitting(false);
    }
    
  };

  const handleReset = () => {
    const hasData = Object.values(formValues).some(
      (value) => value.trim() !== ""
    );

    if (hasData) {
      const confirmed = window.confirm(
        "Are you sure you want to clear the form?"
      );

      if (!confirmed) return;
    }

    setFormValues({
      name: "",
      email: "",
      organization: "",
      enquiryType: "",
      message: "",
    });

    setErrors({
      name: "",
      email: "",
      enquiryType: "",
      message: "",
    });

    setTouched({
      name: false,
      email: false,
      enquiryType: false,
      message: false,
    });

    setStatus("idle");
    setErrorMessage("");
  };
  return (
    <section
      id="contact-form"
      className="relative bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600 sm:text-sm">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Tell Us What You&apos;d Like to
            <span className="block bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              Explore Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Share your enquiry, research idea, technical challenge, or
            collaboration opportunity with us.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT — Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Contact Information
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              DLAXMI INFOTECH LLP
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Research and technology enquiries, academic collaboration,
              industry partnerships, and general communication.
            </p>

            <div className="mt-9 space-y-7">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5 text-violet-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    dlaxmiinfotech@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Tiruchirappalli, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Organization */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Building2 className="h-5 w-5 text-fuchsia-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Organization
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    DLAXMI INFOTECH LLP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
          >
            <form  onSubmit={handleSubmit}  className="space-y-6">

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formValues.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition
                    ${
                      touched.name
                        ? errors.name
                          ? "border-red-500 bg-red-50"
                          : "border-green-500 bg-green-50"
                        : "border-slate-200"
                    }
                    focus:border-violet-500 focus:ring-2 focus:ring-violet-200`}
                  />

                  {touched.name && errors.name && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formValues.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition
                    ${
                      touched.email
                        ? errors.email
                          ? "border-red-500 bg-red-50"
                          : "border-green-500 bg-green-50"
                        : "border-slate-200"
                    }
                    focus:border-violet-500 focus:ring-2 focus:ring-violet-200`}
                  />

                  {touched.email && errors.email && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}

                  {touched.email && !errors.email && formValues.email && (
                    <p className="mt-1 text-xs text-green-600">
                      ✓ Email looks good.
                    </p>
                  )}
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Organization
                </label>

                <input
                  type="text"
                  name="organization"
                  placeholder="University, company, organization"
                  value={formValues.organization}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                />
              </div>

              {/* Enquiry type */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Enquiry Type
                </label>
                
                <select
                  name="enquiryType"
                  value={formValues.enquiryType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition
                  ${
                    touched.enquiryType
                      ? errors.enquiryType
                        ? "border-red-500"
                        : "border-green-500"
                      : "border-slate-200"
                  }`}
                >
                  <option value="">
                    Select enquiry type
                  </option>

                  <option>
                    Research Collaboration
                  </option>

                  <option>
                    Academic Partnership
                  </option>

                  <option>
                    Industry Collaboration
                  </option>

                  <option>
                    Technology Development
                  </option>

                  <option>
                    General Enquiry
                  </option>

                </select>

                {touched.enquiryType &&
                  errors.enquiryType && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.enquiryType}
                    </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell us about your enquiry or idea..."
                  value={formValues.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  maxLength={500}
                  className={`mt-2 w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition
                  ${
                    touched.message
                      ? errors.message
                        ? "border-red-500 bg-red-50"
                        : "border-green-500 bg-green-50"
                      : "border-slate-200"
                  }
                  focus:border-violet-500 focus:ring-2 focus:ring-violet-200`}
                />

                <div className="mt-1 flex justify-between">

                {touched.message &&
                errors.message && (

                <p className="text-xs text-red-600">

                {errors.message}

                </p>

                )}

                <p
                className={`text-xs ${
                formValues.message.length >
                450
                ? "text-orange-500"
                : "text-slate-500"
                }`}
                >

                {formValues.message.length}/500

                </p>

                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:shadow-lg sm:w-auto"
              >
                {isSubmitting
                  ? "Sending..."
                  : isFormValid
                  ? "Send Enquiry"
                  : "Complete Required Fields"}
                {!isSubmitting && <Send className="h-4 w-4" />}
                
              </button>

              <button
                type="button"
                onClick={handleReset}
                disabled={isSubmitting}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
              >
                Reset
              </button>
              </div>

              
              {status === "success" && (
                  <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
                    <div className="text-5xl">✅</div>

                    <h3 className="mt-3 text-xl font-semibold text-green-800">
                      Enquiry Submitted Successfully
                    </h3>

                    <p className="mt-2 text-sm text-green-700">
                      Thank you for contacting
                      <strong> DLAXMI INFOTECH LLP</strong>.
                    </p>

                    <p className="mt-2 text-sm text-green-700">
                      We have received your enquiry successfully.
                    </p>

                    <p className="mt-2 text-sm text-green-700">
                      Our team will review your enquiry and
                      respond as soon as possible.
                    </p>
                  </div>
                )}

              {status === "error" && errorMessage && (
                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
                  <p className="text-sm font-medium text-red-700">
                    {errorMessage}
                  </p>
                </div>
              )}              

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}