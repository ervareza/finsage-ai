import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

interface GenericPageProps {
  title: string;
  subtitle?: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, subtitle }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <ScrollReveal>
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        {subtitle && <p className="text-xl text-gray-500 mb-8">{subtitle}</p>}
        <div className="p-12 bg-gray-50 rounded-3xl border border-gray-100">
            <p className="text-gray-400">Content for {title} is currently being updated by our AI agents. Please check back shortly.</p>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default GenericPage;