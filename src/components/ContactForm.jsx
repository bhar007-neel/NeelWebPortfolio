import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your service ID
        "YOUR_TEMPLATE_ID", // replace with your template ID
        formData,
        "YOUR_PUBLIC_KEY" // replace with your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg h-28"
          />
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-lg font-bold"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-3 text-sm text-center">{status}</p>}
        <button
          onClick={closeForm}
          className="mt-4 w-full bg-gray-300 hover:bg-gray-400 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
