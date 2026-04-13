import type { Metric } from '@/types/portfolio'

interface ImpactGridProps {
  metrics: Metric[]
}

export default function ImpactGrid({ metrics }: ImpactGridProps) {
  return (
    <div
      className="grid gap-px"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        backgroundColor: '#d2d2d7',
        border: '1px solid #d2d2d7',
        borderRadius: '6px',
        overflow: 'hidden',
      }}
    >
      {metrics.map((metric, i) => (
        <div
          key={i}
          className="bg-canvas px-8 py-8 flex flex-col gap-2"
        >
          {/* Value */}
          <p
            className="text-ink font-semibold leading-none"
            style={{ fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.02em' }}
          >
            {metric.value}
          </p>

          {/* Label */}
          <p
            className="text-ink-2"
            style={{ fontSize: '14px', lineHeight: '1.45' }}
          >
            {metric.label}
          </p>

          {/* Qualifier */}
          {metric.qualifier && (
            <p
              className="font-mono"
              style={{ fontSize: '10px', letterSpacing: '0.08em', color: '#aeaeb2', textTransform: 'uppercase' }}
            >
              {metric.qualifier}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
