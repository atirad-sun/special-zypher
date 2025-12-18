"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,CheckCircle,Code,Globe,Shield,Zap,Mail,MapPin,Phone,Send,Landmark,Blocks,FileCheck,Rocket,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            {/* Logo Placeholder - Replace src with your file path later */}
            <img
              src="asset/logo.svg"
              alt="My Company Logo"
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
