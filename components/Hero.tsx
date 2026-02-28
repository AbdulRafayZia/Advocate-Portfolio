"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy/95 to-navy/90 overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">
            Advocate Hafiz Ahmad Raza
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Noori Legal Advisor — Trust, Protection & Legal Expertise
          </p>

          {/* Urdu Tagline */}
          <p
            className="font-urdu text-2xl md:text-3xl text-gold/90 mt-4"
            dir="rtl"
          >
            نوری لیگل ایڈوائزر — اعتماد، تحفظ اور قانونی رہنمائی
          </p>

          {/* Decorative gold line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gold mx-auto rounded-full"
          />

          {/* Credentials */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/80 text-sm md:text-base"
          >
            Advocate High Court | Punjab Bar Council | Lic. #74888
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button
              onClick={() => scrollToSection("#services")}
              className="group bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="group border-2 border-gold text-gold hover:bg-gold hover:text-navy px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
