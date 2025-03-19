"use client";
import { useState } from "react";
import "./FAQ.css";

export default function FAQClient({ faqs, topPart, hiddenPart }) {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    console.log(id);
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="" style={{ width: "80%", margin: "0 auto" }}>
      {faqs.map(({ id, question, answer }, i) => (
        <div
          className={`question ${openQuestion === id ? "open" : undefined}`}
          key={id}
          onClick={() => toggleQuestion(id)}
        >
          {topPart[i]}
          {openQuestion === id && hiddenPart[i]}
        </div>
      ))}
    </div>
  );
}
