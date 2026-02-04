"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Wallet,
  Gamepad2,
  Palette,
  ShieldCheck,
  Fingerprint,
  Layers,
  Database,
  // NEW ICONS FOR AI SECTION
  BrainCircuit,
  Scan,
  Utensils,
  Hospital,
  TrendingUp,
} from "lucide-react";

// 1. IMPORT THE GLOBAL THEME
import { useTheme } from "../ThemeContext";

export default function Projects() {
  // 2. USE THE GLOBAL THEME
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-brand selection:text-white 
      ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Header Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Selected <span className="text-brand">Work</span>
            </h1>
            <p
              className={`text-lg max-w-2xl ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              From National Layer-1 infrastructures to proprietary AI models.
              Here is how we solve complex engineering challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY A: WEB3 */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Web3 & Blockchain Ecosystems</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              isDark={isDark}
              icon={<Wallet />}
              title="Enterprise Digital Wallet & SSO"
              desc="Architected a responsive web-app wallet serving as the primary gateway for a national EVM ecosystem."
              tags={["EVM", "SSO", "Security"]}
              details={[
                "Implemented secure asset storage.",
                "Unified Single Sign-On for ecosystem integration.",
              ]}
            />
            <ProjectCard
              isDark={isDark}
              icon={<Gamepad2 />}
              title="Gamified NFT Marketplace"
              desc="High-traffic marketplace supporting complex mechanics like Gashapon and Collection Burning."
              tags={["ERC721", "Smart Contracts", "GameFi"]}
              details={[
                "Automated revenue-sharing contracts.",
                "Direct sales & Randomized minting logic.",
              ]}
            />
            <ProjectCard
              isDark={isDark}
              icon={<Palette />}
              title="Asset Creator Studio"
              desc="End-to-end portal for verified creators to mint, manage, and monetize digital assets."
              tags={["KYC Integration", "Next.js", "Payments"]}
              details={[
                "Automated KYC-verification workflows.",
                "Real-time revenue distribution in native tokens.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CATEGORY B: REGTECH */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">
              RegTech & Digital Identity (DID)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              isDark={isDark}
              icon={<Database />}
              title="Bank-Grade KYC/KYB Onboarding"
              desc="Cross-platform internal tool for Corporate Onboarding (KYB) and Individual Verification (KYC)."
              tags={["Biometrics", "Hardware Integration", "AMLO"]}
              details={[
                "Hardware 'dip-chip' reading for National IDs.",
                "Facial recognition & Multi-tier approval workflows.",
                "API integration with FATCA, AMLO, World-Check.",
              ]}
            />
            <ProjectCard
              isDark={isDark}
              icon={<Fingerprint />}
              title="Decentralized Identity (DID) Wallet"
              desc="Progressive Web App (PWA) focused on Verifiable Credentials (VCs) and Presentations."
              tags={["PWA", "Cryptography", "GovTech"]}
              details={[
                "Tamper-proof digital certificates (Education, Licenses).",
                "Instant verification for automated fund disbursement.",
                "Privacy-first architecture.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CATEGORY C: AI & MACHINE LEARNING (NEW) */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            {/* Using a Purple/Rose theme for AI */}
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Artificial Intelligence & ML</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              isDark={isDark}
              icon={<Scan />}
              title="AI Data Labeling Pipeline"
              desc="High-precision annotation platform utilizing AI pre-labeling to accelerate human workflow."
              tags={["Computer Vision", "Human-in-the-Loop", "SaaS"]}
              details={[
                "Reduces manual effort by 60% via pre-labeling.",
                "Rapid dataset generation for model training.",
              ]}
            />
            <ProjectCard
              isDark={isDark}
              icon={<Hospital />}
              title="AI-Powered Elderly Care"
              desc="Created an AI-powered marketplace for elderly care services, enabling users to browse and book caretakers with confidence."
              tags={["AI Matching", "Care Optimization", "Automation"]}
              details={[
                "Analyzes booking patterns to predict inventory.",
                "Dynamic pricing adjustments based on demand.",
              ]}
            />
            <ProjectCard
              isDark={isDark}
              icon={<TrendingUp />}
              title="Financial Pattern Recognition"
              desc="Algorithmic models for the financial sector to detect transaction anomalies and fraud."
              tags={["Fintech", "Anomaly Detection", "Big Data"]}
              details={[
                "Processes high-volume data streams in real-time.",
                "Automated risk scoring and fraud alerts.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section
        className={`py-20 text-center border-t ${
          isDark
            ? "bg-slate-900 border-slate-800"
            : "bg-slate-100 border-slate-200"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to build something complex?
        </h2>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full font-bold hover:bg-teal-700 transition-all"
        >
          Talk to us <ArrowLeft className="w-4 h-4 rotate-180" />
        </a>
      </section>
    </div>
  );
}

// --- CARD COMPONENT ---
function ProjectCard({ icon, title, desc, tags, details, isDark }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-2xl border flex flex-col h-full transition-all hover:-translate-y-1
      ${
        isDark
          ? "bg-slate-900 border-slate-800 hover:border-brand/50 hover:shadow-2xl hover:shadow-brand/10"
          : "bg-white border-slate-200 hover:border-brand/50 hover:shadow-xl"
      }`}
    >
      <div className="w-12 h-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-6">
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </div>

      <h3
        className={`text-xl font-bold mb-3 ${
          isDark ? "text-slate-100" : "text-slate-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm mb-6 flex-grow ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {desc}
      </p>

      {/* Bullet Points */}
      <ul
        className={`text-sm mb-6 space-y-2 ${
          isDark ? "text-slate-500" : "text-slate-500"
        }`}
      >
        {details.map((item: string, i: number) => (
          <li key={i} className="flex gap-2">
            <span className="text-brand mt-1">•</span> {item}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dashed border-slate-700/50">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className={`text-xs px-2 py-1 rounded-md font-medium border
            ${
              isDark
                ? "bg-slate-950 border-slate-800 text-slate-400"
                : "bg-slate-50 border-slate-200 text-slate-600"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
