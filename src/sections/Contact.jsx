import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "", "sending", "success", "error"
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("Sending your message...");

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage("An error occurred.");
    }

    setTimeout(() => {
      setStatus("");
      setStatusMessage("");
    }, 5000);
  };

  const isSubmitting = status === "sending";
  const isSuccess = status === "success";

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white gap-10"
    >
      <SectionTitle text="Contact Me" />

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-zinc-900 p-8 rounded-2xl shadow-xl flex flex-col gap-6 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {["name", "phone", "email", "subject"].map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={
              field === "name"
                ? "Your Name"
                : field.charAt(0).toUpperCase() + field.slice(1)
            }
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white disabled:opacity-60"
            required={field !== "phone"}
            disabled={isSubmitting || isSuccess}
          />
        ))}

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-white disabled:opacity-60"
          required
          disabled={isSubmitting || isSuccess}
        ></textarea>

        <motion.button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition
            ${
              isSubmitting
                ? "bg-zinc-700 cursor-not-allowed animate-pulse"
                : "bg-white text-black hover:scale-105"
            }
          `}
        >
          <AnimatePresence initial={false}>
            {isSubmitting && (
              <motion.span
                key="loading"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                <AiOutlineLoading3Quarters className="text-lg" />
              </motion.span>
            )}

            {isSuccess && !isSubmitting && (
              <motion.span
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <BsCheckLg className="text-lg" />
              </motion.span>
            )}
          </AnimatePresence>
          {isSubmitting ? "Sending..." : isSuccess ? "Sent" : "Send Message"}
        </motion.button>

        {statusMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center text-sm mt-2 p-2 rounded ${
              isSuccess ? "bg-white text-black" : "bg-zinc-700 text-white"
            }`}
          >
            {statusMessage}
          </motion.div>
        )}
      </motion.form>
    </section>
  );
}
