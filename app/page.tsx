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
  Rocket,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  // 1. Setup Formspree
  const [state, handleSubmit] = useForm("xpqaavvv");

  // 2. Success State: What to show after they send a message
  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl border border-slate-200">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Message Sent!
          </h2>
          <p className="text-slate-600 mb-6">
            Thanks for reaching out. We'll get back to you shortly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-brand text-white rounded-full font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            {/* Logo Placeholder - Replace src with your file path later */}
            <img
              src="asset/logo.svg"
              alt="ONE EIGHT X Logo"
              className="h-8 w-auto"
            />
            {/* <span>
              Company<span className="text-brand">Name</span>
            </span> */}
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-brand transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              About
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              Process
            </a>
            <button className="px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-brand transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-brand text-xs font-semibold mb-6 border border-teal-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Accepting New Projects for 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Building digital <br />
              <span className="text-brand">experiences</span> that matter.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We help forward-thinking companies launch fast, scalable, and
              secure digital products using cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-brand text-white rounded-full font-semibold hover:bg-teal-700 transition-all flex items-center gap-2 shadow-lg shadow-teal-900/20">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
                View Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand/10 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl p-8 aspect-square flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                {/* Standard Tech Stack */}
                <FeatureCard
                  icon={<Zap />}
                  title="Fast"
                  desc="Optimized speed"
                />
                <FeatureCard
                  icon={<Shield />}
                  title="Secure"
                  desc="Bank-grade logic"
                />
                <FeatureCard
                  icon={<Code />}
                  title="Modern"
                  desc="Next.js & React"
                />
                <FeatureCard
                  icon={<Globe />}
                  title="Global"
                  desc="CDN deployed"
                />

                {/* Specialized Expertise (New) */}
                <FeatureCard
                  icon={<Landmark />}
                  title="Fintech"
                  desc="Banking heritage"
                />
                <FeatureCard
                  icon={<Blocks />}
                  title="Blockchain"
                  desc="Web3 & Smart Contracts"
                />
                <FeatureCard
                  icon={<FileCheck />}
                  title="Compliant"
                  desc="Regulator friendly"
                />
                <FeatureCard
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
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Everything you need to go from concept to launch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              desc="High-performance websites built with well-known lastest technology for maximum speed and SEO."
            />
            <ServiceCard
              title="Mobile Apps"
              desc="Native-feel mobile applications that work seamlessly across iOS and Android."
            />
            <ServiceCard
              title="Cloud Infrastructure"
              desc="Scalable Cloud architecture designed to handle thousands of users securely."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Let's work together.
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Ready to start your next project? Fill out the form or reach out
                to us directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm border border-slate-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">
                      Email
                    </div>
                    <a
                      href="mailto:contact@oneeightx.com"
                      className="text-slate-900 font-semibold hover:text-brand"
                    >
                      contact@oneeightx.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm border border-slate-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">
                      Phone
                    </div>
                    <a
                      href="tel:+66802218181"
                      className="text-slate-900 font-semibold hover:text-brand"
                    >
                      +66 80-221-8181
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm border border-slate-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">
                      Office
                    </div>
                    <div className="text-slate-900 font-semibold">
                      Bangkok, Thailand
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Form (Connected to Formspree) */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
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
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
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
                  className="w-full py-4 bg-brand text-white font-bold rounded-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  {!state.submitting && <Send className="w-4 h-4" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-white border-t border-slate-200 text-center text-slate-500 text-sm">
        © 2026 ONE EIGHT X COMPANY LIMITED. All rights reserved.
      </footer>
    </div>
  );
}

// Simple helper components to keep the code clean
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
      <div className="text-brand mb-2">{icon}</div>
      <div className="font-bold text-slate-900">{title}</div>
      <div className="text-xs text-slate-500">{desc}</div>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand/50 transition-all cursor-default">
      <div className="h-12 w-12 bg-brand/20 rounded-lg flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
        <CheckCircle className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
