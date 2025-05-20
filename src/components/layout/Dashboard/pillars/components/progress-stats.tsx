export function ProgressStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[#131629] rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">2</h3>
        <p className="text-sm text-lumi-accent-yellow">Pillars Completed</p>
      </div>

      <div className="bg-[#131629] rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">4</h3>
        <p className="text-sm text-lumi-accent-green">Pillars In Progress</p>
      </div>

      <div className="bg-[#131629] rounded-xl p-6">
        <h3 className="text-xl font-bold mb-2">42%</h3>
        <p className="text-sm text-lumi-accent-blue">Overall Protocol Progress</p>
      </div>
    </div>
  )
}
