import { useRef, useState, lazy, Suspense, useCallback, memo } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader.jsx";

const ContactExperience = lazy(() =>
  import("../components/models/contact/ContactExperience.jsx")
);

const EMPTY_FORM = { name: "", email: "", message: "" };

const InputField = memo(({ label, id, type = "text", value, onChange, placeholder, required }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-orange-300/70 text-xs font-semibold uppercase tracking-widest">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete={type === "email" ? "email" : "off"}
      className="w-full px-4 py-3 bg-white/5 border border-orange-500/30 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-colors duration-200 text-sm"
    />
  </div>
));
InputField.displayName = "InputField";

const StatusMessage = memo(({ sent, error }) => {
  if (sent) return (
    <p role="status" className="text-orange-300 text-sm flex items-center gap-2">
      <span aria-hidden>✓</span> Sent! I'll get back to you soon.
    </p>
  );
  if (error) return (
    <p role="alert" className="text-red-400 text-sm flex items-center gap-2">
      <span aria-hidden>✕</span> Something went wrong — please try again.
    </p>
  );
  return null;
});
StatusMessage.displayName = "StatusMessage";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSent(false);
    setError(false);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(false);
    setSent(false);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm(EMPTY_FORM);
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  return (
    <section
      id="contact"
      className="flex justify-center items-center px-5 mt-10 md:px-10 md:mt-20"
    >
      <div className="w-full max-w-7xl md:px-20 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk!"
        />

        <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 mt-16">

          {/* Form */}
          <div className="xl:col-span-5">
            <div className="bg-white/3 border border-orange-500/20 rounded-2xl p-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                <InputField
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-orange-300/70 text-xs font-semibold uppercase tracking-widest"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-orange-500/30 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                <StatusMessage sent={sent} error={error} />

                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 text-sm tracking-wide"
                >
                  {loading ? "Sending…" : "Send Message →"}
                </button>
              </form>
            </div>
          </div>

          {/* 3D scene */}
          <div className="xl:col-span-7 min-h-56">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-orange-500/10 hover:cursor-grab">
              <Suspense
                fallback={
                  <div
                    className="w-full h-full animate-pulse bg-orange-500/5 rounded-2xl"
                    aria-hidden
                  />
                }
              >
                <ContactExperience />
              </Suspense>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;