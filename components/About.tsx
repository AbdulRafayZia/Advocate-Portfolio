"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Globe, Scale } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    title: "10+ Years Experience",
    description: "Legal practice excellence",
  },
  {
    icon: Scale,
    title: "500+ Cases Handled",
    description: "Successful resolutions",
  },
  {
    icon: Globe,
    title: "Overseas Clients Served",
    description: "International expertise",
  },
  {
    icon: Award,
    title: "High Court Advocate",
    description: "Punjab Bar Council",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            About Noori Legal Advisor
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* English Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Noori Legal Advisor is a trusted legal and tax consultancy firm
            providing professional guidance and assistance in Criminal Cases,
            Civil Cases, Tax Matters, Cooperative Laws, and other legal affairs.
            We offer specialized services for Overseas Pakistanis, enabling them
            to buy or sell property in Pakistan while residing abroad. Through
            our consultancy, clients save time, reduce tax burdens, and stay
            protected from legal risks, fraud, and documentation issues.
          </p>
        </motion.div>

        {/* Urdu Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p
            className="font-urdu text-xl text-gray-700 leading-loose text-center"
            dir="rtl"
          >
            نوری لیگل ایڈوائزر ایک با اعتماد قانونی و ٹیکس کنسلٹنسی ادارہ ہے جو
            کرمنل کیسز، سول کیسز، ٹیکس معاملات، کوآپریٹو لاز اور دیگر قانونی امور
            میں جامع مشاورت اور معاونت فراہم کرتا ہے۔
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-light-gray p-6 rounded-lg text-center hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gold/30 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
