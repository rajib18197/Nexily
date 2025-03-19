import { motion } from "framer-motion";
import "./FAQ.css";
import FAQClient from "./FAQClient";
import { FAQHidden, FAQTop } from "./FAQContents";
import { getFAQData } from "@/lib/FAQData";
const faqs = [
  {
    id: 1,
    question: "Do You Ship to countries Outside the Asia?",
    answer:
      "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
  },
  {
    id: 2,
    question: "Do You Ship to countries Outside the Asia?",
    answer:
      "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
  },
  {
    id: 3,
    question: "Do You Ship to countries Outside the Asia?",
    answer:
      "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
  },
  {
    id: 4,
    question: "Do You Ship to countries Outside the Asia?",
    answer:
      "Yes, we do ship to countries outside Asia. Shipping costs and delivery times vary based on location.",
  },
  // Add more questions here
];

export default async function FAQSection() {
  const faqs = await getFAQData();

  return (
    <section id="faq" className="py-20 md:py-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-sub">Have Question in Mind?</h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold text-muted-foreground leading-tight sm:leading-normal max-w-full sm:max-w-3xl sm:text-left">
              Check them all to see if it's already compiled in here
            </p>
          </motion.div>
        </div>
        <FAQClient
          faqs={faqs}
          topPart={<FAQTop />}
          hiddenPart={<FAQHidden />}
        />
      </section>
    </section>
  );
}

// <div
//   key={id}
//   className="border-b border-gray-300 py-4 cursor-pointer"
//   onClick={() => toggleQuestion(id)}
// >
//   <div className="flex justify-between items-center">
//     <p className="font-semibold text-lg">{question}</p>
//     <button className="p-2">
//       <PlusIcon
//         className={`w-5 h-5 transition-transform ${
//           openQuestion === id ? "rotate-45" : ""
//         }`}
//       />
//     </button>
//   </div>
//   {openQuestion === id && (
//     <p className="mt-2 text-gray-700">{answer}</p>
//   )}
// </div>
