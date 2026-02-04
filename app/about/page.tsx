"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Zap,
  Briefcase,
  Code2,
  Paintbrush,
} from "lucide-react";
import { useTheme } from "../ThemeContext";

export default function About() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-brand selection:text-white 
      ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              We are <span className="text-brand">ONE EIGHT X</span>.
            </h1>
            <p
              className={`text-xl leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              A collective of industry veterans bridging the gap between
              enterprise security and startup speed. We don't just build
              software; we architect digital transformations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Company Mission */}
      <section
        className={`py-16 px-6 ${isDark ? "bg-slate-900/50" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <ValueCard
            isDark={isDark}
            icon={<Target />}
            title="Precision"
            desc="Rooted in banking and government sectors, we bring high-standard precision to the line of code."
          />
          <ValueCard
            isDark={isDark}
            icon={<Lightbulb />}
            title="Innovation"
            desc="From Blockchain pioneers to Game creators, we constantly push the boundaries of what's possible."
          />
          <ValueCard
            isDark={isDark}
            icon={<Users />}
            title="Partnership"
            desc="We aren't just a vendor. We are the technical co-founders you wish you had from day one."
          />
        </div>
      </section>

      {/* THE FOUNDERS SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Leads
            </h2>
            <p className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
              The minds behind the machinery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* 1. DREAM - Business & Market */}
            <FounderCard
              isDark={isDark}
              name="Dream"
              role="Head of Business Development"
              icon={<Briefcase className="w-5 h-5" />}
              imageSrc="https://api.dicebear.com/9.x/glass/svg?seed=Dream"
              bio="The visionary for market growth and strategic partnerships. With deep expertise in IoT and Systems Integration within the financial and government sectors, Dream excels at translating complex organizational challenges into high-value business opportunities."
              tags={["GovTech", "IoT Strategy", "Business Design"]}
            />

            {/* 2. BIRD - Product & Strategy */}
            <FounderCard
              isDark={isDark}
              name="Bird"
              role="Head of Product & Solutions"
              icon={<Code2 className="w-5 h-5" />}
              imageSrc="https://api.dicebear.com/9.x/glass/svg?seed=Bird"
              bio="The architect of user-centric solutions. Combining a US-educated engineering foundation with extensive Product Management experience in commercial banking, Bird ensures that every digital solution is built with enterprise-grade logic and seamless user flow."
              tags={["Product Mgmt", "FinTech", "Digital Identity"]}
            />

            {/* 3. SUN - Tech & Experience */}
            <FounderCard
              isDark={isDark}
              name="Sun"
              role="Head of Operations & Innovation"
              icon={<Paintbrush className="w-5 h-5" />}
              imageSrc="https://api.dicebear.com/9.x/glass/svg?seed=Aiden"
              bio="The driver of technical execution and design excellence. A pioneer in national blockchain ecosystems, Sun bridges the gap between high-level IT infrastructure and intuitive UI/UX, ensuring that complex technologies are both scalable and easy to use."
              tags={["Tech Lead", "Blockchain", "UI/UX Design"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function ValueCard({ icon, title, desc, isDark }: any) {
  return (
    <div
      className={`p-8 rounded-2xl border text-center transition-all
      ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-100"}`}
    >
      <div className="w-12 h-12 mx-auto bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4">
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </div>
      <h3
        className={`text-xl font-bold mb-3 ${isDark ? "text-slate-100" : "text-slate-900"}`}
      >
        {title}
      </h3>
      <p className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
        {desc}
      </p>
    </div>
  );
}

function FounderCard({ name, role, bio, imageSrc, tags, icon, isDark }: any) {
  return (
    <div
      className={`group relative p-8 rounded-3xl border transition-all hover:-translate-y-2 duration-300
      ${
        isDark
          ? "bg-slate-900 border-slate-800 hover:border-brand/50 hover:shadow-2xl hover:shadow-brand/10"
          : "bg-white border-slate-200 hover:border-brand/50 hover:shadow-xl"
      }`}
    >
      {/* Avatar Circle */}
      <div className="w-24 h-24 mx-auto mb-6 relative">
        <div
          className={`absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity ${isDark ? "bg-brand/30" : "bg-brand/20"}`}
        ></div>
        <img
          src={imageSrc}
          alt={name}
          className={`w-full h-full rounded-full object-cover border-4 relative z-10 transition-colors
            ${isDark ? "border-slate-800 group-hover:border-brand" : "border-white shadow-lg group-hover:border-brand"}`}
        />
        <div className="absolute -bottom-2 -right-2 bg-brand text-white p-2 rounded-full z-20 shadow-lg">
          {icon}
        </div>
      </div>

      <div className="text-center mb-6">
        <h3
          className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}
        >
          {name}
        </h3>
        <div className="text-brand font-medium text-sm tracking-wide uppercase">
          {role}
        </div>
      </div>

      <p
        className={`text-sm leading-relaxed mb-6 text-center ${isDark ? "text-slate-400" : "text-slate-600"}`}
      >
        {bio}
      </p>

      {/* Skills Tags */}
      <div className="flex flex-wrap justify-center gap-2 pt-6 border-t border-dashed border-slate-700/30">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className={`text-xs px-3 py-1 rounded-full font-medium 
            ${
              isDark
                ? "bg-slate-950 text-slate-400 border border-slate-800"
                : "bg-slate-100 text-slate-600 border border-slate-200"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
