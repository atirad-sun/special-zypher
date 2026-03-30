"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wallet,
  Gamepad2,
  Palette,
  ShieldCheck,
  Fingerprint,
  Layers,
  Database,
  BrainCircuit,
  Scan,
  Hospital,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "../ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300
      ${isDark ? "bg-surface-dark text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Header */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden grain">
        <div
          className={`absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none
          ${isDark ? "bg-brand/[0.06]" : "bg-brand/[0.03]"}`}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-brand text-sm font-semibold tracking-widest uppercase mb-4">
              Portfolio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold tracking-tight mb-4"
            >
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
                Work
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className={`text-lg max-w-2xl ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              From National Layer-1 infrastructures to proprietary AI models.
              Here is how we solve complex engineering challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY A: WEB3 */}
      <CategorySection
        isDark={isDark}
        icon={<Layers className="w-5 h-5" />}
        title="Web3 & Blockchain Ecosystems"
        accentColor="blue"
        projects={[
          {
            icon: <Wallet />,
            title: "Enterprise Digital Wallet & SSO",
            desc: "Architected a responsive web-app wallet serving as the primary gateway for a national EVM ecosystem.",
            tags: ["EVM", "SSO", "Security"],
            details: [
              "Implemented secure asset storage.",
              "Unified Single Sign-On for ecosystem integration.",
            ],
          },
          {
            icon: <Gamepad2 />,
            title: "Gamified NFT Marketplace",
            desc: "High-traffic marketplace supporting complex mechanics like Gashapon and Collection Burning.",
            tags: ["ERC721", "Smart Contracts", "GameFi"],
            details: [
              "Automated revenue-sharing contracts.",
              "Direct sales & Randomized minting logic.",
            ],
          },
          {
            icon: <Palette />,
            title: "Asset Creator Studio",
            desc: "End-to-end portal for verified creators to mint, manage, and monetize digital assets.",
            tags: ["KYC Integration", "Next.js", "Payments"],
            details: [
              "Automated KYC-verification workflows.",
              "Real-time revenue distribution in native tokens.",
            ],
          },
        ]}
      />

      {/* CATEGORY B: REGTECH */}
      <CategorySection
        isDark={isDark}
        icon={<ShieldCheck className="w-5 h-5" />}
        title="RegTech & Digital Identity (DID)"
        accentColor="emerald"
        columns={2}
        projects={[
          {
            icon: <Database />,
            title: "Bank-Grade KYC/KYB Onboarding",
            desc: "Cross-platform internal tool for Corporate Onboarding (KYB) and Individual Verification (KYC).",
            tags: ["Biometrics", "Hardware Integration", "AMLO"],
            details: [
              "Hardware 'dip-chip' reading for National IDs.",
              "Facial recognition & Multi-tier approval workflows.",
              "API integration with FATCA, AMLO, World-Check.",
            ],
          },
          {
            icon: <Fingerprint />,
            title: "Decentralized Identity (DID) Wallet",
            desc: "Progressive Web App (PWA) focused on Verifiable Credentials (VCs) and Presentations.",
            tags: ["PWA", "Cryptography", "GovTech"],
            details: [
              "Tamper-proof digital certificates (Education, Licenses).",
              "Instant verification for automated fund disbursement.",
              "Privacy-first architecture.",
            ],
          },
        ]}
      />

      {/* CATEGORY C: AI & ML */}
      <CategorySection
        isDark={isDark}
        icon={<BrainCircuit className="w-5 h-5" />}
        title="Artificial Intelligence & ML"
        accentColor="purple"
        className="pb-28"
        projects={[
          {
            icon: <Scan />,
            title: "AI Data Labeling Pipeline",
            desc: "High-precision annotation platform utilizing AI pre-labeling to accelerate human workflow.",
            tags: ["Computer Vision", "Human-in-the-Loop", "SaaS"],
            details: [
              "Reduces manual effort by 60% via pre-labeling.",
              "Rapid dataset generation for model training.",
            ],
          },
          {
            icon: <Hospital />,
            title: "AI-Powered Elderly Care",
            desc: "Created an AI-powered marketplace for elderly care services, enabling users to browse and book caretakers with confidence.",
            tags: ["AI Matching", "Care Optimization", "Automation"],
            details: [
              "Analyzes booking patterns to predict inventory.",
              "Dynamic pricing adjustments based on demand.",
            ],
          },
          {
            icon: <TrendingUp />,
            title: "Financial Pattern Recognition",
            desc: "Algorithmic models for the financial sector to detect transaction anomalies and fraud.",
            tags: ["Fintech", "Anomaly Detection", "Big Data"],
            details: [
              "Processes high-volume data streams in real-time.",
              "Automated risk scoring and fraud alerts.",
            ],
          },
        ]}
      />

      {/* CTA */}
      <section
        className={`py-24 text-center relative overflow-hidden
        ${isDark ? "bg-surface-dark-card" : "bg-white"}`}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/30 to-transparent absolute top-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-[family-name:var(--font-heading)] font-bold mb-6">
            Ready to build something complex?
          </h2>
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-brand text-white rounded-lg font-semibold hover:bg-brand-light transition-all duration-200 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30"
          >
            Talk to us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

// ── HELPER COMPONENTS ──

function CategorySection({
  isDark,
  icon,
  title,
  accentColor,
  projects,
  columns = 3,
  className = "",
}: any) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-400",
    emerald: "bg-emerald-500/10 text-emerald-400",
    purple: "bg-purple-500/10 text-purple-400",
  };

  return (
    <section className={`py-12 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-8">
            <div className={`p-2.5 rounded-xl ${colorMap[accentColor]}`}>
              {icon}
            </div>
            <h2 className="text-2xl font-[family-name:var(--font-heading)] font-bold">
              {title}
            </h2>
          </motion.div>

          <div className={`grid md:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""} gap-6`}>
            {projects.map((project: any, i: number) => (
              <motion.div key={project.title} variants={fadeUp} custom={i + 1}>
                <ProjectCard isDark={isDark} {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ icon, title, desc, tags, details, isDark }: any) {
  return (
    <div
      className={`group p-6 rounded-2xl border flex flex-col h-full transition-all duration-300 hover:-translate-y-1 gradient-border
      ${
        isDark
          ? "bg-surface-dark-card border-white/[0.06]"
          : "bg-white border-slate-200 hover:shadow-xl"
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110
        ${isDark ? "bg-brand/10 text-brand-light" : "bg-brand/10 text-brand"}`}
      >
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>

      <h3 className={`text-lg font-[family-name:var(--font-heading)] font-bold mb-2.5 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
        {title}
      </h3>
      <p className={`text-sm mb-5 flex-grow leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
        {desc}
      </p>

      {/* Details */}
      <ul className={`text-sm mb-5 space-y-2 ${isDark ? "text-slate-500" : "text-slate-500"}`}>
        {details.map((item: string, i: number) => (
          <li key={i} className="flex gap-2.5">
            <span className="text-brand mt-0.5 shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className={`flex flex-wrap gap-2 mt-auto pt-4 border-t ${isDark ? "border-white/[0.06]" : "border-slate-100"}`}>
        {tags.map((tag: string) => (
          <span
            key={tag}
            className={`text-xs px-2.5 py-1 rounded-md font-medium
            ${isDark ? "bg-brand/[0.06] text-brand-light border border-brand/10" : "bg-brand/[0.04] text-brand border border-brand/10"}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
