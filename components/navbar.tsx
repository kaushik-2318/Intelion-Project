"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@heroui/button"

const navItems = [
    { name: "Home", href: "/" },

    {
        name: "Services",
        href: "#services",
    },
    {
        name: "Industries",
        href: "#industries",
    },
    {
        name: "Company",
        href: "#companys",
    },
    {
        name: "Brands",
        href: "#brands",
    }
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header className={`fixed top-0 z-50 transition-all duration-300 left-1/2 -translate-x-1/2 lg:px-14 ${isScrolled ? "backdrop-blur-md py-2 shadow-md mt-5 rounded-3xl w-[95%]" : "bg-transparent py-4 w-full"}`}>
                <div className="mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <motion.div className="relative w-10 h-10 bg-gradient-to-br from-[#006fee] to-purple-600 rounded-lg flex items-center justify-center" whileHover={{ scale: 1.1, rotate: 180, transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }}>
                            <span className="text-white font-bold text-xl">I</span>
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#006fee] to-purple-600 rounded-lg blur opacity-50 -z-10"></div>
                        </motion.div>
                        <motion.span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#006fee] to-purple-600" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                            Intelion
                        </motion.span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <div key={item.name}>
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
                                    <Link href={item.href} className="hover:text-[#006fee] transition-colors relative group flex items-center space-x-1" >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#006fee] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: navItems.length * 0.05 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a href="#contact">
                                <Button onClick={() => setMobileMenuOpen(false)} className="bg-gradient-to-r from-[#006fee] to-purple-600 hover:from-[#006fee] hover:to-purple-600/90 text-white rounded-lg px-6">
                                    Contact Us
                                </Button>
                            </a>
                        </motion.div>
                    </nav>

                    <div className="md:hidden flex items-center gap-4">
                        <Button variant="solid" size="md" onClick={() => setMobileMenuOpen(true)}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 backdrop-blur-xl z-50 md:hidden">
                        <div className="flex flex-col h-full">
                            <div className="flex justify-end p-4">
                                <Button variant="solid" size="md" onClick={() => setMobileMenuOpen(false)}>
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>
                            <nav className="flex flex-col items-center justify-center gap-8 flex-1">
                                {navItems.map((item, index) => (
                                    <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                                        <Link href={item.href} className="text-xl font-medium hover:text-[#006fee] transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: navItems.length * 0.1 }}>
                                    <a href="#contact">
                                        <Button onClick={() => setMobileMenuOpen(false)} className="mt-4 bg-gradient-to-r from-[#006fee] to-purple-600 hover:from-[#006fee]/90 hover:to-purple-600/90 text-white rounded-lg">
                                            Contact US
                                        </Button>
                                    </a>
                                </motion.div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

