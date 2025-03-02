import { useState } from "react"
import { Bot, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ChatBox() {
  const [message, setMessage] = useState("")

  return (
    <Card className="border-glass-border bg-muted/40">
      <CardHeader className="flex flex-row items-center gap-2">
        <Bot className="h-5 w-5" />
        <CardTitle className="text-sm">AI Assistant</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        How can I help you today?
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
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="glass-effect"
          />
          <Button type="submit" size="icon" className="glass-effect dark:text-muted-foreground">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}