"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Building2,
  Send,
} from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

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
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />
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
                  placeholder="University, company, organization, etc."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                />
              </div>

              {/* Enquiry type */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Enquiry Type
                </label>
                
                <select
                  name="enquiryType"
                  defaultValue=""
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>

                  <option>Research Collaboration</option>
                  <option>Academic Partnership</option>
                  <option>Industry Collaboration</option>
                  <option>Technology Development</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  required
                  placeholder="Tell us about your enquiry or idea..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:shadow-lg sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
                {!isSubmitting && <Send className="h-4 w-4" />}
                
              </button>
              {status === "success" && (
                <p
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                >
                  Thank you. Your enquiry has been submitted successfully.
                </p>
              )}

              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {errorMessage}
                </p>
              )}

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}