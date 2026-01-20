import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-black text-white rounded-xl">
                <Scale size={24} />
            </div>
            <h1 className="text-4xl font-bold">Terms of Use</h1>
        </div>
        <p className="text-gray-500 mb-12 text-lg">Please read these terms carefully before using FinSage.</p>
      </ScrollReveal>

      <div className="grid gap-8">
          <ScrollReveal delay={0.1} width="100%">
              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-8 rounded-r-2xl">
                  <h2 className="text-xl font-bold text-yellow-800 mb-2 flex items-center gap-2">
                      <AlertTriangle size={20} /> No Financial Advice
                  </h2>
                  <p className="text-yellow-800 leading-relaxed text-sm">
                      The content provided by FinSage, including AI-generated signals and insights, is for informational purposes only. It does not constitute financial, investment, or legal advice. You are solely responsible for your investment decisions.
                  </p>
              </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} width="100%">
              <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4">1. Acceptance of Terms</h3>
                  <p className="text-gray-600 mb-4">
                      By accessing or using the FinSage platform, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
                  </p>
              </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} width="100%">
               <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4">2. Subscription & Billing</h3>
                  <ul className="space-y-3 text-gray-600">
                      <li className="flex gap-3">
                          <CheckCircle className="text-green-500 shrink-0" size={20} />
                          Subscription fees are billed in advance on a monthly or annual basis.
                      </li>
                      <li className="flex gap-3">
                          <CheckCircle className="text-green-500 shrink-0" size={20} />
                          You may cancel your subscription at any time; however, there are no refunds for partial months.
                      </li>
                  </ul>
              </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} width="100%">
               <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4">3. Limitation of Liability</h3>
                  <p className="text-gray-600">
                      In no event shall FinSage, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
              </div>
          </ScrollReveal>
      </div>
    </div>
  );
};

export default Terms;