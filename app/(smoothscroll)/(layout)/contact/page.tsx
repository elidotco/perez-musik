"use client";
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);

    setShowSuccess(true);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <main className="bg-fixed min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-black font-bold text-lg">♪</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Perez Musik</h1>
                <p className="text-sm text-gray-600">Get in Touch</p>
              </div>
            </div>
          </div>
        </header>

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
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 resize-y"
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
                        : "bg-yellow-400 hover:bg-yellow-500 text-black"
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
                </form>

                {/* Success Message */}
                {showSuccess && (
                  <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg animate-pulse">
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
            <div className="space-y-6">
              {/* Contact Details Card */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 mt-1 flex-shrink-0">📧</div>
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <p className="opacity-90 text-sm">
                        booking@perezmusik.com
                      </p>
                      <p className="opacity-90 text-sm">info@perezmusik.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 mt-1 flex-shrink-0">📱</div>
                    <div>
                      <p className="font-semibold text-sm">Phone</p>
                      <p className="opacity-90 text-sm">+233 XX XXX XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 mt-1 flex-shrink-0">📍</div>
                    <div>
                      <p className="font-semibold text-sm">Location</p>
                      <p className="opacity-90 text-sm">Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Follow the Ministry
                </h3>

                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-white text-xs font-bold">f</span>
                    </div>
                    <span className="text-blue-600 font-medium text-sm">
                      Facebook
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-white text-xs">📷</span>
                    </div>
                    <span className="text-pink-600 font-medium text-sm">
                      Instagram
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-white text-xs">▶</span>
                    </div>
                    <span className="text-red-600 font-medium text-sm">
                      YouTube
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-white text-xs">♪</span>
                    </div>
                    <span className="text-green-600 font-medium text-sm">
                      Spotify
                    </span>
                  </a>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Response Time</h3>
                <p className="text-gray-300 text-sm mb-4">
                  We typically respond to all inquiries within 24-48 hours.
                </p>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-xs text-gray-400">
                    For urgent booking inquiries, please call directly or
                    mention "URGENT" in your subject line.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Ministry Impact
                </h3>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-yellow-600">
                      500+
                    </div>
                    <div className="text-xs text-gray-600">Events</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-orange-600">
                      10K+
                    </div>
                    <div className="text-xs text-gray-600">Lives Touched</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Floating Elements */}
        <div className="fixed top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="fixed top-40 right-20 w-6 h-6 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="fixed bottom-20 left-20 w-5 h-5 bg-yellow-300 rounded-full opacity-20 animate-ping"></div>
      </div>
    </main>
  );
}
