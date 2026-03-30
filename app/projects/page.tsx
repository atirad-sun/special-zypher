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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-semibold text-ink-muted tracking-widest uppercase mb-4">
              Portfolio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold italic leading-tight mb-6"
            >
              Selected Work
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
              From National Layer-1 infrastructures to proprietary AI models.
              Here is how we solve complex engineering challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid pattern hero block */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid-pattern-pink rounded-sm py-16" />
      </section>

      {/* ═══════════════ WEB3 ═══════════════ */}
      <CategorySection
        icon={<Layers className="w-5 h-5" />}
        title="Web3 & Blockchain Ecosystems"
        gridBgClass="grid-pattern-blue"
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

      {/* ═══════════════ REGTECH ═══════════════ */}
      <CategorySection
        icon={<ShieldCheck className="w-5 h-5" />}
        title="RegTech & Digital Identity (DID)"
        gridBgClass="grid-pattern-green"
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

      {/* ═══════════════ AI & ML ═══════════════ */}
      <CategorySection
        icon={<BrainCircuit className="w-5 h-5" />}
        title="Artificial Intelligence & ML"
        gridBgClass="grid-pattern"
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

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative overflow-hidden">
        <div className="grid-pattern-blue py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Jasper-style floating card CTA */}
            <div className="inline-block bg-white border border-border rounded-sm px-16 py-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold italic text-ink mb-8">
                Get started
                <br />
                with ONE EIGHT X
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/"
                  className="px-6 py-3 border border-ink text-ink font-medium rounded hover:bg-ink hover:text-white transition-all cursor-pointer"
                >
                  Start Free Trial
                </a>
                <Link
                  href="/"
                  className="px-6 py-3 bg-cta text-white font-medium rounded hover:bg-cta-hover transition-all cursor-pointer"
                >
                  Get A Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ── HELPER COMPONENTS ──

function CategorySection({
  icon,
  title,
  gridBgClass,
  projects,
  columns = 3,
}: any) {
  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
            <div className={`p-2.5 rounded-sm ${gridBgClass} border border-border text-ink/60`}>
              {icon}
            </div>
            <h2 className="text-2xl font-[family-name:var(--font-heading)] font-bold italic">
              {title}
            </h2>
          </motion.div>

          <div className={`grid md:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""} gap-6`}>
            {projects.map((project: any) => (
              <motion.div key={project.title} variants={fadeUp}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ icon, title, desc, tags, details }: any) {
  return (
    <div className="border border-border rounded-sm flex flex-col h-full bg-white hover:shadow-md transition-shadow">
      <div className="p-6 flex-grow">
        <div className="w-10 h-10 border border-border rounded-sm flex items-center justify-center text-brand mb-5">
          {React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>

        <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
        <p className="text-sm text-ink-muted leading-relaxed mb-4">{desc}</p>

        <ul className="text-sm text-ink-muted space-y-1.5 mb-4">
          {details.map((item: string, i: number) => (
            <li key={i} className="flex gap-2">
              <span className="text-brand mt-0.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="px-6 pb-5 pt-4 border-t border-border flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="text-xs px-2.5 py-1 border border-border rounded-sm text-ink-muted">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
