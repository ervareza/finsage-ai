import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-black text-white rounded-xl">
                <Shield size={24} />
            </div>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-gray-500 mb-12 text-lg">Last updated: October 24, 2024</p>
      </ScrollReveal>

      <div className="space-y-12">
          {/* Section 1 */}
          <ScrollReveal delay={0.1} width="100%">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Eye className="text-blue-600" size={20} /> Data Collection
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                      We collect information you provide directly to us when you create an account, update your profile, or use our AI trading tools. This includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Contact information (name, email address).</li>
                      <li>Financial interests and watchlist preferences.</li>
                      <li>Usage data and interactions with our AI agents.</li>
                  </ul>
              </div>
          </ScrollReveal>

          {/* Section 2 */}
          <ScrollReveal delay={0.2} width="100%">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Lock className="text-green-600" size={20} /> Data Security
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                      We implement institutional-grade security measures to protect your personal information. All financial data is encrypted at rest and in transit using AES-256 encryption. We do not sell your personal data to third-party advertisers.
                  </p>
              </div>
          </ScrollReveal>

          {/* Section 3 */}
          <ScrollReveal delay={0.3} width="100%">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <FileText className="text-purple-600" size={20} /> AI Transparency
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                      Our AI models are trained on public market data. Your personal trading history is used solely to personalize your experience and is not used to train the global foundational models without your explicit consent.
                  </p>
              </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
              <p className="text-sm text-gray-400 text-center mt-12">
                  For any privacy-related questions, please contact privacy@finsage.ai
              </p>
          </ScrollReveal>
      </div>
    </div>
  );
};

export default Privacy;