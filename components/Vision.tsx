"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target } from "lucide-react";

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="vision"
      className="py-24 bg-gradient-to-br from-navy via-navy/95 to-navy/90 relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
              <Target className="w-10 h-10 text-gold" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12" />

          {/* English Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8"
          >
            To provide transparent, reliable, and professional legal and tax
            consultancy services, ensuring trust, protection, and satisfaction
            for our clients in Pakistan and abroad.
          </motion.p>

          {/* Urdu Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-urdu text-2xl md:text-3xl text-gold/90 leading-loose max-w-4xl mx-auto"
            dir="rtl"
          >
            شفاف، قابل اعتماد اور پیشہ ورانہ قانونی و ٹیکس مشاورتی خدمات فراہم
            کرنا، پاکستان اور بیرون ملک اپنے کلائنٹس کے اعتماد، تحفظ اور اطمینان
            کو یقینی بنانا۔
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-gold mx-auto rounded-full mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
