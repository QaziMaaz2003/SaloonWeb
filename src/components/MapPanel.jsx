export default function MapPanel() {
  return (
    <div className="relative aspect-[16/10] w-full border border-line bg-obsidian-2 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#322B21" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
      </svg>

      <svg className="absolute inset-0 h-full w-full opacity-70" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60 L120 60 L120 160 L280 160 L280 40" stroke="#7C5A32" strokeWidth="1.5" fill="none" />
        <path d="M0 220 L200 220 L200 300" stroke="#7C5A32" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze opacity-60" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-bronze-bright" />
          </span>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory mt-4 bg-obsidian/80 px-3 py-1 border border-line">
            Gentry Salon — Fitzgerald Lane
          </p>
        </div>
      </div>
    </div>
  )
}
