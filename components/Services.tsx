"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Calculator, Users, Home, FileText, Globe } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Criminal & Civil Case Consultancy",
    description:
      "Expert legal representation and advisory for criminal and civil litigation matters.",
  },
  {
    icon: Calculator,
    title: "Tax Advisory & Tax Saving Guidance",
    description:
      "Professional tax planning, filing assistance, and strategies to legally minimize tax burden.",
  },
  {
    icon: Users,
    title: "Cooperative Laws Consultancy",
    description:
      "Guidance on cooperative society formation, disputes, and regulatory compliance.",
  },
  {
    icon: Home,
    title: "Property Buy & Sale Legal Support",
    description:
      "Complete legal assistance for property transactions including verification, documentation, and registry.",
  },
  {
    icon: FileText,
    title: "Online Registry & Transfer Assistance",
    description:
      "Hassle-free online property registry and ownership transfer services.",
  },
  {
    icon: Globe,
    title: "Overseas Pakistanis Property Consultancy",
    description:
      "Dedicated support for overseas Pakistanis to safely buy, sell, and manage property in Pakistan remotely.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all border-2 border-transparent hover:border-gold/50 hover:-translate-y-2 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
