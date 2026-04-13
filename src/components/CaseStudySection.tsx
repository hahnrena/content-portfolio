import type { CaseStudy } from '@/types/portfolio'
import SystemDiagram from './SystemDiagram'
import ImpactGrid from './ImpactGrid'

interface CaseStudySectionProps {
  study: CaseStudy
  background: 'white' | 'gray'
}

// ─── Sub-section wrapper ──────────────────────────────────────────────────────

function Sub({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="pt-12 first:pt-0">
      <div className="divider mb-8" />
      <p className="label mb-6">{label}</p>
      {children}
    </div>
  )
}

// ─── Prose block ──────────────────────────────────────────────────────────────

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-ink-2" style={{ fontSize: '16px', lineHeight: '1.7', maxWidth: '680px' }}>
      {children}
    </p>
  )
}

// ─── Three-column context block ───────────────────────────────────────────────

function ContextBlock({
  before,
  broken,
  affected,
}: {
  before: string
  broken: string
  affected: string
}) {
  const items = [
    { label: 'What existed before', body: before },
    { label: 'What was broken',     body: broken  },
    { label: 'Who was affected',    body: affected },
  ]

  return (
    <div
      className="grid gap-px"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        backgroundColor: '#d2d2d7',
        border: '1px solid #d2d2d7',
        borderRadius: '6px',
        overflow: 'hidden',
      }}
    >
      {items.map(({ label, body }) => (
        <div key={label} className="bg-canvas px-7 py-7">
          <p className="label mb-3">{label}</p>
          <p className="text-ink-2" style={{ fontSize: '15px', lineHeight: '1.65' }}>
            {body}
          </p>
        </div>
      ))}
    </div>
  )
}

// ─── Bullet list ─────────────────────────────────────────────────────────────

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 items-start">
          <span
            style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#aeaeb2', marginTop: '9px', flexShrink: 0 }}
          />
          <span className="text-ink-2" style={{ fontSize: '15px', lineHeight: '1.65' }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

// ─── Intervention block ───────────────────────────────────────────────────────

function InterventionBlock({
  designed,
  built,
  changed,
}: {
  designed: string
  built: string
  changed: string
}) {
  const rows = [
    { label: 'Designed', body: designed },
    { label: 'Built',    body: built    },
    { label: 'Changed',  body: changed  },
  ]

  return (
    <div className="space-y-6">
      {rows.map(({ label, body }) => (
        <div key={label} className="flex gap-8 items-start">
          <span
            className="label shrink-0 pt-px"
            style={{ minWidth: '72px' }}
          >
            {label}
          </span>
          <p className="text-ink-2" style={{ fontSize: '15px', lineHeight: '1.65', maxWidth: '600px' }}>
            {body}
          </p>
        </div>
      ))}
    </div>
  )
}

// ─── Execution block ──────────────────────────────────────────────────────────

function ExecutionBlock({
  components,
  tools,
  decisions,
  tradeoffs,
}: CaseStudy['execution']) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <p className="label mb-4">Components Built</p>
        <BulletList items={components} />
      </div>
      <div>
        <p className="label mb-4">Tools</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="font-mono"
              style={{
                fontSize: '12px',
                padding: '4px 10px',
                backgroundColor: '#f5f5f7',
                border: '1px solid #d2d2d7',
                borderRadius: '4px',
                color: '#1d1d1f',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="label mb-4">Architecture Decisions</p>
        <BulletList items={decisions} />
      </div>
      <div>
        <p className="label mb-4">Tradeoff</p>
        <p className="text-ink-2" style={{ fontSize: '15px', lineHeight: '1.65' }}>
          {tradeoffs}
        </p>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CaseStudySection({ study, background }: CaseStudySectionProps) {
  const bg = background === 'white' ? 'section-white' : 'section-gray'

  return (
    <section
      id={study.id}
      className={`${bg} py-section px-8`}
    >
      <div className="max-w-content mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <p className="label mb-5">
            {study.index}&nbsp;&nbsp;/&nbsp;&nbsp;{study.typeLabel}
          </p>
          <h2
            className="text-ink font-light mb-5"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              maxWidth: '800px',
            }}
          >
            {study.systemName}
          </h2>
          <p className="text-ink-2" style={{ fontSize: '17px', lineHeight: '1.6', maxWidth: '600px' }}>
            {study.tagline}
          </p>
        </div>

        {/* 1 · Context */}
        <Sub label="Context">
          <ContextBlock
            before={study.context.before}
            broken={study.context.broken}
            affected={study.context.affected}
          />
        </Sub>

        {/* 2 · System Design */}
        <Sub label="System Architecture">
          <div className="mb-8">
            <Prose>{study.systemDesign.architecture}</Prose>
          </div>
          <SystemDiagram
            dataFlow={study.systemDesign.dataFlow}
            diagram={study.systemDesign.diagram}
            decisionHierarchy={study.systemDesign.decisionHierarchy}
          />
        </Sub>

        {/* 3 · Intervention */}
        <Sub label="Intervention">
          <InterventionBlock {...study.intervention} />
        </Sub>

        {/* 4 · Execution */}
        <Sub label="Execution">
          <ExecutionBlock {...study.execution} />
        </Sub>

        {/* 5 · Impact */}
        <Sub label="Impact">
          <ImpactGrid metrics={study.impact} />
        </Sub>


      </div>
    </section>
  )
}
