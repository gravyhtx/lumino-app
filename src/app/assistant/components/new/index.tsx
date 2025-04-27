"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PlusIcon, Globe, Telescope, Ellipsis } from "lucide-react"

export default function ChatClone() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")
  const [thinking, setThinking] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [...prev, input.trim()])
    setThinking(true)
    setInput("")
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto"
      inputRef.current.style.height = inputRef.current.scrollHeight + "px"
    }
  }, [input])

  const randomMessage = () => {
    const messages = ["What can I help you with?", "Need assistance?", "How can I assist you today?", "Where should we begin?"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-64px)] px-4">
      <div className="w-full max-w-2xl flex flex-col gap-4">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-xl font-bold">{thinking ? "New Chat" : randomMessage()}</h1>
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

        {/* Input Bar */}
        <div className="flex items-end border border-border rounded-full p-2 bg-background shadow-inner">
          <Button variant="ghost" size="icon" className="rounded-full">
            <PlusIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="gap-2">
            <Globe className="w-4 h-4" /> Search
          </Button>
          <Button variant="ghost" className="gap-2">
            <Telescope className="w-4 h-4" /> Deep Research
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Ellipsis className="w-5 h-5" />
          </Button>
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 resize-none overflow-hidden border-none bg-transparent outline-none text-sm p-2"
          />
          <Button onClick={handleSend} className="rounded-full h-9 px-4 font-semibold">
            Send
          </Button>
        </div>

      </div>
    </div>
  )
}
