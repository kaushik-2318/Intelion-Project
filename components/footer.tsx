"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t border-[#e5e5e5]/20 pt-16 pb-8">
      <div className="mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 bg-gradient-to-br from-[#006fee] to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#006fee] to-purple-600 rounded-lg blur opacity-50"></div>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#006fee] to-purple-600">
                Intelion
              </span>
            </Link>
            <p className="mb-6">
              Transforming businesses with cutting-edge SaaS and IT solutions that drive growth, efficiency, and
              innovation.
            </p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-[#006fee]/10 flex items-center justify-center text-[#006fee] hover:bg-[#006fee] hover:text-white transition-colors duration-300">
                  <span className="sr-only">{social}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social === "twitter" && (
                      <>
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </>
                    )}
                    {social === "linkedin" && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </>
                    )}
                    {social === "facebook" && (
                      <>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </>
                    )}
                    {social === "instagram" && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {["Cloud Solutions", "Cybersecurity", "Data Management", "Custom Development", "Business Intelligence", "Mobile Solutions"].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-[#006fee] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Blog", "Case Studies", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#006fee] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR Compliance", "Security", "Sitemap"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#006fee] transition-colors">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e5e5e5]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© {currentYear} Intelion. All rights reserved.</p>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-[#006fee]/10 flex items-center justify-center text-[#006fee] hover:bg-[#006fee] hover:text-white transition-colors duration-300" aria-label="Scroll to top">
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

