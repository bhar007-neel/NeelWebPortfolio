import { useState } from "react";
import { FiMail, FiSend, FiX } from "react-icons/fi";

const RECIPIENT_EMAIL = "neelmanibhardwaj003@gmail.com";

const ContactForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio message from ${formData.name}`,
            _replyto: formData.email,
            _template: "table",
            _captcha: "false",
            _honey: formData.company,
          }),
        }
      );
      const result = await response.json();

      if (
        result.success === "false" &&
        result.message?.toLowerCase().includes("activation")
      ) {
        setStatus(
          `Activation required. Check ${RECIPIENT_EMAIL} and click "Activate Form", then try again.`
        );
        return;
      }

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Message could not be sent.");
      }

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", company: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus(
        `Message failed to send. Please email ${RECIPIENT_EMAIL} directly.`
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d12] p-6 text-white shadow-2xl shadow-violet-950/30 sm:p-8">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-600/15 blur-3xl" />
        <button
          type="button"
          onClick={closeForm}
          aria-label="Close contact form"
          className="absolute right-4 top-4 z-10 rounded-xl border border-white/10 bg-white/[0.04] p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
          <FiX />
        </button>

        <div className="relative mb-7">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
            <FiMail size={20} />
          </div>
          <h2 id="contact-title" className="text-2xl font-bold tracking-tight">
            Let’s work together.
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-400">
            Tell me about your project or opportunity and I’ll get back to you.
          </p>
        </div>

        <form onSubmit={sendEmail} className="relative space-y-4">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-gray-300">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-gray-600 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
              />
            </label>
            <label className="text-sm font-medium text-gray-300">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-gray-600 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-gray-300">
            Message
            <textarea
              name="message"
              placeholder="Tell me a little about what you have in mind..."
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 h-32 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-gray-600 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
            />
          </label>
          <button
            type="submit"
            disabled={isSending}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FiSend />
            {isSending ? "Sending..." : "Send message"}
          </button>
        </form>
        {status && (
          <p
            className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-gray-300"
            role="status"
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;