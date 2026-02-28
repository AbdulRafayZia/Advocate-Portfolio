"use client";

import { Scale, Facebook, MessageCircle, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-gold" />
              <span className="font-serif text-xl font-bold">
                Noori Legal Advisor
              </span>
            </div>
            <p className="text-white/70 text-sm">
              Trusted legal and tax consultancy firm providing professional
              guidance in Criminal Cases, Civil Cases, Tax Matters, and Property
              Law.
            </p>
            <p className="font-urdu text-white/70 text-sm" dir="rtl">
              قابل اعتماد قانونی و ٹیکس کنسلٹنسی ادارہ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-gold">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-gold" />
                <a
                  href="tel:03334838179"
                  className="hover:text-gold transition-colors"
                >
                  0333-4838179
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gold" />
                <span>
                  ST # 8, Main Bazar Rachna Town, Tehsil Ferozewala, District
                  Sheikhupura, Punjab
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.me/923334838179"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2026 Noori Legal Advisor. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
