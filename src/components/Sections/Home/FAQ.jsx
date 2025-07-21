import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./FAQAccordion.css";

const faqs = [
  {
    question: "What are the benefits of joining IEEE?",
    answer:
      "Benefits include access to IEEE publications, conferences, networking opportunities, professional development resources, and discounts on IEEE products and services.",
  },
  {
    question: "How can I access IEEE research papers and publications?",
    answer:
      "IEEE members can access research papers and publications through the IEEE Xplore digital library. Non-members can purchase individual papers or subscribe to the library.",
  },
  {
    question: "What conferences and events does IEEE organize?",
    answer:
      "IEEE organizes a variety of conferences and events worldwide, covering various technology fields. You can find upcoming events on the IEEE events calendar.",
  },
  {
    question: "What professional development resources does IEEE offer?",
    answer:
      "IEEE offers webinars, online courses, certification programs, and other resources to help members enhance their skills and advance their careers.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <motion.h2
        className="faq-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`faq-box ${openIndex === index ? "open" : ""}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="faq-button"
            >
              {faq.question}
              <ChevronDown
                className={`faq-chevron ${openIndex === index ? "open" : ""}`}
              />
            </button>
            <div
              className={`faq-answer ${
                openIndex === index ? "open" : "closed"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
