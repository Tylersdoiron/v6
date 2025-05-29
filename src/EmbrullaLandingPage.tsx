import React from 'react';
import { motion } from 'framer-motion';
import logo from './assets/embrulla-logo.png';

export default function EmbrullaLandingPage() {
  return (
    <div className="min-h-screen bg-neutral text-dark font-sans">

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Embrulla Logo" className="h-10 w-auto" />
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <a href="#how-it-works" className="hover:text-primary">How it works</a>
            <a href="#benefits" className="hover:text-primary">Benefits</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
        </div>
        <a href="https://calendly.com/tylerdoiron-embrulla" className="bg-primary text-white px-4 py-2 rounded hover:bg-accent font-semibold">
          Book a Demo
        </a>
      </header>

      <main className="p-6 md:p-12 space-y-24">
        <motion.section id="hero" className="text-center max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold text-primary font-heading">
            Embrulla – The Smart Way to Revive Lost Leads and Boost Your Revenue
          </h1>
          <p className="text-lg text-secondary">
            Stop Losing Money on Dormant Leads. Automatically Revive and Monetize Them, Hassle-Free.
          </p>
          <p className="text-md text-gray-700">
            Service businesses like yours lose thousands every month from unconverted leads slipping through the cracks. Manual follow-ups are tedious, inconsistent, and inefficient. Embrulla puts an end to this chaos by fully automating your lead revival process—so you never miss another opportunity again.
          </p>
        </motion.section>
        <motion.section id="how-it-works" className="max-w-3xl mx-auto space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-center">Tired of Missed Opportunities and Operational Bottlenecks?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Valuable leads forgotten in your CRM or email inbox.</li>
            <li>Staff overwhelmed by manual follow-ups and repetitive admin tasks.</li>
            <li>Unclear metrics leaving you guessing about actual lead quality and ROI.</li>
            <li>Difficulty scaling your follow-up efforts as your business grows.</li>
          </ul>
          <p className="text-center">Every missed lead is lost revenue—money you’ve already spent acquiring those leads.</p>
        </motion.section>
        <motion.section className="max-w-5xl mx-auto space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold">Embrulla Smart Follow-Up & Lead Revival Engine</h2>
          <div className="mt-10 max-w-4xl mx-auto text-center">
          <p>Automated. Intelligent. Profitable.</p>
          <p>
            Embrulla is an AI-powered automation platform specifically designed for service based businesses. We systematically revive and convert your old leads, eliminating the need for manual follow-ups, and gives you crystal-clear visibility into booked jobs and ROI - without lifting a finger.
          </p>
          <p>Here’s how it works:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Smart Lead Scoring:</strong> AI-driven logic instantly categorizes and assigns tailored revival campaigns.</li>
            <li><strong>Automated Follow-Ups:</strong> Consistent, personalized emails sent automatically—no manual oversight needed.</li>
            <li><strong>Real-Time Tracking:</strong> Transparent metrics show exactly which leads engage, book, or quote.</li>
            <li><strong>Simplified Billing:</strong> Automatically tracks revival success, ensuring seamless and accurate invoicing.</li>
          </ul>
        </motion.section>
        <motion.section id="benefits" className="max-w-3xl mx-auto text-center space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold">Immediate Benefits for Your Business</h2>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>✅ Increase Revenue Fast: Quickly turn dormant leads into profitable bookings.</li>
            <li>✅ Slash Admin Workload: Reduce time spent on lead follow-ups by up to 80%.</li>
            <li>✅ Full Visibility & Clarity: Clearly see metrics on revived leads, booking rates, and real-time ROI.</li>
            <li>✅ Set It & Forget It: Once we plug in, Embrulla works for you daily - no micromanagement needed.</li>
            <li>✅ Only Pay for Results: You only pay when a revived lead actually books or converts.</li>
          </ul>
        </motion.section>
        <motion.section id="faq" className="max-w-3xl mx-auto text-left space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <p><strong>Is Embrulla complicated to set up?</strong> No. Our onboarding is simple, clear, and fully supported by expert VAs—minimal effort from your team.</p>
          <p><strong>Will the ROI justify the cost?</strong> Absolutely. You pay only for results—transparent billing clearly tied to the leads you actually revive.</p>
          <p><strong>How reliable is the automation?</strong> Highly reliable. With fallback email systems, watchdog monitoring, and transparent logs, your campaigns always run smoothly.</p>
          <p><strong>Is my data secure?</strong> Your security is paramount. Embrulla adheres strictly to industry standards, ensuring your business data remains protected and private.</p>
        </motion.section>
        <motion.section id="contact" className="text-center max-w-4xl mx-auto space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold">Ready to See How Embrulla Can Revolutionize Your Revenue?</h2>
          <a href="https://calendly.com/tylerdoiron-embrulla" className="bg-primary text-white px-6 py-3 rounded hover:bg-accent font-semibold">
            Book Your Free Demo Today →
          </a>
          <br />
          <button className="mt-2 border border-primary text-primary px-6 py-3 rounded hover:bg-secondary/10">
            Download Your Free Lead Revival Information Pack →
          </button>
          <p className="text-gray-600 pt-4">
            Our simple onboarding process will immediately integrate with your existing CRM, calendars, and tools, ensuring you start reviving leads—and profits—without delay.
          </p>
        </motion.section>
        <footer className="text-center mt-12 text-sm text-gray-500">
          <h2 className="text-lg font-semibold">Embrulla: Weatherproof Your Business Workflows</h2>
          <p>End the chaos. Take control. Effortlessly convert forgotten leads into steady, reliable revenue.</p>
          <a href="https://calendly.com/tylerdoiron-embrulla" className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded hover:bg-blue-700">
            Schedule Your Free Lead Revival Audit →
          </a>
        </footer>
      </main>

    </div>
  );
}
