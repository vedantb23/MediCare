import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { authContext } from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";
import AIResultCard from "../components/AIResultCard.jsx";
import { useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const SymptomChat = () => {
  // const bottomRef = useRef(null);

  const { token } = useContext(authContext);
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [Doctor_send, setDoctor_send] = useState(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    // push user message
    setMessages((prev) => [
      ...prev,
      { sender: "user", type: "text", content: input },
    ]);

    const symptoms = input;
    setInput("");
    setLoading(true);

    //ML-model API: https://shamalllll-medicare-ml-backend.hf.space/
    try {
      const fetchPromise = fetch(
        `https://shamalllll-medicare-ml-backend.hf.space/predict`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ symptoms }),
        },
      ).then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Server busy");
        }

        return data;
      });

      const data = await toast.promise(fetchPromise, {
        loading: "Generating AI response...",
        success: "Done!",
        error: (err) => err.message || "Server busy. Try later.",
      });
      console.log("ML output", data);
      // push AI structured result
      // "General Medicine"
      const dt = await fetch(
        "https://medicare-6y20.onrender.com/api/v1/doctors/doctorbyspecialization",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            specialization: data.specialization,
          }),
        },
      );

      const result = await dt.json();
      if (!result) {
        const getGenralDoctor = await fetch(
          `${BASE_URL}/doctors/696e5033e61ef7b57b3b7b29`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },

        );
        const generalDocData = await getGenralDoctor.json();
        setDoctor_send(generalDocData);
        console.log("Fetched General Med Doctor->", generalDocData);
      }
      else {
        
        console.log("recieved this doctor from ML model->", result);
        setDoctor_send(result);
      }

      setMessages((prev) => [
        ...prev,
        { sender: "ai", type: "result", content: data },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          type: "text",
          content: err.message || "AI busy. Try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }

    //this is old groq llm AI API backend
    // try {
    //   const fetchPromise = fetch(`${BASE_URL}/ai/triage`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({ symptoms }),
    //   }).then(async (res) => {
    //     const data = await res.json();

    //     if (!res.ok) {
    //       throw new Error(data.message || "Server busy");
    //     }

    //     return data;
    //   });

    //   const data = await toast.promise(fetchPromise, {
    //     loading: "Generating AI response...",
    //     success: "Done!",
    //     error: (err) => err.message || "Server busy. Try later.",
    //   });

    //   // push AI structured result
    //   setMessages((prev) => [
    //     ...prev,
    //     { sender: "ai", type: "result", content: data },
    //   ]);
    // } catch (err) {
    //   setMessages((prev) => [
    //     ...prev,
    //     {
    //       sender: "ai",
    //       type: "text",
    //       content: err.message || "AI busy. Try again later.",
    //     },
    //   ]);
    // } finally {
    //   setLoading(false);
    // }

    //OLD CODE

    // try {
    //   const res = await fetch(`${BASE_URL}/ai/triage`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({ symptoms }),
    //   });

    //   const data = await res.json();

    //   if (!res.ok) {
    //     throw new Error(data.message || "AI is busy or failed. Please try again.");
    //   }

    //   // push AI structured result
    //   setMessages((prev) => [
    //     ...prev,
    //     { sender: "ai", type: "result", content: data },
    //   ]);
    // } catch (err) {
    //   setMessages((prev) => [
    //     ...prev,
    //     {
    //       sender: "ai",
    //       type: "text",
    //       content: "AI busy/Plz try after 60 seconds ",
    //     },
    //   ]);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    // <section className="m-auto min-h-[70vh] bg-gray-100 flex flex-col max-w-[80vw]">
    <section className="top-0 mx-auto h-[90vh] bg-gray-100 flex flex-col max-w-[80vw]">
      {/* CHAT AREA */}
      {/* <button onClick={notify}>Make me a toast</button> */}
      <Toaster />
      <div className=" mx-auto ">
        AI-driven symptom triage using our internal doctor database
      </div>
      <div className="flex-1 p-1 space-y-4 overflow-y-auto">
        {messages.map((msg, idx) => {
          if (msg.type === "text") {
            return (
              <div
                key={idx}
                className={`max-w-xl p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {msg.content}
              </div>
            );
          }

          if (msg.type === "result") {
            return (
              <AIResultCard key={idx} data={msg.content} doctor={Doctor_send} />
            );
          }

          return null;
        })}
      </div>
      {/* <div ref={bottomRef} /> */}

      {/* INPUT */}
      <div className="p-4 bg-white border-t flex gap-2">
        <input
          type="text"
          placeholder="Describe your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? <HashLoader size={18} color="#fff" /> : "Send"}
        </button>
      </div>

      {/* <div className="h-2  bg-red-500"></div> */}
    </section>
  );
};

export default SymptomChat;
