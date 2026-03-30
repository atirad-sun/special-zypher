"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Briefcase,
  Code2,
  Paintbrush,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-semibold text-ink-muted tracking-widest uppercase mb-4">
              Our Mission
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold leading-[1.05] tracking-[-0.03em] mb-6"
            >
              <span className="inline bg-highlight-green/20 px-2">Elevate All Technology</span>
              <br />
              <span className="inline bg-highlight-blue/20 px-2">And All Businesses</span>
              <br />
              <span className="inline bg-brand/15 px-2">With The Power of Code</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ VISION ═══════════════ */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-ink-muted tracking-widest uppercase mb-4">
              Our Vision
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold italic leading-tight tracking-[-0.02em] mb-8"
            >
              At ONE EIGHT X, we&apos;re closing the gap between &quot;idea&quot; and &quot;impact&quot;
            </motion.h2>
            <motion.div variants={fadeUp} className="text-ink-muted leading-relaxed space-y-4 text-left md:text-center">
              <p>
                We&apos;re giving businesses the power to turn vision into reality
                with newfound ease. The days of slow, cumbersome processes are fading,
                as we clear the path for creativity to thrive and innovation to accelerate.
              </p>
              <p>
                ONE EIGHT X is your catalyst, allowing you to move faster, think
                smarter, and amplify your impact — all while staying true to your brand.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ VALUES ═══════════════ */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 card-grid"
          >
            {[
              {
                icon: <Target />,
                title: "Precision",
                desc: "Rooted in banking and government sectors, we bring high-standard precision to every line of code.",
                bgClass: "bg-emerald-50 grid-pattern-green",
              },
              {
                icon: <Lightbulb />,
                title: "Innovation",
                desc: "From Blockchain pioneers to Game creators, we constantly push the boundaries of what's possible.",
                bgClass: "bg-blue-50 grid-pattern-blue",
              },
              {
                icon: <Users />,
                title: "Partnership",
                desc: "We aren't just a vendor. We are the technical co-founders you wish you had from day one.",
                bgClass: "bg-orange-50 grid-pattern",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="border border-border rounded-sm overflow-hidden group card-rotate"
              >
                <div className={`${item.bgClass} p-8 flex items-center justify-center h-40 overflow-hidden`}>
                  <div className="text-ink/50 card-visual">
                    {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-ink-muted tracking-widest uppercase text-center mb-4">
              Our Impact
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold italic text-center mb-10">
              ONE EIGHT X by the numbers
            </motion.h2>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-0">
              {[
                { stat: "50+", label: "Projects delivered", first: true },
                { stat: "3", label: "Industry verticals", first: false },
                { stat: "10+", label: "Years combined experience", first: false },
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
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ LEADERSHIP ═══════════════ */}
      <section className="py-24 px-6 bg-paper-warm border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-ink-muted tracking-widest uppercase mb-3">
              Our Executive Leadership Team
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold italic tracking-[-0.02em] mb-12">
              Leading the way to
              <br />engineering excellence
            </motion.h2>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Dream",
                  role: "Head of Business Development",
                  icon: <Briefcase className="w-4 h-4" />,
                  imageSrc: "https://api.dicebear.com/9.x/glass/svg?seed=Dream",
                  bio: "The visionary for market growth and strategic partnerships. With deep expertise in IoT and Systems Integration within the financial and government sectors.",
                  tags: ["GovTech", "IoT Strategy", "Business Design"],
                  highlight: "bg-highlight-yellow",
                },
                {
                  name: "Bird",
                  role: "Head of Product & Solutions",
                  icon: <Code2 className="w-4 h-4" />,
                  imageSrc: "https://api.dicebear.com/9.x/glass/svg?seed=Bird",
                  bio: "The architect of user-centric solutions. Combining a US-educated engineering foundation with extensive Product Management experience in commercial banking.",
                  tags: ["Product Mgmt", "FinTech", "Digital Identity"],
                  highlight: "bg-highlight-blue",
                },
                {
                  name: "Sun",
                  role: "Head of Operations & Innovation",
                  icon: <Paintbrush className="w-4 h-4" />,
                  imageSrc: "https://api.dicebear.com/9.x/glass/svg?seed=Aiden",
                  bio: "The driver of technical execution and design excellence. A pioneer in national blockchain ecosystems, bridging IT infrastructure and intuitive UI/UX.",
                  tags: ["Tech Lead", "Blockchain", "UI/UX Design"],
                  highlight: "bg-highlight-green",
                },
              ].map((founder) => (
                <motion.div
                  key={founder.name}
                  variants={fadeUp}
                  className="group"
                >
                  {/* Photo with colored label — Jasper style */}
                  <div className="relative mb-4 overflow-hidden rounded-sm bg-gray-100">
                    <img
                      src={founder.imageSrc}
                      alt={founder.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    {/* Name label overlay */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`${founder.highlight} text-ink text-sm font-bold px-2 py-1`}>
                        {founder.name}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-ink-muted font-medium">{founder.role}</div>
                  <p className="text-sm text-ink-muted mt-2 leading-relaxed">{founder.bio}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {founder.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-ink/5 rounded-full text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
