"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@heroui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    content:
      "Intelion transformed our business operations with their cloud solutions. We've seen a 40% increase in efficiency and significant cost savings.",
    author: "Sarah Johnson",
    position: "CTO, TechGrowth Inc.",
    avatar: "",
    company: "TechGrowth Inc.",
    stats: { efficiency: 40, costs: -25, growth: 35 },
  },
  {
    id: 2,
    content:
      "The cybersecurity implementation by Intelion has been exceptional. Our systems are now fortified against threats, giving us peace of mind.",
    author: "Michael Chen",
    position: "IT Director, SecureNet",
    avatar: "",
    company: "SecureNet",
    stats: { security: 95, incidents: -80, compliance: 100 },
  },
  {
    id: 3,
    content:
      "Their custom development team delivered a solution that perfectly addressed our unique challenges. The ROI has been remarkable.",
    author: "Emily Rodriguez",
    position: "CEO, InnovateX",
    avatar: "",
    company: "InnovateX",
    stats: { roi: 150, productivity: 60, satisfaction: 95 },
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20" id="testimonials">
      <div className="mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006fee] to-purple-600">
              Success Stories
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            See how our solutions have helped businesses achieve their goals and drive success.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#006fee]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/5 rounded-full blur-3xl"></div>

          <div className="relative backdrop-blur-sm border border-[#e5e5e5]/50 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-6 right-8 text-[#006fee]/20">
              <Quote size={120} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="relative ">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-2/3">
                    <p className="text-xl md:text-2xl italic mb-8">
                      &quot;{testimonials[current].content}&quot;
                    </p>

                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-[#006fee]">
                        <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                        <AvatarFallback className="bg-[#006fee]/10 text-[#006fee]">
                          {testimonials[current].author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h4 className="font-semibold">{testimonials[current].author}</h4>
                        <p className="text-sm">{testimonials[current].position}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 bg-transparent backdrop-blur-3xl rounded-xl p-6 border border-[#e5e5e5]/50">
                    <h4 className="font-semibold mb-4 text-center">Success Metrics</h4>

                    {Object.entries(testimonials[current].stats).map(([key, value]) => (
                      <div key={key} className="mb-3">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm capitalize">{key}</span>
                          <span className={`text-sm font-medium ${value > 0 ? "text-green-500" : "text-red-500"}`}>
                            {value > 0 ? `+${value}%` : `${value}%`}
                          </span>
                        </div>
                        <div className={`h-2 border-[0.5px] border-white/20 rounded-full overflow-hidden`}>
                          <motion.div initial={{ width: 0 }} animate={{ width: `${Math.abs(value)}%` }} transition={{ duration: 1, delay: 0.2 }} className={`h-full ${value > 0 ? "bg-green-500" : "bg-red-500"}`}></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => { setAutoplay(false); setCurrent(index); }} className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "bg-[#006fee] w-6" : "bg-[#006fee]/30"}`} aria-label={`Go to testimonial ${index + 1}`}    ></button>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="ghost" size="lg" onClick={handlePrev} className="rounded-full border-[0.5px] border-[#e5e5e5]/50  text-[#006fee] hover:bg-[#006fee]/10 hover:text-[#006fee]">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="lg" onClick={handleNext} className="rounded-full border-[0.5px] border-[#e5e5e5]/50  text-[#006fee] hover:bg-[#006fee]/10 hover:text-[#006fee]">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

