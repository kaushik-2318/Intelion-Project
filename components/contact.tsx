"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@heroui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


interface ChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

export default function Contact() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, timeline: prev.timeline }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      console.log("Form submitted:", formData)
      setSubmitted(true)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@intelion.com",
      link: "mailto:info@intelion.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Park, San Francisco, CA",
      link: "#",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      content: "Available 24/7",
      link: "#",
    },
  ]

  const serviceOptions = [
    { value: "digital-strategy", label: "Digital Strategy & Design" },
    { value: "app-development", label: "Application Development and Management" },
    { value: "cloud", label: "Cloud & Infrastructure" },
    { value: "saas", label: "Software-as-a-Service" },
    { value: "marketing", label: "Digital & Brand Marketing" },
    { value: "ai", label: "Generative AI & Business Intelligence" },
    { value: "other", label: "Other Services" },
  ]

  const timelineOptions = [
    { value: "immediate", label: "Immediate" },
    { value: "1-3months", label: "1-3 Months" },
    { value: "3-6months", label: "3-6 Months" },
    { value: "6+months", label: "6+ Months" },
  ]

  const budgetOptions = [
    { value: "small", label: "$5K-$10K" },
    { value: "medium", label: "$10K-$50K" },
    { value: "large", label: "$50K-$100K" },
    { value: "enterprise", label: "$100K+" },
  ]


  return (
    <section className="py-20" id="contact">
      <div className="mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006fee] to-purple-600">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Have questions or ready to start your digital transformation journey? Reach out to our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p>
              Our team is ready to assist you with any questions or inquiries you may have about our services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {contactInfo.map((item, index) => (
                <motion.a key={index} href={item.link} className="flex items-start p-4  bg-transparent backdrop-blur-sm rounded-lg border border-[#e5e5e5]/30 hover:shadow-md hover:shadow-[#006fee]/5 hover:border-[#006fee]/30 transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }}>
                  <div className="mr-4 w-10 h-10 rounded-full bg-[#006fee]/10 flex items-center justify-center text-[#006fee]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "facebook", "instagram"].map((social, index) => (
                  <motion.a key={social} href="#" className="w-10 h-10 rounded-full bg-[#006fee]/10 flex items-center justify-center text-[#006fee] hover:bg-[#006fee] hover:text-white transition-colors duration-300" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 + index * 0.1, }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <span className="sr-only">{social}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="bg-transparent backdrop-blur-sm rounded-2xl border border-[#e5e5e5]/30 p-8 relative overflow-hidden">
            <motion.div className="absolute -top-20 -right-20 w-40 h-40 bg-[#006fee]/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", }} ></motion.div>
            <motion.div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 4, }}  ></motion.div>

            {!submitted ? (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Send Us a Message</h3>
                  <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
                </div>

                <div className="mb-6 flex justify-between">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <motion.div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${i < step ? "bg-green-500 text-white" : i === step ? "bg-[#006fee] text-white" : "bg-[#006fee]/20 text-[#006fee]"}`} initial={{ scale: 0.8, opacity: 0.5 }} animate={{ scale: i === step ? 1.1 : 1, opacity: 1, }} transition={{ duration: 0.3 }}>
                        {i}
                      </motion.div>
                      <span className="text-xs">
                        {i === 1 ? "Basic Info" : i === 2 ? "Service Details" : "Message"}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input className="border-2 border-[#e5e5e5]/30 mt-1 outline-none" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                          </div>

                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input className="border-2 border-[#e5e5e5]/30 mt-1 outline-none" id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                          </div>

                          <div>
                            <Label htmlFor="company">Company Name</Label>
                            <Input className="border-2 border-[#e5e5e5]/30 mt-1 outline-none" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
                          </div>

                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input className="border-2 border-[#e5e5e5]/30 mt-1 outline-none" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} >
                        <div className="space-y-4">
                          <div className="overflow-hidden">
                            <Label htmlFor="service">Service Interested In</Label>
                            <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)} >
                              <SelectTrigger className="w-full mt-1 overflow-hidden">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent className="overflow-hidden">
                                {serviceOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>Project Timeline</Label>
                            <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                              <SelectTrigger className="w-full mt-1 overflow-hidden">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                {timelineOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>Budget Range</Label>
                            <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                              <SelectTrigger className="w-full mt-1">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="message">Your Message</Label>
                            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." rows={6} required className="bg-background/50" />
                          </div>

                          <div className="flex items-start">
                            <input type="checkbox" id="consent" className="mt-1 mr-2" required />
                            <Label htmlFor="consent" className="text-sm">
                              I agree to the processing of my personal data in accordance with the Privacy Policy.
                            </Label>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between mt-8">
                    {step > 1 ? (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button type="button" onClick={handlePrevStep} className="border-[#006fee]/50 text-[#006fee] hover:bg-[#006fee]/10">
                          Back
                        </Button>
                      </motion.div>
                    ) : (
                      <div></div>
                    )}

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button type="submit" className="bg-gradient-to-r from-[#006fee] to-purple-600 hover:from-[#006fee]/90 hover:to-purple-600/90 text-white rounded-lg">
                        {step < 3 ? "Next" : "Submit"} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6" initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ duration: 0.5, times: [0, 0.8, 1] }}>
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                <p className="max-w-md">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button onClick={() => { setSubmitted(false); setStep(1); setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "", budget: "", timeline: "" }) }} className="mt-8 bg-[#006fee]/10 text-[#006fee] hover:bg-[#006fee]/20 rounded-lg">
                    Send Another Message
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

