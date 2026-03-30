"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Globe,
  Shield,
  Zap,
  Mail,
  MapPin,
  Phone,
  Send,
  Landmark,
  Blocks,
  FileCheck,
  BrainCircuit,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const [state, handleSubmit] = useForm("xpqaavvv");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <div className="text-center p-12 border border-border rounded-sm">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-[family-name:var(--font-heading)] font-bold text-ink mb-2">
            Message Sent!
          </h2>
          <p className="mb-8 text-ink-muted">
            Thanks for reaching out. We&apos;ll get back to you shortly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-cta text-white rounded font-medium hover:bg-cta-hover transition-all cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="pt-28 pb-8 px-6">
        {/* Announcement bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 text-sm">
            <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded-sm">
              Now available
            </span>
            <span className="text-ink-muted">
              Enterprise AI Solutions for 2026.{" "}
              <a href="/projects" className="underline hover:text-ink transition-colors">
                Learn more
              </a>{" "}
              <ArrowRight className="inline w-3 h-3" />
            </span>
          </span>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)] font-bold leading-[1.1] mb-6 text-ink"
          >
            Put digital innovation
            <br />
            to work for your business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-lg text-ink-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Orchestrate intelligent solutions to run end-to-end digital workflows —
            delivering speed, security, and measurable impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/#contact"
              className="px-6 py-3 border border-ink text-ink font-medium rounded hover:bg-ink hover:text-white transition-all cursor-pointer"
            >
              Start Your Project
            </a>
            <a
              href="/#contact"
              className="px-6 py-3 bg-cta text-white font-medium rounded hover:bg-cta-hover transition-all cursor-pointer"
            >
              Get A Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero grid-pattern illustration area */}
      <section className="px-6 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-sm overflow-hidden bg-paper-warm grid-pattern-blue py-20 px-8 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
              {[
                { icon: <Zap />, title: "Fast", desc: "Optimized speed" },
                { icon: <Shield />, title: "Secure", desc: "Bank-grade logic" },
                { icon: <Code />, title: "Modern", desc: "Next.js & React" },
                { icon: <Globe />, title: "Global", desc: "CDN deployed" },
                { icon: <Landmark />, title: "Fintech", desc: "Banking heritage" },
                { icon: <Blocks />, title: "Blockchain", desc: "Web3 & Smart Contracts" },
                { icon: <FileCheck />, title: "Compliant", desc: "Regulator friendly" },
                { icon: <BrainCircuit />, title: "AI & ML", desc: "Intelligent Models" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-border p-4 rounded-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-brand mx-auto mb-2 flex justify-center">
                    {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                  </div>
                  <div className="font-semibold text-sm text-ink">{item.title}</div>
                  <div className="text-xs text-ink-muted mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ TRUST BAR ═══════════════ */}
      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-ink-muted mb-6 tracking-wide">
            Trusted by enterprise teams across Southeast Asia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
            {["FinTech Leaders", "GovTech Partners", "Web3 Innovators", "Enterprise Clients"].map(
              (name) => (
                <span key={name} className="text-ink-muted/50 font-bold text-lg tracking-tight">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════ PLATFORM SECTION ═══════════════ */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-ink-muted tracking-widest uppercase mb-4">
              The ONE EIGHT X Platform
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-ink italic leading-tight">
              The execution platform for
              <br />intelligent digital solutions
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-ink-muted max-w-2xl mx-auto leading-relaxed">
              ONE EIGHT X is the engineering partner built for modern enterprises.
              With specialized expertise in FinTech, Blockchain, and AI — we transform
              strategy into execution, reducing operational complexity and driving measurable growth.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="/projects"
                className="inline-flex items-center gap-1 px-6 py-3 border border-ink text-ink font-medium rounded hover:bg-ink hover:text-white transition-all cursor-pointer"
              >
                Explore The Platform
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* 3 Service cards — Jasper style (colored bg, illustrations) */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Web Development",
                desc: "High-performance websites built with the latest technology for maximum speed and SEO.",
                icon: <Code className="w-8 h-8" />,
                bgClass: "bg-emerald-50 grid-pattern-green",
                cta: "Learn more",
              },
              {
                title: "AI & Machine Learning",
                desc: "Proprietary models, data labeling pipelines, and intelligent automation agents.",
                icon: <BrainCircuit className="w-8 h-8" />,
                bgClass: "bg-orange-50 grid-pattern",
                cta: "Learn more",
              },
              {
                title: "Cloud & Blockchain",
                desc: "Scalable cloud architecture and Web3 solutions designed for enterprise.",
                icon: <Blocks className="w-8 h-8" />,
                bgClass: "bg-blue-50 grid-pattern-blue",
                cta: "Learn more",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="border border-border rounded-sm overflow-hidden group"
              >
                <div className={`${service.bgClass} p-8 flex items-center justify-center h-48`}>
                  <div className="text-ink/60 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-ink mb-2">{service.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">{service.desc}</p>
                  <a href="/projects" className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-brand transition-colors">
                    {service.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ WHY SECTION ═══════════════ */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="max-w-xl mb-16">
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-ink italic leading-tight mb-6">
                Why modern teams choose ONE EIGHT X
              </motion.h2>
              <motion.p variants={fadeUp} className="text-ink-muted leading-relaxed">
                Give your team the tools to move faster, stay on-brand, and scale
                digital products across every channel and market.
              </motion.p>
            </div>

            {/* Accordion-style feature list */}
            <div className="space-y-0">
              {[
                { title: "Enterprise-grade security from day one", highlight: true },
                { title: "Scale campaigns and performance" },
                { title: "Keep your brand voice consistent, everywhere" },
                { title: "Empower every developer with automation" },
                { title: "Built for scale, backed by experts" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className={`py-5 border-b border-border ${item.highlight ? "font-semibold text-ink" : "text-ink-muted"}`}
                >
                  <h3 className={`text-lg ${item.highlight ? "text-ink" : ""}`}>{item.title}</h3>
                  {item.highlight && (
                    <p className="mt-2 text-sm text-ink-muted font-normal leading-relaxed max-w-2xl">
                      With decades in banking, government, and blockchain — our architecture
                      prioritizes data protection & compliance while providing superior outputs.
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ STATS + TESTIMONIAL ═══════════════ */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-0"
          >
            {[
              { stat: "50+", label: "Projects delivered", first: true },
              { stat: "10+", label: "Years combined experience", first: false },
              { stat: "99%", label: "Client satisfaction", first: false },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className={`p-8 text-center border border-border ${!item.first ? "md:border-l-0" : ""}`}
              >
                <div className="text-4xl font-[family-name:var(--font-heading)] font-bold text-ink mb-1">
                  {item.stat}
                </div>
                <div className="text-sm text-ink-muted">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ TRUST / SECURITY ═══════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-sm overflow-hidden grid-pattern p-16 md:p-24 text-center">
            {/* Decorative border blocks — Jasper style */}
            <div className="absolute top-0 left-0 w-24 h-24 border-r border-b border-brand/20" />
            <div className="absolute top-0 right-0 w-24 h-24 border-l border-b border-brand/20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-r border-t border-brand/20" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-l border-t border-brand/20" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-sm font-semibold text-ink-muted tracking-widest uppercase mb-4">
                Trust. Foundation
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-ink italic leading-tight mb-6"
              >
                Enterprise-grade security,
                <br />
                quality outputs
              </motion.h2>
              <motion.p variants={fadeUp} className="text-ink-muted max-w-xl mx-auto mb-8 leading-relaxed">
                Enterprise-grade security and battle-tested architecture
                prioritize your data protection & privacy while providing
                superior digital outputs.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a
                  href="/about"
                  className="inline-flex items-center gap-1 px-6 py-3 border border-ink text-ink font-medium rounded hover:bg-ink hover:text-white transition-all cursor-pointer"
                >
                  Explore Trust
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-sm font-semibold text-ink-muted tracking-widest uppercase mb-4">
                Get in Touch
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-ink italic mb-6">
                Let&apos;s work together.
              </motion.h2>
              <motion.p variants={fadeUp} className="mb-10 text-lg text-ink-muted leading-relaxed">
                Ready to start your next project? Fill out the form or reach out
                to us directly.
              </motion.p>

              <div className="space-y-5">
                {[
                  { icon: <Mail />, label: "Email", value: "contact@oneeightx.com", href: "mailto:contact@oneeightx.com" },
                  { icon: <Phone />, label: "Phone", value: "+66 87-406-5389", href: "tel:+66874065389" },
                  { icon: <Phone />, label: "Phone", value: "+66 80-221-8181", href: "tel:+66802218181" },
                  { icon: <MapPin />, label: "Office", value: "Bangkok, Thailand" },
                ].map((item) => (
                  <motion.div key={`${item.label}-${item.value}`} variants={fadeUp}>
                    <ContactItem icon={item.icon} label={item.label} value={item.value} href={item.href} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-10 border border-border rounded-sm bg-white"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup id="firstName" label="First Name" placeholder="John" />
                  <InputGroup id="lastName" label="Last Name" placeholder="Doe" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-ink">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/10 text-ink bg-white placeholder-ink-muted/50"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1.5" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/10 resize-none text-ink bg-white placeholder-ink-muted/50"
                    placeholder="Tell us about your project..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1.5" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-cta text-white font-semibold rounded-sm hover:bg-cta-hover transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  {!state.submitting && <Send className="w-4 h-4" />}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── HELPER COMPONENTS ──

function ContactItem({ icon, label, value, href }: any) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 border border-border rounded-sm flex items-center justify-center text-brand group-hover:bg-brand/5 transition-colors">
        {React.cloneElement(icon, { className: "w-4 h-4" })}
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-wider text-ink-muted">{label}</div>
        <div className="font-medium text-ink group-hover:text-brand transition-colors">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function InputGroup({ id, label, placeholder }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        className="w-full px-4 py-3 border border-border rounded-sm outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/10 text-ink bg-white placeholder-ink-muted/50"
        placeholder={placeholder}
      />
    </div>
  );
}
