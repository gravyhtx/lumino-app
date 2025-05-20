import Pillars from "@/components/layout/Dashboard/pillars"
import { LayoutProvider } from "@/components/providers/layout-provider"

export default function Page() {
  return (
    <LayoutProvider>
      <Pillars />
    </LayoutProvider>
  )
}
