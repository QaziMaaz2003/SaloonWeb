import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 font-mono text-xs tracking-[0.18em] uppercase transition-all duration-300 ease-out px-8 py-4 whitespace-nowrap'

const variants = {
  primary:
    'bg-bronze text-obsidian hover:bg-bronze-bright shadow-[0_0_0_1px_rgba(188,146,87,0.4)] hover:shadow-[0_0_24px_rgba(188,146,87,0.35)]',
  outline:
    'border border-bronze-deep text-ivory hover:border-bronze hover:text-bronze-bright',
  ghost:
    'text-ivory-dim hover:text-bronze-bright',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
