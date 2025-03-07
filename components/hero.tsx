"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@heroui/button"
import { ArrowRight } from "lucide-react"
import ParticleBackground from "@/components/particle-background"


const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null)

    return (
        <section className="relative min-h-screen flex items-center pt-18 overflow-hidden lg:px-14" ref={heroRef}>
            <ParticleBackground />
            <div className="mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#006fee]/10 text-[#006fee] font-medium text-sm">
                            Transforming IT Solutions
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Innovative <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006fee] via-[#7d41d1] to-[#b24cd8]">SaaS Solutions</span> for Modern Businesses
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                            Empower your business with cutting-edge technology solutions designed to streamline operations, enhance
                            productivity, and drive growth in the digital era.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="bg-gradient-to-r from-[#006fee] via-7d41d1 to-[#b24cd8] text-white rounded-lg py-2 cursor-pointer hover:scale-[1.05] duration-200 px-6">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" className="cursor-pointer rounded-lg py-2 hover:bg-[#151e3c] hover:scale-[1.05] duration-200 border border-[#c9cdd2] px-6">
                                Book a Demo
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="relative">
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                            <Image src="/images/image1.jpg" alt="Intelion Dashboard" width={500} height={300} className="w-full h-auto" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#7d41d1]/20 rounded-full blur-3xl"></div>
                        <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#006fee]/20 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }} className="flex flex-col items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
                        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }} className="w-1.5 h-1.5 bg-[#006fee] rounded-full"></motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero

