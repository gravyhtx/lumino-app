"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, Globe, Telescope, AudioLines, ArrowUp, Mic, Ellipsis, Square, StopCircle } from "lucide-react";

export default function ChatClone() {
  const [messages, setMessages] = useState<string[]>([]);
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, input.trim()]);
    setThinking(true);
    setInput("");
  };

  const randomMessage = () => {
    const messages = [
      "What can I help you with?",
      "Need assistance?",
      "How can I assist you today?",
      "Where should we begin?",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return String(messages[randomIndex]);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
    if (!welcomeMessage) setWelcomeMessage(randomMessage());
  }, [input]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <div className="w-full max-w-2xl flex flex-col gap-4 justify-center">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-xl font-bold">{thinking ? "New Chat" : welcomeMessage}</h1>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-4 overflow-y-auto">
          {messages.map((msg, i) => (
            <div key={i} className="self-end max-w-[75%] p-3 rounded-lg bg-blue-500 text-white">
              {msg}
            </div>
          ))}
          {thinking && (
            <div className="self-start max-w-[75%] p-3 rounded-lg bg-muted text-muted-foreground animate-pulse">
              Thinking...
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="flex flex-col border border-border rounded-2xl bg-background shadow-inner p-2 w-full">
          {/* Input Row */}
          <div className="w-full">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full resize-none overflow-hidden border-none bg-transparent outline-none text-sm p-2"
            />
          </div>

          {/* Buttons Row */}
          <div className="flex items-center justify-between gap-2 mt-2">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full border-2 border-muted/40">
                <PlusIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="gap-2 border-2 border-muted/40">
                <Globe className="w-4 h-4" /> Search
              </Button>
              <Button variant="ghost" className="gap-2 border-2 border-muted/40">
                <Telescope className="w-4 h-4" /> Deep Research
              </Button>
              <Button variant="ghost" className="gap-2 border-2 border-muted/40">
                <Ellipsis className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" className="gap-2 border-2 border-muted/40">
                <Mic className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleSend}
                className="rounded-full h-9 px-4 font-semibold"
                disabled={!input.trim()}
              >
                {input.trim() ? (
                  <ArrowUp className="h-5 w-5" />
                ) : !thinking ? (
                    <AudioLines className="h-5 w-5" />
                  ) : (
                    <StopCircle className="h-5 w-5" />
                  )}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
