import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_9r313bk",      // ✅ Service ID
        "template_qo8tayh",     // ✅ Template ID
        formRef.current,
        "OJiDJDFyhXaBSf5mw"     // ✅ Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white rounded-2xl p-8 shadow-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* NAME */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"   // matches {{name}}
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Email</label>
          <input
            type="email"
            name="reply_to"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* MESSAGE */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Message</label>
          <textarea
            name="message"   // matches {{message}}
            rows={5}
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* TIME (for {{time}} in template) */}
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString()}
        />

        <button
          type="submit"
          className="
            w-full py-3 rounded-lg
            bg-indigo-600 text-white font-semibold
            transition-all duration-300
            hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg
            active:scale-95
          "
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
