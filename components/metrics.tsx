"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

const metrics = [
  {
    value: 8,
    suffix: "+ Years",
    description: "Proven Track Record",
  },
  {
    value: 98,
    suffix: "%",
    description: "Customer Satisfaction",
  },
  {
    value: 470,
    suffix: "+",
    description: "Projects Completed",
  },
  {
    value: 3,
    suffix: " Mins",
    description: "Average Response Time",
  },
]

export default function Metrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12">
      <div className="mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col items-center text-center">
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-bold text-[#006fee]">
                  {inView ? <CountUp end={metric.value} duration={2.5} separator="," /> : "0"}
                </span>
                <span className="text-xl md:text-2xl font-medium text-[#c9cdd2]">{metric.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-[#c9cdd2]/60">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

