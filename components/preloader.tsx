"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, cubicBezier } from "framer-motion"

const Preloader = () => {
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)  // New state to track if component is mounted

  useEffect(() => {
    setIsMounted(true)  // Set mounted state to true after client-side rendering
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    }),
    exit: (i: number) => ({
      y: -100,
      opacity: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    }),
  }

  const letters = "INTELION".split("")

  // Render nothing on the server side to avoid hydration mismatch
  if (!isMounted) return null

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-gray-900"
        >
          <div className="relative">
            <div className="flex items-center justify-center">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-5xl md:text-7xl font-bold inline-block mx-1"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    {letter}
                  </span>
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-4 rounded-full"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-center mt-4 text-gray-400"
            >
              Innovative IT Solutions
            </motion.div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="w-64 h-64 rounded-full border-4 border-purple-500/20"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [0, -180, -360],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-blue-500/20"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader