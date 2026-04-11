// Add this CSS to your globals.css or a <style> tag
// .ai-chip — the container pill
// .ai-dot  — the pulsing indicator dot
// Tailwind version below 👇

export function AIReadyChip() {
  return (
    <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-md px-2.5 py-0.5 border border-white/10 bg-white/5 align-middle">
      {/* scan line shimmer */}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-1/4 animate-[scan_2.4s_linear_infinite] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
      {/* pulsing dot */}
      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
      {/* text */}
      <span className="text-emerald-400 font-medium">AI-Ready</span>
    </span>
  );
}
