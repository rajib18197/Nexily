"use client";
import { useState } from "react";
import "./FAQ.css";

export default function FAQClient({ faqs, topPart, hiddenPart }) {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    console.log(id);
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const TopComponent = topPart;
  const HiddenComponent = hiddenPart;

  return (
    <div className="" style={{ width: "80%", margin: "0 auto" }}>
      {faqs.map(({ id, question, answer }, i) => (
        <div
          className={`question ${openQuestion === id ? "open" : undefined}`}
          key={id}
          onClick={() => toggleQuestion(id)}
        >
          <TopComponent question={question} />
          {openQuestion === id && <HiddenComponent answer={answer} />}
        </div>
      ))}
    </div>
  );
}
