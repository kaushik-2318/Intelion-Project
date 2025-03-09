"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Cloud, Shield, Database, Code, BarChart, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure tailored to your business needs.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    description: "Advanced protection systems to safeguard your valuable data and assets.",
    icon: Shield,
  },
  {
    title: "Data Management",
    description: "Comprehensive data solutions for storage, analysis, and insights.",
    icon: Database,
  },
  {
    title: "Custom Development",
    description: "Bespoke software development to address your unique challenges.",
    icon: Code,
  },
  {
    title: "Business Intelligence",
    description: "Data-driven insights to make informed strategic decisions.",
    icon: BarChart,
  },
  {
    title: "Mobile Solutions",
    description: "Cross-platform mobile applications with seamless user experience.",
    icon: Smartphone,
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-20" id="services">
      <div className="mx-auto px-4">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2}}}}>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={titleVariants}>
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006fee] to-purple-600">Services</span>
          </motion.h2>
          <motion.p className="max-w-2xl mx-auto" variants={titleVariants}>
            Comprehensive IT and SaaS solutions designed to elevate your business operations and drive digital
            transformation.
          </motion.p>
        </motion.div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 }, }}>
              <Card className="h-full border border-[#e5e5e5]/50 backdrop-blur-sm hover:shadow-xl hover:shadow-[#006fee]/10 transition-all duration-500 group overflow-hidden">
                <CardHeader className="relative">
                  <motion.div className="absolute -right-6 -top-6 w-20 h-20 bg-gradient-to-br from-[#006fee]/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5], }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", }}></motion.div>
                  <motion.div className="mb-2 w-12 h-12 rounded-lg bg-gradient-to-br from-[#006fee] to-purple-600 flex items-center justify-center text-white overflow-hidden" whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <service.icon className="h-6 w-6" />
                  </motion.div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#006fee] font-medium">Learn more</span>
                    <motion.div className="w-6 h-6 rounded-full bg-[#006fee]/10 flex items-center justify-center group-hover:bg-[#006fee] transition-colors duration-300" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"className="text-[#006fee] group-hover:text-white transition-colors duration-300">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

