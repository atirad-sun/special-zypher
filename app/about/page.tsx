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
import { useTheme } from "../ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function About() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300
      ${isDark ? "bg-surface-dark text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden grain">
        <div
          className={`absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none
          ${isDark ? "bg-brand/[0.06]" : "bg-brand/[0.03]"}`}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-brand text-sm font-semibold tracking-widest uppercase mb-4">
              Our Story
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold tracking-tight mb-6"
            >
              We are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
                ONE EIGHT X
              </span>
              .
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className={`text-xl leading-relaxed max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              A collective of industry veterans bridging the gap between
              enterprise security and startup speed. We don&apos;t just build
              software; we architect digital transformations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className={`py-20 px-6 ${isDark ? "bg-surface-dark-card" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Target />,
                title: "Precision",
                desc: "Rooted in banking and government sectors, we bring high-standard precision to the line of code.",
              },
              {
                icon: <Lightbulb />,
                title: "Innovation",
                desc: "From Blockchain pioneers to Game creators, we constantly push the boundaries of what's possible.",
              },
              {
                icon: <Users />,
                title: "Partnership",
                desc: "We aren't just a vendor. We are the technical co-founders you wish you had from day one.",
              },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i}>
                <ValueCard isDark={isDark} icon={item.icon} title={item.title} desc={item.desc} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className={`py-28 px-6 ${isDark ? "bg-surface-dark" : "bg-slate-50"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
              <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] font-bold mb-4">
                Meet the Leads
              </h2>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
                The minds behind the machinery.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dream",
                  role: "Head of Business Development",
                  icon: <Briefcase className="w-4 h-4" />,
                  imageSrc: "https://api.dicebear.com/9.x/glass/svg?seed=Dream",
                  bio: "The visionary for market growth and strategic partnerships. With deep expertise in IoT and Systems Integration within the financial and government sectors, Dream excels at translating complex organizational challenges into high-value business opportunities.",
                  tags: ["GovTech", "IoT Strategy", "Business Design"],
                },
                {
                  name: "Bird",
                  role: "Head of Product & Solutions",
                  icon: <Code2 className="w-4 h-4" />,
                  imageSrc: "https://api.dicebear.com/9.x/glass/svg?seed=Bird",
                  bio: "The architect of user-centric solutions. Combining a US-educated engineering foundation with extensive Product Management experience in commercial banking, Bird ensures that every digital solution is built with enterprise-grade logic and seamless user flow.",
                  tags: ["Product Mgmt", "FinTech", "Digital Identity"],
                },
                {
                  name: "Sun",
                  role: "Head of Operations & Innovation",
                  icon: <Paintbrush className="w-4 h-4" />,
                  imageSrc: "https://api.dicebear.com/9.x/glass/svg?seed=Aiden",
                  bio: "The driver of technical execution and design excellence. A pioneer in national blockchain ecosystems, Sun bridges the gap between high-level IT infrastructure and intuitive UI/UX, ensuring that complex technologies are both scalable and easy to use.",
                  tags: ["Tech Lead", "Blockchain", "UI/UX Design"],
                },
              ].map((founder, i) => (
                <motion.div key={founder.name} variants={fadeUp} custom={i + 1}>
                  <FounderCard isDark={isDark} {...founder} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ── HELPER COMPONENTS ──

function ValueCard({ icon, title, desc, isDark }: any) {
  return (
    <div
      className={`group p-8 rounded-2xl border text-center transition-all duration-300 gradient-border
      ${isDark ? "bg-surface-dark-elevated/50 border-white/[0.06]" : "bg-slate-50 border-slate-100 hover:shadow-lg"}`}
    >
      <div
        className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110
        ${isDark ? "bg-brand/10 text-brand-light" : "bg-brand/10 text-brand"}`}
      >
        {React.cloneElement(icon, { className: "w-6 h-6" })}
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

function FounderCard({ name, role, bio, imageSrc, tags, icon, isDark }: any) {
  return (
    <div
      className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 gradient-border
      ${
        isDark
          ? "bg-surface-dark-card border-white/[0.06]"
          : "bg-white border-slate-200 hover:shadow-xl"
      }`}
    >
      {/* Avatar */}
      <div className="w-20 h-20 mx-auto mb-6 relative">
        <div
          className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300
          ${isDark ? "bg-brand/30" : "bg-brand/20"}`}
        />
        <img
          src={imageSrc}
          alt={name}
          className={`w-full h-full rounded-full object-cover border-2 relative z-10 transition-all duration-300
          ${isDark ? "border-white/[0.08] group-hover:border-brand/50" : "border-slate-200 group-hover:border-brand/50 shadow-sm"}`}
        />
        <div className="absolute -bottom-1.5 -right-1.5 bg-brand text-white p-1.5 rounded-lg z-20 shadow-md">
          {icon}
        </div>
      </div>

      <div className="text-center mb-5">
        <h3 className={`text-xl font-[family-name:var(--font-heading)] font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
          {name}
        </h3>
        <div className="text-brand text-sm font-medium tracking-wide mt-1">
          {role}
        </div>
      </div>

      <p className={`text-sm leading-relaxed mb-6 text-center ${isDark ? "text-slate-400" : "text-slate-600"}`}>
        {bio}
      </p>

      {/* Tags */}
      <div className={`flex flex-wrap justify-center gap-2 pt-5 border-t ${isDark ? "border-white/[0.06]" : "border-slate-100"}`}>
        {tags.map((tag: string) => (
          <span
            key={tag}
            className={`text-xs px-3 py-1 rounded-md font-medium
            ${isDark ? "bg-brand/[0.06] text-brand-light border border-brand/10" : "bg-brand/[0.04] text-brand border border-brand/10"}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
