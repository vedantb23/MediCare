import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-[20px]"></div>

      <div
        className={`p-4 lg:p-6 rounded-[12px] border mb-6 cursor-pointer transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "bg-blue-50 border-blue-300 shadow-md"
              : "bg-slate-100 border-gray-300 shadow-sm"
          }
          hover:shadow-md`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-[18px] font-medium  text-gray-800">
            {item.question}
          </h4>
          <div
            className={`w-8 h-8 lg:w-9 lg:h-9 border rounded flex items-center justify-center transition-colors duration-300
              ${
                isOpen
                  ? "text-blue-600 bg-blue-100 border-blue-300"
                  : "text-gray-700 border-gray-400"
              }`}
          >
            {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <p className="text-[16px] leading-6 text-gray-600">{item.content}</p>
        </div>
      </div>
    </>
  );
};

export default FaqItem;
