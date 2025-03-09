"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  "Enterprise-grade security protocols",
  "99.9% uptime guarantee",
  "24/7 technical support",
  "Seamless integration with existing systems",
  "Customizable solutions for any industry",
  "Scalable infrastructure",
]

const FeatureSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.8 }} className="relative">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="relative rounded-xl overflow-hidden flex justify-center items-center">
              <Image src="/images/features.png" alt="Intelion Features" width={500} height={500} className="" />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#006fee]/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#7d41d1]/10 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enterprise-Grade <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006fee] via-[#7d41d1] to-[#b24cd8]">IT Solutions</span>
            </h2>
            <p className="text-lg mb-8">
              Our comprehensive suite of IT services is designed to help businesses of all sizes leverage technology for
              growth, efficiency, and competitive advantage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#006fee] flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

