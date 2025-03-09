"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, Sparkles } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@heroui/button"

const pricingPlans = {
  monthly: [
    {
      name: "Starter",
      price: 49,
      description: "Perfect for small businesses and startups",
      features: [
        "Cloud storage (10GB)",
        "Basic security features",
        "Email support",
        "1 user license",
        "Basic analytics",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: 99,
      description: "Ideal for growing businesses",
      features: [
        "Cloud storage (50GB)",
        "Advanced security features",
        "Priority email & chat support",
        "5 user licenses",
        "Advanced analytics",
        "API access",
        "Custom integrations",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: 249,
      description: "For large organizations with complex needs",
      features: [
        "Cloud storage (Unlimited)",
        "Enterprise-grade security",
        "24/7 dedicated support",
        "Unlimited user licenses",
        "Advanced analytics & reporting",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Custom development",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ],
  annual: [
    {
      name: "Starter",
      price: 39,
      description: "Perfect for small businesses and startups",
      features: [
        "Cloud storage (10GB)",
        "Basic security features",
        "Email support",
        "1 user license",
        "Basic analytics",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: 79,
      description: "Ideal for growing businesses",
      features: [
        "Cloud storage (50GB)",
        "Advanced security features",
        "Priority email & chat support",
        "5 user licenses",
        "Advanced analytics",
        "API access",
        "Custom integrations",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: 199,
      description: "For large organizations with complex needs",
      features: [
        "Cloud storage (Unlimited)",
        "Enterprise-grade security",
        "24/7 dedicated support",
        "Unlimited user licenses",
        "Advanced analytics & reporting",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Custom development",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ],
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
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
    hidden: { y: 20, opacity: 0 },
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

  return (
    <section id="pricing">
      <div className="mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006fee] to-purple-600">
              Pricing Plans
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Choose the perfect plan that fits your business needs and budget.
          </p>

          <motion.div className="flex items-center justify-center mt-8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Label htmlFor="billing-toggle" className={`mr-2 ${billingCycle === "monthly" ? "text-white" : "text-white/50"}`}>
              Monthly
            </Label>
            <Switch id="billing-toggle" checked={billingCycle === "annual"} onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")} className="data-[state=checked]:bg-[#006fee] cursor-pointer"/>
            <Label htmlFor="billing-toggle" className={`ml-2 ${billingCycle === "annual" ? "text-white" : "text-white/50"}`}>
              Annual <span className="text-green-500 text-xs font-medium ml-1">Save 20%</span>
            </Label>
          </motion.div>
        </motion.div>


        <motion.div ref={ref} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans[billingCycle].map((plan, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 }, }}>
              <div className={`h-full rounded-2xl border ${plan.popular ? "border-[#006fee] shadow-lg shadow-[#006fee]/10" : "border-[#e5e5e5]/50"} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#006fee]/10 relative`} >
                {plan.popular && (
                  <>
                    <div className="bg-gradient-to-r from-[#006fee] to-purple-600 text-white text-center py-1 text-sm font-medium">
                      <div className="flex items-center justify-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        <span>Most Popular</span>
                        <Sparkles className="h-3 w-3" />
                      </div>
                    </div>
                    <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-[#006fee] to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20" animate={{ opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}></motion.div>
                  </>
                )}

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <motion.span className="text-4xl font-bold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}>
                      ${plan.price}
                    </motion.span>
                    <span className="ml-2">/ month</span>
                    {billingCycle === "annual" && (<div className="text-green-500 text-sm mt-1">Billed annually (${plan.price * 12}/year)</div>)}
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Button className={`w-full mb-8 rounded-lg cursor-pointer ${plan.popular ? "bg-gradient-to-r from-[#006fee] to-purple-600 hover:from-[#006fee]/90 hover:to-purple-600/90 text-white" : "bg-[#006fee]/10 text-[#006fee] hover:bg-[#006fee]/20"}`}>
                      {plan.cta}
                    </Button>
                  </motion.div>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.div key={i} className="flex items-start" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}>
                        <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-500" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          <p className="mb-4">Need a custom solution?</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Button className="border-2 border-[#006fee] text-[#006fee] hover:bg-[#006fee]/10 hover:text-white cursor-pointer rounded-lg duration-200">
              Contact Our Sales Team
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

