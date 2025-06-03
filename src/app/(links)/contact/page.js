"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div
      id="contact"
      className="min-h-screen w-full mt-30 relative overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6 py-16 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <h1 className="text-3xl md:text-5xl cursor-default font-normal   pb-5 text-center leading-14 bg-gradient-to-r from-[#ffffffb5] via-[#ffffff] to-[#ffffffb5] bg-clip-text text-transparent">
            We are here to help
          </h1>

          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. John Smith"
                className="w-full px-4 py-3 outline-none bg-[#171717] rounded-lg text-white placeholder-gray-500 "
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. example@gmail.com"
                className="w-full px-4 py-3 bg-[#171717] rounded-lg text-white placeholder-gray-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Let us know how we can help"
                rows={4}
                className="w-full px-4 py-3 bg-[#171717] rounded-lg text-white placeholder-gray-500 outline-none resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-white text-black font-normal px-6 py-2 cursor-pointer rounded-3xl  "
            >
              Send message
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-full max-w-sm ml-16">
          <div className="h-100 relative flex flex-col justify-between backdrop-blur-sm border border-gray-900 rounded-2xl p-8 shadow-2xl overflow-hidden">
            <span className="absolute top-0 left-0 z-1000 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent "></span>
            <span className="absolute top-0 left-0 z-100 blur-2xl w-full h-[20px] bg-gradient-to-r from-transparent via-blue-500 to-transparent "></span>

            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-sm">PJ</span>
                </div>
                <span className="text-white font-semibold text-lg">
                  Pratik Jha
                </span>
              </div>
            </div>

            <blockquote className="">
              <p className="text-gray-300 leading-relaxed">
                Arctic cut project delays by 30% and transformed our global team
                communication, saving us hours every week.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
