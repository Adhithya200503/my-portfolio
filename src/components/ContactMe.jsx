import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const WEB3FORM_ID = "5d8226a4-5838-48b6-90cf-b3edd851850b"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      access_key: WEB3FORM_ID,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <h1 className="mb-10 font-extrabold text-2xl text-amber-950 underline decoration-2 decoration-amber-400">
          Contact Me
        </h1>
        <div className="flex justify-center gap-4 flex-wrap">
          <form
            onSubmit={handleSubmit}
            className="w-[350px] sm:w-[600px] md:w-[700px] fieldset border-base-300 shadow-md bg-amber-100 mb-20 rounded-box border p-4"
          >
            <legend className="fieldset-legend text-amber-950">Via Gmail</legend>

            <label className="label text-amber-950">Name</label>
            <input
              type="text"
              name="name"
              className="input bg-amber-200 text-amber-950"
              placeholder="eg. Adhi"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="label text-amber-950">Phone</label>
            <input
              type="tel"
              name="phone"
              className="input bg-amber-200 text-amber-950"
              placeholder="eg. 1234567890"
              value={formData.phone}
              onChange={handleChange}
            />
            <p className="text-amber-950">(optional)</p>

            <label className="label text-amber-950">Gmail id</label>
            <input
              type="email"
              name="email"
              className="input bg-amber-200 text-amber-950"
              placeholder="eg. adhi@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="label text-amber-950">Message</label>
            <textarea
              name="message"
              className="textarea w-[300px] sm:w-[500px] md:w-[600px] bg-amber-200 text-amber-950"
              placeholder="write a message ..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="btn bg-amber-500 text-amber-950 mt-4 flex items-center gap-2"
            >
              Submit <FaArrowRight />
            </button>

            {status && <p className="mt-2 text-amber-900">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
