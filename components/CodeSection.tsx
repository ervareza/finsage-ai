import React from "react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const CodeSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background blobs for this section */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.4, 0.6] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-pink-100 rounded-full blur-[100px] opacity-60 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>{" "}
              Challenges
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-5xl font-bold tracking-tight leading-none">
              Instant AI Insights <br /> in Seconds.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex gap-2 pt-4">
              <span className="px-4 py-2 bg-black text-white text-xs font-medium rounded-md">
                NVDA
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                Stocks
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                Opportunities
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                Apple
              </span>
            </div>
          </ScrollReveal>
        </div>

        <div className="space-y-8">
          <ScrollReveal direction="down">
            <p className="text-gray-500 text-lg">
              Institutional-grade AI agents analyze stocks, crypto, forex, and
              ETFs in real time, providing actionable insights for quick,
              informed decisions.
            </p>
          </ScrollReveal>

          {/* Terminal Window */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] rounded-xl overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm leading-relaxed relative"
          >
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-gray-800">
              <span className="text-gray-400 text-xs">
                Should I buy NVDA now?
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 text-gray-300">
              <div className="mb-4">
                <span className="text-purple-400">def</span>{" "}
                <span className="text-blue-400">analyze_nvidia</span>():
              </div>
              <div className="pl-4 mb-4">
                <span className="text-yellow-300">print</span>(
                <span className="text-green-400">
                  "[INFO] Starting AI analysis of NVIDIA..."
                </span>
                )
              </div>
              <div className="pl-4 text-gray-500 mb-2">
                # Fundamental Agent Analysis
              </div>
              <div className="pl-4 mb-2">
                <span className="text-yellow-300">print</span>(
                <span className="text-green-400">
                  "[INFO] Analyzing fundamental data..."
                </span>
                )
              </div>
              <div className="pl-4 mb-1">
                <span className="text-blue-300">P_E_ratio</span> ={" "}
                <span className="text-orange-400">65</span>{" "}
                <span className="text-gray-500"># P/E ratio for NVIDIA</span>
              </div>
              <div className="pl-4 mb-2">
                <span className="text-blue-300">sector_avg</span> ={" "}
                <span className="text-orange-400">28</span>{" "}
                <span className="text-gray-500"># Sector average</span>
              </div>
              <div className="pl-4 mb-2">
                <span className="text-purple-400">if</span> P_E_ratio &gt;
                sector_avg:
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="pl-8 mb-4"
              >
                <span className="text-yellow-300">print</span>(
                <span className="text-green-400">
                  f"[INFO] P/E ratio:{" "}
                  <span className="text-blue-300">{`{P_E_ratio}`}</span>x,
                  significantly above sector average of{" "}
                  <span className="text-blue-300">{`{sector_avg}`}</span>x.
                  Justified by strong YoY growth of 87%, reflecting a solid p
                </span>
                )
              </motion.div>

              <div className="pl-4 text-gray-500 mb-2">
                # Technical Agent Analysis
              </div>
              <div className="pl-4 mb-2">
                <span className="text-yellow-300">print</span>(
                <span className="text-green-400">
                  "[INFO] Analyzing technical data..."
                </span>
                )
              </div>
              <div className="pl-4 mb-1">
                <span className="text-blue-300">RSI</span> ={" "}
                <span className="text-orange-400">72</span>{" "}
                <span className="text-gray-500"># RSI value</span>
              </div>
              <div className="pl-4 mb-1">
                <span className="text-blue-300">resistance</span> ={" "}
                <span className="text-orange-400">950</span>{" "}
                <span className="text-gray-500"># Resistance level</span>
              </div>
              <div className="pl-4 mb-1">
                <span className="text-blue-300">support</span> ={" "}
                <span className="text-orange-400">890</span>{" "}
                <span className="text-gray-500"># Support level</span>
              </div>
              <div className="pl-4 mb-2">
                <span className="text-purple-400">if</span> RSI &gt;{" "}
                <span className="text-orange-400">70</span>:
              </div>
              <div className="pl-4 absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
