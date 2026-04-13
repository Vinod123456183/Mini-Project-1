import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make sure all required fields are filled out
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    // Prepare the request options for fetch
    const response = await fetch("https://formspree.io/f/xrbelngo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send data as JSON
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("There was an error sending your message.");
    }

    // Clear the form data after submission
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="p-2 pt-6 lg:pt-12 md:p-5 bg-card lg:p-4 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="lg:px-2 flex flex-col grid gap-10 lg:gap-16">
            {/* Name Field */}
            <div className="border-b-2 border-[#303033] font-semibold bg-transparent">
              <input
                className="pb-4 lg:pb-7 outline-none text-lg bg-transparent rounded-lg w-full"
                type="text"
                id="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Company Name Field */}
            <div className="border-b-2 border-[#303033] font-semibold bg-transparent">
              <input
                className="pb-4 lg:pb-7 outline-none text-lg bg-transparent rounded-lg w-full"
                type="text"
                id="company"
                placeholder="Company Name*"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            {/* Email Address Field */}
            <div className="border-b-2 border-[#303033] font-semibold bg-transparent">
              <input
                className="pb-4 lg:pb-7 rounded-lg outline-none text-lg bg-transparent w-full"
                type="email"
                id="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="border-b-2 border-[#303033] font-semibold bg-transparent">
              <input
                className="pb-4 lg:pb-7 outline-none text-lg rounded-lg bg-transparent  w-full "
                type="tel"
                id="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message Field */}
            <div className="font-semibold border-b-2 border-[#303033] col-span-1 text-lg md:col-span-2">
              <textarea
                className="pb-4 lg:pb-7 outline-none bg-transparent  rounded-lg w-full"
                id="message"
                placeholder="A Few Words *"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-5 pb-28 font-semibold">
            <button
              className="w-full p-3 lg:px-4 lg:py-4 border border-[#303033] bg-primary text-primary-foreground hover:bg-primary/80 mt-4 rounded-lg hover:bg-[#c4c4c4] hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:rounded-2xl"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
