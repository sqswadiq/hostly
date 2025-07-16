import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqData = [
    {
      question: "Is Hostly only for women?",
      answer: "Currently, yes — our Kozhikode hostel is female-only. In the future, we plan to expand to male and mixed accommodations in new cities."
    },
    {
      question: "Do you offer short-term stays?",
      answer: "Yes! We offer daily stays at ₹299/day — perfect for students, events, interviews, or travel. Available for females only at this time."
    },
    {
      question: "What's included in rent?",
      answer: "Wi-Fi, laundry, refrigerator, kitchen access, mattress, locker, and more. All included."
    },
    {
      question: "Where are you located?",
      answer: "Hostly is now open in Kozhikode. More cities launching soon!"
    },
    {
      question: "How do I book a room or visit?",
      answer: "Click \"Book a Free Visit\" to schedule a tour. Online booking is coming soon!"
    }
  ];

  const toggleFaq = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-10 bg-hostly-primary min-h-screen sm:px-4 md:px-5 lg:px-5 -mb-20 md:-mb-0">
      <div className="text-left mb-10">
        <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-2.5 font-sans">
          Frequently Asked
        </h1>
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 font-sans">
          Questions?
        </h2>
      </div>

      <div className="flex flex-col bg-hostly-primary rounded-lg shadow-sm overflow-hidden">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:bg-gray-50 ${
              openIndexes.includes(index) ? 'bg-gray-100' : ''
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full p-6 sm:p-5 md:p-7 bg-transparent border-none cursor-pointer text-left text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-inset transition-colors duration-300"
            >
              <span className="text-lg sm:text-base md:text-lg font-medium font-sans pr-4">
                {faq.question}
              </span>
              <span
                className={`text-xl text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                  openIndexes.includes(index) ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndexes.includes(index)
                  ? 'max-h-48 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-7 pb-6 sm:px-5 sm:pb-5 md:px-7 md:pb-6 text-gray-600 text-base sm:text-sm md:text-base leading-relaxed font-sans">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
