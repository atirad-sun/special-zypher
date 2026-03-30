"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
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
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Home() {
  const { isDark } = useTheme();
  const [state, handleSubmit] = useForm("xpqaavvv");

  if (state.succeeded) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-300
        ${isDark ? "bg-surface-dark text-slate-100" : "bg-slate-50 text-slate-900"}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`text-center p-12 rounded-2xl border backdrop-blur-sm
          ${isDark ? "bg-surface-dark-card border-white/[0.06]" : "bg-white border-slate-200 shadow-xl"}`}
        >
          <div className="w-16 h-16 bg-emerald-500/15 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-[family-name:var(--font-heading)] font-bold mb-2">
            Message Sent!
          </h2>
          <p className={`mb-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Thanks for reaching out. We&apos;ll get back to you shortly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-brand text-white rounded-lg font-semibold hover:bg-brand-light transition-all cursor-pointer"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300
      ${isDark ? "bg-surface-dark text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden grain">
        {/* Ambient background glows */}
        <div
          className={`absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none
          ${isDark ? "bg-brand/[0.07]" : "bg-brand/[0.04]"}`}
        />
        <div
          className={`absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none
          ${isDark ? "bg-accent/[0.04]" : "bg-accent/[0.03]"}`}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <div
                className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium mb-8 border
                ${
                  isDark
                    ? "bg-brand/[0.08] text-brand-light border-brand/20"
                    : "bg-brand/[0.06] text-brand border-brand/15"
                }`}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand"></span>
                </span>
                Accepting New Projects for 2026
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)] font-bold tracking-tight leading-[1.08] mb-6"
            >
              Building digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
                experiences
              </span>{" "}
              that matter.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className={`text-lg mb-10 max-w-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              We help forward-thinking companies launch fast, scalable, and
              secure digital products using cutting-edge technology.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-brand text-white rounded-lg font-semibold hover:bg-brand-light transition-all duration-200 flex items-center gap-2.5 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 cursor-pointer"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/projects"
                className={`px-8 py-4 border rounded-lg font-semibold transition-all duration-200 flex items-center justify-center
                ${
                  isDark
                    ? "border-white/[0.1] text-slate-300 hover:bg-white/[0.04] hover:border-white/[0.15]"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div
              className={`absolute -inset-6 rounded-3xl blur-[60px] pointer-events-none
              ${isDark ? "bg-brand/[0.06]" : "bg-brand/[0.04]"}`}
            />
            <div
              className={`relative border rounded-2xl p-6 backdrop-blur-sm glow-brand
              ${isDark ? "bg-surface-dark-card/80 border-white/[0.06]" : "bg-white/80 border-slate-200/80 shadow-xl"}`}
            >
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Zap />, title: "Fast", desc: "Optimized speed", delay: 0 },
                  { icon: <Shield />, title: "Secure", desc: "Bank-grade logic", delay: 1 },
                  { icon: <Code />, title: "Modern", desc: "Next.js & React", delay: 2 },
                  { icon: <Globe />, title: "Global", desc: "CDN deployed", delay: 3 },
                  { icon: <Landmark />, title: "Fintech", desc: "Banking heritage", delay: 4 },
                  { icon: <Blocks />, title: "Blockchain", desc: "Web3 & Smart Contracts", delay: 5 },
                  { icon: <FileCheck />, title: "Compliant", desc: "Regulator friendly", delay: 6 },
                  { icon: <BrainCircuit />, title: "AI & ML", desc: "Intelligent Models", delay: 7 },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    animate="visible"
                    custom={item.delay}
                    variants={fadeUp}
                  >
                    <FeatureCard isDark={isDark} icon={item.icon} title={item.title} desc={item.desc} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className={`py-28 transition-colors relative ${isDark ? "bg-surface-dark-card" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} custom={0} className="mb-16">
              <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold mb-4">
                Our Core Services
              </h2>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl`}>
                Everything you need to go from concept to launch.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Web Development",
                  desc: "High-performance websites built with well-known latest technology for maximum speed and SEO.",
                  icon: <Code className="w-6 h-6" />,
                },
                {
                  title: "Mobile Apps",
                  desc: "Native-feel mobile applications that work seamlessly across iOS and Android.",
                  icon: <Zap className="w-6 h-6" />,
                },
                {
                  title: "Cloud Infrastructure",
                  desc: "Scalable Cloud architecture designed to handle thousands of users securely.",
                  icon: <Globe className="w-6 h-6" />,
                },
                {
                  title: "AI & Machine Learning",
                  desc: "Proprietary models, data labeling pipelines, and intelligent automation agents.",
                  icon: <BrainCircuit className="w-6 h-6" />,
                },
              ].map((service, i) => (
                <motion.div key={service.title} variants={fadeUp} custom={i + 1}>
                  <ServiceCard isDark={isDark} title={service.title} desc={service.desc} icon={service.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section
        id="contact"
        className={`py-28 transition-colors relative ${isDark ? "bg-surface-dark" : "bg-slate-50"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.p variants={fadeUp} custom={0} className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
                Get in Touch
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold mb-6">
                Let&apos;s work together.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className={`mb-10 text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                Ready to start your next project? Fill out the form or reach out
                to us directly.
              </motion.p>

              <div className="space-y-5">
                {[
                  { icon: <Mail />, label: "Email", value: "contact@oneeightx.com", href: "mailto:contact@oneeightx.com" },
                  { icon: <Phone />, label: "Phone", value: "+66 87-406-5389", href: "tel:+66874065389" },
                  { icon: <Phone />, label: "Phone", value: "+66 80-221-8181", href: "tel:+66802218181" },
                  { icon: <MapPin />, label: "Office", value: "Bangkok, Thailand" },
                ].map((item, i) => (
                  <motion.div key={`${item.label}-${item.value}`} variants={fadeUp} custom={i + 3}>
                    <ContactItem isDark={isDark} icon={item.icon} label={item.label} value={item.value} href={item.href} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`p-8 md:p-10 rounded-2xl border backdrop-blur-sm transition-colors duration-300
              ${
                isDark
                  ? "bg-surface-dark-card border-white/[0.06]"
                  : "bg-white border-slate-200 shadow-xl shadow-slate-200/40"
              }`}
            >
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup isDark={isDark} id="firstName" label="First Name" placeholder="John" />
                  <InputGroup isDark={isDark} id="lastName" label="Last Name" placeholder="Doe" />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 focus:border-brand focus:ring-2 focus:ring-brand/20
                    ${
                      isDark
                        ? "bg-surface-dark border-white/[0.08] text-white placeholder-slate-600"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1.5" />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 focus:border-brand focus:ring-2 focus:ring-brand/20 resize-none
                    ${
                      isDark
                        ? "bg-surface-dark border-white/[0.08] text-white placeholder-slate-600"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1.5" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-brand text-white font-semibold rounded-lg hover:bg-brand-light transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-50 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 cursor-pointer"
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

function FeatureCard({ icon, title, desc, isDark }: any) {
  return (
    <div
      className={`group p-4 rounded-xl border transition-all duration-200 gradient-border
      ${
        isDark
          ? "bg-surface-dark-elevated/50 border-white/[0.06] hover:bg-surface-dark-elevated"
          : "bg-slate-50/80 border-slate-100 hover:bg-white hover:shadow-md"
      }`}
    >
      <div className="text-brand mb-2.5 transition-transform duration-200 group-hover:scale-110">
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <div className={`font-semibold text-sm ${isDark ? "text-slate-200" : "text-slate-900"}`}>
        {title}
      </div>
      <div className={`text-xs mt-0.5 ${isDark ? "text-slate-500" : "text-slate-500"}`}>
        {desc}
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, icon, isDark }: any) {
  return (
    <div
      className={`group p-8 rounded-2xl border transition-all duration-300 gradient-border cursor-default
      ${
        isDark
          ? "bg-surface-dark-elevated/40 border-white/[0.06] hover:bg-surface-dark-elevated/70"
          : "bg-slate-50/50 border-slate-200 hover:bg-white hover:shadow-lg"
      }`}
    >
      <div
        className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105
        ${isDark ? "bg-brand/10 text-brand-light" : "bg-brand/10 text-brand"}`}
      >
        {icon}
      </div>
      <h3 className={`text-xl font-[family-name:var(--font-heading)] font-bold mb-3 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
        {title}
      </h3>
      <p className={`leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
        {desc}
      </p>
    </div>
  );
}

function ContactItem({ icon, label, value, href, isDark }: any) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center text-brand transition-all duration-200 group-hover:scale-105
        ${isDark ? "bg-brand/[0.08] border border-brand/15" : "bg-brand/[0.06] border border-brand/10"}`}
      >
        {React.cloneElement(icon, { className: "w-[18px] h-[18px]" })}
      </div>
      <div>
        <div className={`text-xs font-medium uppercase tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          {label}
        </div>
        <div className={`font-medium transition-colors group-hover:text-brand ${isDark ? "text-slate-200" : "text-slate-900"}`}>
          {value}
        </div>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function InputGroup({ id, label, placeholder, isDark }: any) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 focus:border-brand focus:ring-2 focus:ring-brand/20
        ${
          isDark
            ? "bg-surface-dark border-white/[0.08] text-white placeholder-slate-600"
            : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}
