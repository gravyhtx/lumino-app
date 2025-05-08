import { useState } from "react"
import { AudioLines, Bot, Plus, Send, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { motion } from 'framer-motion';

export function ChatBox() {
  const [message, setMessage] = useState("")
  const [expanded, setExpanded] = useState(false)
  const quickPrompts = [
    "Quick prompt #1",
    "Quick prompt #2",
    "Quick prompt #3"
  ];

  return (
    <motion.div className={cn(
      "fixed bottom-0 left-0 z-99 border-glass-border mx-2 mb-4 bg-muted/40 shadow-lg rounded-xl transition-all",
      expanded ? "h-[320px]" : ""
      )}>
    <Card className={
      cn("relative flex flex-col h-full w-full",
      )}
      onClick={() => setExpanded(!expanded)}>
      <CardHeader className="flex flex-row items-center gap-2">
        <Sparkles className="h-5 w-5" />
        <CardTitle className="text-sm">AI Assistant</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
      {
        expanded ? (
          quickPrompts.map((prompt, index) => (
            <Button
              key={index}
              className="w-full mb-2 dark:text-muted-foreground text-left glass-effect rounded-xl border shadow-lg hover:bg-muted/60"
            >
              <ul className={`flex items-center p-2last:mb-0 italic`}>
              <Bot className="h-4 w-4 mr-2 shrink-0" />
              {prompt}
              </ul> 
            </Button>
          ))
        ) : (
          "How can I help you today?"
        )
      }
      </CardContent>
      <CardFooter>
        <form 
          className="flex w-full gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            // Handle message submission
            setMessage("")
          }}
        >
          {/* {expanded &&
          <Button size="icon" className="glass-effect dark:text-muted-foreground">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Voice message</span>
          </Button>} */}
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="glass-effect"
          />
          <Button type="submit" size="icon" className="glass-effect dark:text-muted-foreground">
            {message === "" ?
            <><AudioLines className="h-4 w-4" />
            <span className="sr-only">Voice message</span></> :
            <><Send className="h-4 w-4" />
            <span className="sr-only">Send message</span></>}
          </Button>
        </form>
      </CardFooter>
    </Card>
    </motion.div>
  )
}