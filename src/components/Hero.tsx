export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-24 pt-32 px-8 section-white">
      <div className="max-w-content mx-auto w-full">

        {/* Eyebrow */}
       

        {/* Headline */}
        <h1
          className="text-ink font-light mb-10"
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: '1.07',
            letterSpacing: '-0.03em',
            maxWidth: '820px',
          }}
        >
          I build systems that make complex workflows and information usable at scale.
        </h1>

        {/* Supporting line */}
        <p
          className="text-ink-2 font-light"
          style={{ fontSize: '20px', lineHeight: '1.5', maxWidth: '520px' }}
        >
          Through structured content design, frontend engineering, and AI automation — not feature lists.
        </p>

        {/* Divider + scroll cue */}
        <div className="mt-20 flex items-center gap-6">
          <div className="divider flex-1" />
          <span className="label">3 Case Studies</span>
          <div className="divider w-8" />
        </div>

      </div>
    </section>
  )
}
