import { PlusIcon } from "lucide-react";
import "./FAQ.css";

// export default function FAQContents() {
//   return (
//     <div className="" style={{ width: "80%", margin: "0 auto" }}>
//       {faqs.map(({ id, question, answer }, i) => (
//         <div
//           className={`question ${openQuestion === id ? "open" : undefined}`}
//           key={id}
//           onClick={() => toggleQuestion(id)}
//         >
//           <div className="question__intro">
//             <p className="question__number">0{i + 1}</p>
//             <p className="question__name">{question}</p>
//             <button className="question__btn">
//               <PlusIcon />
//             </button>
//           </div>
//           {openQuestion === id && (
//             <div className="question__box hidden-box">
//               <div className="question__description">
//                 <p className="question__description--answer">{answer}</p>
//                 <ul>
//                   <li>
//                     Millions of Business Person are already making their lifes
//                     simpler
//                   </li>
//                   <li>
//                     Millions of Business Person are already making their lifes
//                     simpler
//                   </li>
//                   <li>
//                     Millions of Business Person are already making their lifes
//                     simpler
//                   </li>
//                   <li>
//                     Millions of Business Person are already making their lifes
//                     simpler
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

export function FAQTop({ question }) {
  return (
    <div className="question__intro">
      <p className="question__number">0{i + 1}</p>
      <p className="question__name">{question}</p>
      <button className="question__btn">
        <PlusIcon />
      </button>
    </div>
  );
}

export function FAQHidden({ answer }) {
  return (
    <div className="question__box hidden-box">
      <div className="question__description">
        <p className="question__description--answer">{answer}</p>
        <ul>
          <li>
            Millions of Business Person are already making their lifes simpler
          </li>
          <li>
            Millions of Business Person are already making their lifes simpler
          </li>
          <li>
            Millions of Business Person are already making their lifes simpler
          </li>
          <li>
            Millions of Business Person are already making their lifes simpler
          </li>
        </ul>
      </div>
    </div>
  );
}
