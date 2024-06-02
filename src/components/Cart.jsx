import React, { useEffect, useState } from "react";
import Groq from "groq-sdk";
import { useStateContext } from "../contexts/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default function Cart() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const { currentColor,handleClick,isClicked } = useStateContext();
  async function getGroqChatCompletion() {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: query ? `${query} + in 2 lines` : "Hi",
        },
      ],
      model: "llama3-8b-8192",
    });
  }
  const chat = async () => {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    setResponse(chatCompletion.choices[0]?.message?.content || "");
  };
  useEffect(() => {
    chat();
  }, []);
  return (
    <>
      <div className={`bg-white top-14 right-auto p-4 h-auto w-96 rounded-lg transition-all duration-300 drop-shadow-md fixed z-50 overflow-y-scroll ${isClicked.chat?`md:right-96 ` :`md:right-20 `}` }>
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-semibold ">Dash Chat </p>
            <p className="text-xs font-semibold text-gray-400 ">
              {" "}
              Whats in your mind ?
            </p>
            
          </div>
          <button
              type="button"
              onClick={() => {
                handleClick("cart");
              }}
              style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
              className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <MdOutlineCancel />
            </button>
        </div>
        <div className="">
          {response && (
            <div className="flex justify-start">
              <div className="text-xs font-extralight mt-3 bg-gray-200 text-gray-800 rounded-md p-3">
                {response}
              </div>
            </div>
          )}
          {query && (
            <div className="flex justify-end">
              <div className="text-xs font-extralight mt-3 bg-gray-600 text-white rounded-xl p-3">
                {query}
              </div>
            </div>
          )}
        </div>

        <div className="flex bottom-0 mt-4 bg-white text-gray-700">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Whats next ?"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <button
            type="submit"
            style={{ backgroundColor: currentColor }}
            onClick={chat}
            className={`text-white mb-3 p-2 text-xs ont-thin rounded-md `}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
