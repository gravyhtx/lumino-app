"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusIcon, Globe, Telescope, Ellipsis, Mic } from "lucide-react"

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
    <div className="flex flex-col h-screen p-6 space-y-4">
      <h1 className="text-xl font-bold">{thinking ? "New Chat" : randomMessage()}</h1>

      <div className="flex-1 overflow-y-auto space-y-4">
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

      <div className="w-full flex items-end border border-border rounded-full p-1 bg-background shadow-inner">
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
  )
}