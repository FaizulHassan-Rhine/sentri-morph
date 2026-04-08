'use client'

import CtaOutlineButton from '@/components/CtaOutlineButton'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center overflow-hidden bg-[#030102] px-6 pb-8 pt-28 md:pb-12 md:pt-32"
    >
      {/* Maroon dot mesh + glow — static, top 50% only */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[50%] overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 110% 95% at 50% -18%, rgba(130, 48, 65, 0.72) 0%, rgba(85, 28, 42, 0.42) 38%, rgba(45, 16, 26, 0.18) 58%, transparent 78%),
              radial-gradient(ellipse 60% 52% at 22% 4%, rgba(100, 34, 50, 0.48) 0%, transparent 55%),
              radial-gradient(ellipse 60% 52% at 78% 6%, rgba(100, 34, 50, 0.45) 0%, transparent 55%),
              linear-gradient(to bottom, rgba(75, 24, 38, 0.25) 0%, transparent 45%)
            `,
          }}
        />
        <div className="hero-dot-mesh absolute inset-0 opacity-[0.58] blur-[0.35px]" />
        <div className="hero-dot-mesh-fine absolute inset-0" />
      </div>

      {/* Copy — centered; title largest, body ~⅓ title size, generous vertical rhythm */}
      <div className="relative z-10 mt-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="mb-10 text-balance md:mb-14 lg:mb-6">
          <span className="block text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-[3.25rem] lg:leading-[0.6]">
            Every click is an entry point
          </span>
          <span className="mt-2 block text-[1.75rem] font-light leading-[1.2] tracking-tight text-[#FF4D6D] sm:mt-3 sm:text-[1.6rem] md:text-3xl md:leading-[1.18] lg:mt-4 lg:text-[3.125rem] lg:leading-[1.15]">
            We close every one of them
          </span>
        </h1>

        <p className="mb-12 max-w-2xl text-pretty text-base font-normal leading-[1.75] text-gray-400 md:mb-16 md:text-[1.0625rem] md:leading-[1.7]">
          In today&apos;s connected world, every organization faces invisible risks.
          SentriMorph delivers intelligent protection that shields your data,
          infrastructure, and reputation — so you can focus on growth while we guard
          every digital doorway.
        </p>

        <CtaOutlineButton href="#contact">Get In Touch</CtaOutlineButton>
      </div>

      {/* Hero video */}
      <div className="relative z-[1] mt-10 flex w-full max-w-4xl flex-1 items-end justify-center md:mt-4 lg:max-w-5xl">
        <div className="relative w-full max-w-[min(94vw,640px)] overflow-hidden bg-[#030102]">
          {/* Video stays bright; encoded gray matting is covered by matching side/top/bottom strips */}
          <video
            className="relative z-[1] h-auto w-full bg-[#030102] object-contain object-bottom brightness-[1.1] contrast-[1.06] saturate-[1.08]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          {/* Bands match hero bg — hides off-black pixels baked into the file at left/right (and top/bottom) */}
          <div
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              background: `
                linear-gradient(to right, #030102 0%, #030102 26%, rgba(3,1,2,0.65) 30%, transparent 38%),
                linear-gradient(to left, #030102 0%, #030102 26%, rgba(3,1,2,0.65) 30%, transparent 38%),
                linear-gradient(to bottom, #030102 0%, #030102 18%, rgba(3,1,2,0.5) 24%, transparent 32%),
                linear-gradient(to top, #030102 0%, #030102 16%, rgba(3,1,2,0.5) 22%, transparent 30%)
              `,
            }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}
