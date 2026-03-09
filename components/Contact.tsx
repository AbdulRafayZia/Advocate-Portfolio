"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-navy mb-6">
              Contact Information
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-1">Phone</h4>
                <a
                  href="tel:03334838179"
                  className="text-gray-600 hover:text-gold transition-colors"
                >
                  0333-4838179
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-1">Office Address</h4>
                <p className="text-gray-600">
                  ST # 8, Main Bazar Rachna Town
                  <br />
                  Tehsil Ferozewala, District Sheikhupura
                  <br />
                  Punjab, Pakistan
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md border-2 border-gold/30">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-navy mb-2">WhatsApp</h4>
                <a
                  href="https://wa.me/923334838179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message us on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="font-serif text-2xl font-bold text-navy mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy/90 text-white py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-600 font-medium"
                >
                  Thank you! We will contact you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Free Consultancy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-gold to-gold/90 p-8 rounded-lg text-center shadow-xl"
        >
          <h3 className="font-serif text-3xl font-bold text-navy mb-6">
            Free Consultancy Available
          </h3>
          <p className="font-urdu text-2xl text-navy/80" dir="rtl">
            مفت کنسلٹنسی دستیاب ہے
          </p>
        </motion.div>
      </div>
    </section>
  );
}
