import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, User, Mail, MessageSquare } from "lucide-react";
import Button from "./Button";

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitStatus("success");
    reset();
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-3">
          Get In Touch
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Have a question or feedback? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="glass-strong rounded-2xl p-6 sm:p-8 gradient-border">
        {submitStatus === "success" && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6 animate-fadeIn">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-sm font-medium text-emerald-300">
              Message sent successfully! We&apos;ll get back to you soon.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <User className="w-4 h-4 text-indigo-400" />
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-xl glass text-sm text-slate-200 placeholder-slate-500 outline-none transition-all duration-300 focus:ring-2 ${
                errors.name
                  ? "ring-2 ring-red-500/40 focus:ring-red-500/40"
                  : "focus:ring-indigo-500/40"
              }`}
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Name must be at least 2 characters" },
              })}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400 font-medium animate-fadeIn">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <Mail className="w-4 h-4 text-indigo-400" />
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className={`w-full px-4 py-3 rounded-xl glass text-sm text-slate-200 placeholder-slate-500 outline-none transition-all duration-300 focus:ring-2 ${
                errors.email
                  ? "ring-2 ring-red-500/40 focus:ring-red-500/40"
                  : "focus:ring-indigo-500/40"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400 font-medium animate-fadeIn">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us what you think..."
              className={`w-full px-4 py-3 rounded-xl glass text-sm text-slate-200 placeholder-slate-500 outline-none transition-all duration-300 resize-none focus:ring-2 ${
                errors.message
                  ? "ring-2 ring-red-500/40 focus:ring-red-500/40"
                  : "focus:ring-indigo-500/40"
              }`}
              {...register("message", {
                required: "Message is required",
                minLength: { value: 10, message: "Message must be at least 10 characters" },
              })}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-400 font-medium animate-fadeIn">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
