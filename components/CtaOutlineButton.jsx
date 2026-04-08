'use client'

import Link from 'next/link'

/**
 * Pill CTA: solid white border + soft traveling light along the edge.
 */
export default function CtaOutlineButton({
  href,
  children,
  className = '',
  innerClassName = '',
  size = 'default',
}) {
  const sizeClasses =
    size === 'compact' ? 'px-6 py-2 text-sm' : 'px-8 py-3 text-base'

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center rounded-full ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full border border-white"
        aria-hidden
      />
      <span className="cta-border-wedge pointer-events-none absolute inset-0 rounded-full" aria-hidden />
      <span
        className={`relative z-10 m-[2px] flex items-center justify-center rounded-full bg-[#030102] font-medium text-white transition-colors group-hover:bg-white/10 ${sizeClasses} ${innerClassName}`}
      >
        {children}
      </span>
    </Link>
  )
}
