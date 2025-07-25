"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Honeypot protection
    const botField = (e.target as any).botField?.value;
    if (botField) {
      // Bot detected
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mqalqqqe", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert("There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <main className="bg-fixed min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className="flex w-full relative bg-[url(/tt.jpg)] bg-fixed bg-no-repeat bg-cover bg-center h-96">
          <div className="absolute  inset-0 bg-gradient-to-b from-yellow-300 to-black opacity-50"></div>
          {/* <Image
            src="/tt.jpg"
            alt="bottom pattern"
            width={1920}
            height={400}
            className="w-full h-full object-cover"
            quality={100}
            priority
          /> */}
        </div>
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to book Perez Musik for an event,
              collaborate on music, or simply want to share how his ministry has
              impacted your life, we'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  noValidate
                  className="space-y-6"
                >
                  {/* Honeypot Field (hidden from users) */}
                  <input
                    type="text"
                    name="botField"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-200"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Event Booking Inquiry</option>
                        <option value="collaboration">
                          Music Collaboration
                        </option>
                        <option value="media">Media & Press</option>
                        <option value="testimony">Share Your Testimony</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-all duration-200 resize-y"
                      placeholder="Please share your message, inquiry details, or testimony..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-yellow-300 hover:bg-yellow-500 text-black"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {/* Success Message */}
                  {showSuccess && (
                    <div className="mt-6 p-4 bg-green-100 border border-yellow-300 rounded-lg animate-pulse">
                      <div className="flex items-center">
                        <div className="text-green-600 mr-2 text-xl">✓</div>
                        <p className="text-green-800 font-medium">
                          Thank you! Your message has been sent successfully.
                          We'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}
                </form>

                {/* Success Message */}
                {showSuccess && (
                  <div className="mt-6 p-4 bg-green-100 border border-yellow-300 rounded-lg animate-pulse">
                    <div className="flex items-center">
                      <div className="text-green-600 mr-2 text-xl">✓</div>
                      <p className="text-green-800 font-medium">
                        Thank you! Your message has been sent successfully.
                        We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Takes 1 column */}
          </div>
        </main>
      </div>
    </main>
  );
}
