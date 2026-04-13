export type CaseStudyType =
  | 'knowledge-system'
  | 'ai-workflow'
  | 'product-engineering'

export interface Metric {
  value: string
  label: string
  qualifier?: string // e.g. "conservative estimate"
}

export interface CaseStudyContext {
  before: string
  broken: string
  affected: string
}

export interface SystemDesign {
  architecture: string    // prose description
  dataFlow: string        // inline data-flow narrative
  diagram: string         // pre-formatted ASCII diagram
  decisionHierarchy: string[]
}

export interface Intervention {
  designed: string
  built: string
  changed: string
}

export interface Execution {
  components: string[]
  tools: string[]
  decisions: string[]
  tradeoffs: string
}

export interface CaseStudy {
  id: string
  index: string           // "01", "02", "03"
  type: CaseStudyType
  typeLabel: string       // human-readable type
  systemName: string
  tagline: string
  context: CaseStudyContext
  systemDesign: SystemDesign
  intervention: Intervention
  execution: Execution
  impact: Metric[]
  hiringSignal: string
}
