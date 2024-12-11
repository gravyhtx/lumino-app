"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

// Mock data from database
const initialConversations = [
  {
    id: 1,
    role: "ai",
    message: "Hello! I’m here to assist you with payment insights and reports. What can I help you with?",
  },
  {
    id: 2,
    role: "user",
    message: "Can you show me a report of monthly payments so far this year?",
  },
  {
    id: 3,
    role: "ai",
    message: "Here is a chart displaying your 2024 monthly payment totals:",
    chartData: [
      { month: "Jan", total: 4000 },
      { month: "Feb", total: 3200 },
      { month: "Mar", total: 4500 },
      { month: "Apr", total: 5000 },
      { month: "May", total: 4700 },
      { month: "Jun", total: 5200 },
    ],
  },
];

export default function Chat() {
  const [conversations, setConversations] = useState(initialConversations);
  const [input, setInput] = useState("");

  // Handle user input
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: conversations.length + 1,
      role: "user",
      message: input.trim(),
    };

    const aiResponse = getAIResponse(input.trim());

    setConversations([...conversations, userMessage, aiResponse]);
    setInput("");
  };

  // Mock AI response generator
  const getAIResponse = (message: string) => {
    if (message.toLowerCase().includes("report")) {
      const chartData = [
        { month: "Jan", total: 3000 },
        { month: "Feb", total: 4000 },
        { month: "Mar", total: 5000 },
        { month: "Apr", total: 4500 },
        { month: "May", total: 4800 },
        { month: "Jun", total: 5200 },
      ];

      return {
        id: conversations.length + 2,
        role: "ai",
        message: "Here is the bar chart displaying your requested report:",
        chartData,
      };
    }

    return {
      id: conversations.length + 2,
      role: "ai",
      message: "I'm not sure how to help with that. Could you clarify?",
    };
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h1 className="text-lg font-bold">New Chat</h1>

      {/* Chat Window */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {/* {conversations.map((conv) => (
          <div key={conv.id} className="flex flex-col">
            <p
              className={`${
                conv.role === "ai" ? "text-blue-600" : "text-gray-800"
              } font-medium`}
            >
              {conv.role === "ai" ? "AI:" : "You:"}
            </p>
            <p className="mb-2">{conv.message}</p>
            {conv.chartData && (
              <div className="p-4 bg-gray-100 rounded-lg">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={conv.chartData}>
                    <XAxis dataKey="month" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip />
                    <Bar dataKey="total" fill="#4F46E5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        ))} */}
        <br/><br/><br/><br/><br/><br/><br/>
      </div>

      {/* Input Box */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}