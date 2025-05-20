interface PillarPromptProps {
  prompt: string
}

export function PillarPrompt({ prompt }: PillarPromptProps) {
  return (
    <div className="bg-lumi-dark-blue rounded-md p-4 border border-accent hover:border-sky transition-colors cursor-pointer">
      <p className="text-sm">{prompt}</p>
      <div className="mt-3 flex justify-end">
        <button className="text-xs text-lumi-accent-blue hover:text-lumi-light-blue transition-colors">Answer this prompt</button>
      </div>
    </div>
  )
}
