export default function RazorDivider({ align = 'left', className = '' }) {
  const justify =
    align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'

  return (
    <div className={`flex ${justify} ${className}`} aria-hidden="true">
      <span className="razor-line block h-px w-16 bg-linear-to-r from-bronze to-bronze-deep" />
    </div>
  )
}
