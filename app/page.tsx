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
  Rocket,
  Moon,
  Sun,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  // Default is true (Dark Mode)
  const { isDark, toggleTheme } = useTheme();

  // 1. Setup Formspree
  const [state, handleSubmit] = useForm("xpqaavvv");

  // 2. Success State: What to show after they send a message
  if (state.succeeded) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-300
        ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}
      >
        <div
          className={`text-center p-10 rounded-2xl shadow-xl border 
          ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
        >
          <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Message Sent!</h2>
          <p className={`mb-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Thanks for reaching out. We'll get back to you shortly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-brand text-white rounded-full font-semibold hover:bg-teal-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // --- MAIN LAYOUT ---
  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-brand selection:text-white 
      ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Glow for Dark Mode */}
        {isDark && (
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
        )}

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 border 
              ${isDark ? "bg-teal-900/30 text-teal-300 border-teal-800" : "bg-teal-50 text-brand border-teal-100"}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Accepting New Projects for 2026
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Building digital <br />
              <span className="text-brand">experiences</span> that matter.
            </h1>

            <p
              className={`text-lg mb-8 max-w-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              We help forward-thinking companies launch fast, scalable, and
              secure digital products using cutting-edge technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-brand text-white rounded-full font-semibold hover:bg-teal-700 transition-all flex items-center gap-2 shadow-lg shadow-brand/25">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/projects"
                className={`px-8 py-4 border rounded-full font-semibold transition-all flex items-center justify-center
  ${
    isDark
      ? "border-slate-700 text-slate-300 hover:bg-slate-800"
      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
  }`}
              >
                View Our Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div
              className={`absolute -inset-4 rounded-full blur-3xl opacity-30 ${isDark ? "bg-brand/20" : "bg-brand/10"}`}
            ></div>
            <div
              className={`relative border rounded-2xl shadow-2xl p-8 aspect-square flex flex-col justify-center backdrop-blur-sm
              ${isDark ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200"}`}
            >
              <div className="grid grid-cols-2 gap-4">
                <FeatureCard
                  isDark={isDark}
                  icon={<Zap />}
                  title="Fast"
                  desc="Optimized speed"
                />
                <FeatureCard
                  isDark={isDark}
                  icon={<Shield />}
                  title="Secure"
                  desc="Bank-grade logic"
                />
                <FeatureCard
                  isDark={isDark}
                  icon={<Code />}
                  title="Modern"
                  desc="Next.js & React"
                />
                <FeatureCard
                  isDark={isDark}
                  icon={<Globe />}
                  title="Global"
                  desc="CDN deployed"
                />

                {/* Specialized Expertise */}
                <FeatureCard
                  isDark={isDark}
                  icon={<Landmark />}
                  title="Fintech"
                  desc="Banking heritage"
                />
                <FeatureCard
                  isDark={isDark}
                  icon={<Blocks />}
                  title="Blockchain"
                  desc="Web3 & Smart Contracts"
                />
                <FeatureCard
                  isDark={isDark}
                  icon={<FileCheck />}
                  title="Compliant"
                  desc="Regulator friendly"
                />
                <FeatureCard
                  isDark={isDark}
                  icon={<Rocket />}
                  title="Scalable"
                  desc="MVP to Enterprise"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className={`py-24 transition-colors ${isDark ? "bg-slate-900" : "bg-slate-100"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p
              className={`${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl`}
            >
              Everything you need to go from concept to launch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              isDark={isDark}
              title="Web Development"
              desc="High-performance websites built with well-known latest technology for maximum speed and SEO."
            />
            <ServiceCard
              isDark={isDark}
              title="Mobile Apps"
              desc="Native-feel mobile applications that work seamlessly across iOS and Android."
            />
            <ServiceCard
              isDark={isDark}
              title="Cloud Infrastructure"
              desc="Scalable Cloud architecture designed to handle thousands of users securely."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`py-24 transition-colors ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's work together.
              </h2>
              <p
                className={`mb-8 text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                Ready to start your next project? Fill out the form or reach out
                to us directly.
              </p>

              <div className="space-y-6">
                <ContactItem
                  isDark={isDark}
                  icon={<Mail />}
                  label="Email"
                  value="contact@oneeightx.com"
                  href="mailto:contact@oneeightx.com"
                />
                <ContactItem
                  isDark={isDark}
                  icon={<Phone />}
                  label="Phone"
                  value="+66 87-406-5389"
                  href="tel:+66874065389"
                />
                <ContactItem
                  isDark={isDark}
                  icon={<Phone />}
                  label="Phone"
                  value="+66 80-221-8181"
                  href="tel:+66802218181"
                />
                <ContactItem
                  isDark={isDark}
                  icon={<MapPin />}
                  label="Office"
                  value="Bangkok, Thailand"
                />
              </div>
            </div>

            {/* Right: The Form */}
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl border shadow-xl transition-colors duration-300
              ${isDark ? "bg-slate-900 border-slate-800 shadow-black/20" : "bg-white border-slate-200 shadow-slate-200/50"}`}
            >
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup
                    isDark={isDark}
                    id="firstName"
                    label="First Name"
                    placeholder="John"
                  />
                  <InputGroup
                    isDark={isDark}
                    id="lastName"
                    label="Last Name"
                    placeholder="Doe"
                  />
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
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20
                    ${isDark ? "bg-slate-950 border-slate-700 text-white placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900"}`}
                    placeholder="john@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
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
                    className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20
                    ${isDark ? "bg-slate-950 border-slate-700 text-white placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900"}`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-brand text-white font-bold rounded-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  {!state.submitting && <Send className="w-4 h-4" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function FeatureCard({ icon, title, desc, isDark }: any) {
  return (
    <div
      className={`p-4 rounded-xl border transition-colors
      ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-100"}`}
    >
      <div className="text-brand mb-2">{icon}</div>
      <div
        className={`font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}
      >
        {title}
      </div>
      <div
        className={`text-xs ${isDark ? "text-slate-500" : "text-slate-500"}`}
      >
        {desc}
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, isDark }: any) {
  return (
    <div
      className={`group p-8 rounded-2xl border transition-all cursor-default
      ${
        isDark
          ? "bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-brand/50"
          : "bg-white border-slate-200 hover:border-brand/50 hover:shadow-lg"
      }`}
    >
      <div className="h-12 w-12 bg-brand/20 rounded-lg flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
        <CheckCircle className="w-6 h-6" />
      </div>
      <h3
        className={`text-xl font-bold mb-3 ${isDark ? "text-slate-100" : "text-slate-900"}`}
      >
        {title}
      </h3>
      <p
        className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}
      >
        {desc}
      </p>
    </div>
  );
}

function ContactItem({ icon, label, value, href, isDark }: any) {
  const content = (
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-brand border transition-colors
          ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100 shadow-sm"}`}
      >
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <div>
        <div
          className={`text-sm font-medium ${isDark ? "text-slate-500" : "text-slate-500"}`}
        >
          {label}
        </div>
        <div
          className={`font-semibold hover:text-brand transition-colors ${isDark ? "text-slate-200" : "text-slate-900"}`}
        >
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
        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20
          ${isDark ? "bg-slate-950 border-slate-700 text-white placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900"}`}
        placeholder={placeholder}
      />
    </div>
  );
}
