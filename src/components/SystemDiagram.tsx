interface SystemDiagramProps {
  dataFlow: string
  diagram: string
  decisionHierarchy: string[]
}

export default function SystemDiagram({
  dataFlow,
  diagram,
  decisionHierarchy,
}: SystemDiagramProps) {
  return (
    <div className="space-y-8">

      {/* Data flow summary */}
      <div>
        <p className="label mb-3">Data Flow</p>
        <p
          className="font-mono text-ink-2"
          style={{ fontSize: '13px', lineHeight: '1.6' }}
        >
          {dataFlow}
        </p>
      </div>

      {/* ASCII diagram */}
      <div className="diagram-block">
        <pre>{diagram}</pre>
      </div>

      {/* Decision hierarchy */}
      <div>
        <p className="label mb-4">Decision Hierarchy</p>
        <ol className="space-y-2">
          {decisionHierarchy.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span
                className="font-mono shrink-0"
                style={{ fontSize: '11px', color: '#aeaeb2', marginTop: '2px' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-ink-2" style={{ fontSize: '15px' }}>
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>

    </div>
  )
}
