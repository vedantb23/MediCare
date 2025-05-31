import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react';

const FaqItem = ({item}) => {
    const [isOpen, setisOpen] = useState(false)
    const toggleAccoding=() => {
      setisOpen(!isOpen)
    }
    
    return (
      <>
        <div className="h-[20px]"></div>

        <div className="p-4 lg:p-6 rounded-[12px] border border-gray-300 shadow-sm mb-6 transition-all duration-300 ease-in-out hover:shadow-md cursor-pointer">
          <div
            className="flex items-center justify-between gap-4"
            onClick={toggleAccoding}
          >
            <h4 className="text-[18px] font-medium text-gray-800">
              {item.question}
            </h4>
            <div
              className={`w-8 h-8 lg:w-9 lg:h-9 border border-gray-400 rounded flex items-center justify-center transition-colors duration-300 ${
                isOpen
                  ? "text-blue-600 bg-blue-50 border-blue-300"
                  : "text-gray-700"
              }`}
            >
              {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>

          {isOpen && (
            <div className="mt-4">
              <p className="text-[16px] leading-6 text-gray-600">
                {item.content}
              </p>
            </div>
          )}
        </div>
      </>
    );
}

export default FaqItem
