'use client'
import { useState } from 'react'
const Landing = () => {
    const [first, setFirst] = useState(0)

    const text = [
        {top: "Using The Newest", bot: "Blockchain Technology"},
        {top: "100% Secure,", bot: "Paperless, Convenient"},
        {top: "Account Protection", bot: ""},
    ]

    const handleChangeText = (newIndex) => {
        setFirst(newIndex);
      };

      const handleNext = () => {
        // Calculate the index of the next content
        const nextIndex = (first + 1) % text.length;
        setFirst(nextIndex);
    };

  return (
    <div className="font-bold text-[30px] flex flex-col items-center text-white h-full w-full">
        <div className="items-center flex flex-col justify-center h-full">
        <h1>{text[first].top}</h1>
        <h1>{text[first].bot}</h1>
        </div>

        <div className="flex justify-between items-center w-full px-28 pb-12">
            <p className="text-gray-300 cursor-pointer">Skip</p>
            <span className="flex justify-between w-[8rem]">
            {text.map((_, index) => (
            <span
              key={index}
              className={`h-4 w-4 rounded-full ${
                index === first ? 'bg-emerald-400' : 'bg-gray-300'
              }`}
              onClick={() => handleChangeText(index)}
            ></span>
          ))}
            </span>
            <p className="text-emerald-400 cursor-pointer" onClick={handleNext}>Next</p>
        </div>
    </div>
  )
}

export default Landing