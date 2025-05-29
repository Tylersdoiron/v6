import React from 'react';
import { motion } from 'framer-motion';
import logo from './assets/embrulla-logo.png';
import n8nFlow from './assets/n8n_workflow_image.png';

export default function EmbrullaLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Embrulla Logo" className="h-10 w-auto" />
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <a href="#how-it-works" className="hover:text-blue-600">How it works</a>
            <a href="#benefits" className="hover:text-blue-600">Benefits</a>
            <a href="#faq" className="hover:text-blue-600">FAQ</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
        <a href="https://calendly.com/tylerdoiron-embrulla" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold">
          Book a Demo
        </a>
      </header>

      <main className="p-6 md:p-12 space-y-24">
        <motion.section id="hero" className="text-center max-w-4xl mx-auto space-y-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold text-blue-600 font-heading">
            Embrulla – Automatically Revive Cold Leads and Recover Lost Revenue
          </h1>
          <p className="text-lg text-gray-700">
            Service businesses lose thousands from leads that go cold. Embrulla revives them — hands-free.
          </p>
          <p className="text-md text-gray-600">
           <p>
  Most local businesses are sitting on thousands of dollars in unconverted quotes and past clients who never heard back.
</p>
<p>
  Manual follow-up is slow, inconsistent, and easy to forget.
</p>
<p>
  <strong>Embrulla automates everything</strong> — from sending personalized follow-ups to tracking replies and flagging booked leads.
</p>
<p>
  You never miss another opportunity — and you don’t have to lift a finger.
</p>

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
          <p className="text-center"><p><strong>Every missed lead is lost revenue — money you’ve already paid to acquire.</strong></p>
</p>
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
            <div className="pt-6">
              <img src={n8nFlow} alt="n8n workflow diagram" className="rounded-lg shadow-lg w-full max-w-3xl mx-auto" />
            </div>
          </div>
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
          <h2 className="text-2xl font-bold mb-6">Ready to See How Embrulla Can Revolutionize Your Revenue?</h2>
          <a href="https://calendly.com/tylerdoiron-embrulla" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold">
            Book Your Free Demo Today →
          </a>
          <br />
          <button className="mt-2 border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50">
            Download Your Free Lead Revival Information Pack →
          </button>
          <p className="text-gray-600 pt-4">
            Our simple onboarding process will immediately integrate with your existing CRM, calendars, and tools, ensuring you start reviving leads—and profits—without delay.
          </p>
        </motion.section>

        <footer className="text-center mt-12 text-sm text-gray-500">
          <h2 className="text-lg font-semibold">Embrulla: Weatherproof Your Business Workflows</h2>
          <p>End the chaos. Take control. Effortlessly convert forgotten leads into steady, reliable revenue.</p>
          <a href="https://calendly.com/tylerdoiron-embrulla" className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Schedule Your Free Lead Revival Audit →
          </a>
        </footer>
      </main>

    </div>
  );
}

