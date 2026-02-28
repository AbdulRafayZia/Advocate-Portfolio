"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2016",
    title: "Enrolled as Advocate, Lower Courts (Lic. #74888)",
    description:
      "Began legal practice handling civil and criminal cases at district courts.",
  },
  {
    year: "2020",
    title: "Enrolled as Advocate, High Court (H.C.R# 77086)",
    description:
      "Elevated to practice at the Lahore High Court, Punjab Bar Council.",
  },
  {
    year: "Ongoing",
    title: "Founded Noori Legal Advisor",
    description:
      "Established a full-service legal and tax consultancy firm serving clients across Pakistan and overseas.",
  },
  {
    year: "Ongoing",
    title: "Overseas Pakistani Services Launched",
    description:
      "Expanded services to assist overseas Pakistanis with property transactions, legal documentation, and remote consultancy.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Credentials & Experience
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30" />

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-1/2"
                }`}
              >
                <div className="flex items-start gap-4 md:gap-8">
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 bg-light-gray p-6 rounded-lg shadow-md border-l-4 border-gold hover:shadow-xl transition-shadow ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <span className="inline-block bg-gold text-navy px-3 py-1 rounded-full text-sm font-bold mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credentials Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-navy to-navy/90 p-8 rounded-lg text-center"
        >
          <h3 className="font-serif text-2xl font-bold text-white mb-4">
            Official Credentials
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex flex-col">
              <span className="text-gold font-bold">Punjab Bar Council</span>
              <span className="text-sm">Advocate High Court</span>
            </div>
            <div className="border-l border-gold/30" />
            <div className="flex flex-col">
              <span className="text-gold font-bold">License No: 74888</span>
              <span className="text-sm">Bar Enrollment</span>
            </div>
            <div className="border-l border-gold/30" />
            <div className="flex flex-col">
              <span className="text-gold font-bold">B.F.# 91969</span>
              <span className="text-sm">Bar Form</span>
            </div>
            <div className="border-l border-gold/30" />
            <div className="flex flex-col">
              <span className="text-gold font-bold">H.C.R# 77086</span>
              <span className="text-sm">High Court Roll</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
