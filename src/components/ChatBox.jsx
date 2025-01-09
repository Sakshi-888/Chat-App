import { useState, useEffect, useRef } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: "receiver", text: "Hello! 👋" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "sender", text: input },
      ]);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "receiver", text: "Okay, I will do it!" },
        ]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="flex-1 bg-neutral-900 shadow-lg rounded-xl flex flex-col">
      {/* Chat Header */}
      <div className="bg-zinc-800 p-2 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-10 w-10 rounded-full object-cover"
            alt="User"
          />
          <p className="text-sm font-medium m-2">Caressa Jessalin</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-rose-300">Back</button>
          <button className="hover:text-rose-300">Delete</button>
        </div>
      </div>

      {/* Chat Messages Section */}
      <div
        className="flex-1 overflow-y-auto p-3 space-y-4 max-h-[65vh]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "receiver"
                ? "items-start space-x-4"
                : "items-end justify-end space-x-4"
            }`}
          >
            {message.sender === "receiver" && (
              <img
                src="https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-10 w-10 rounded-full object-cover"
                alt="User"
              />
            )}
            <div
              className={`${
                message.sender === "sender"
                  ? "bg-zinc-800 text-white"
                  : "bg-rose-300 text-black"
              } p-2 rounded-lg max-w-sm`}
            >
              <p>{message.text}</p>
            </div>
            {message.sender === "sender" && (
              <img
                src="https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="h-10 w-10 rounded-full object-cover"
                alt="User"
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 flex items-center space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message"
          className="flex-1 bg-zinc-800 text-white p-3 rounded-full focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-rose-300 text-black p-3 rounded-full hover:bg-rose-400"
        >
          <img src="src/assets/send.png" className="h-6 w-6" alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
