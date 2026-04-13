import type { CaseStudy } from '@/types/portfolio'

export const caseStudies: CaseStudy[] = [
  // ─────────────────────────────────────────────────────────────────────
  // 01 · Knowledge System
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'knowledge-system',
    index: '01',
    type: 'knowledge-system',
    typeLabel: 'Knowledge System',
    systemName: 'Centralized Knowledge Infrastructure for Distributed Teams',
    tagline: 'Replaced fragmented, person-dependent documentation with a self-service information system organized by user intent.',

    context: {
      before:
        'Teams operated from fragmented documentation spread across disconnected sources — shared drives, individual notes, and tribal knowledge held by senior team members. No single source of truth existed.',
      broken:
        'Information existed but was inaccessible at the moment of need. Onboarding required repeated live training because documentation was missing, inconsistently formatted, or impossible to locate without asking someone.',
      affected:
        'All team members across roles — new hires, non-technical stakeholders, and engineers. Senior team members bore disproportionate load fielding repetitive questions.',
    },

    systemDesign: {
      architecture:
        'Content organized by user intent — role, task, and stage of work — not by organizational structure or technical category. This is the critical design decision: most documentation systems fail because they mirror org charts rather than user mental models.',
      dataFlow:
        'Raw knowledge → structured intake templates → taxonomy-mapped content nodes → role-based navigation pathways → progressive disclosure (need-now vs. need-later)',
      diagram: `
  RAW KNOWLEDGE
        │
        ▼
  ┌─────────────────────┐     ┌──────────────────────┐
  │  STRUCTURED INTAKE  │────▶│   TEMPLATE SYSTEM    │
  │  (forms · schemas)  │     │  (contributor model) │
  └─────────────────────┘     └──────────────────────┘
        │
        ▼
  ┌─────────────────────┐     ┌──────────────────────┐
  │   TAXONOMY LAYER    │────▶│   GOVERNANCE MODEL   │
  │  intent · role ·    │     │  ownership · review  │
  │   task · stage      │     │    · update cadence  │
  └─────────────────────┘     └──────────────────────┘
        │
        ▼
  ┌─────────────────────────────────────────┐
  │       ROLE-BASED NAVIGATION             │
  │         progressive disclosure          │
  │      (need-now vs. need-later)          │
  └─────────────────────────────────────────┘
        │
        ▼
       USER
`,
      decisionHierarchy: [
        'Who needs this information?',
        'When in their workflow do they need it?',
        'What decision does this content enable?',
      ],
    },

    intervention: {
      designed:
        'The information architecture — hierarchy, taxonomy, and navigation model — before building any content. Structure preceded content creation.',
      built:
        'A template-driven contribution system that allowed any team member to add documentation without breaking consistency. Onboarding pathways structured as self-contained sequences, not reference documents.',
      changed:
        'Shifted the team\'s mental model from "documentation as archive" to "documentation as operational infrastructure." Established a maintenance protocol with defined ownership and review cadence to prevent knowledge decay.',
    },

    execution: {
      components: [
        'Content taxonomy and metadata schema',
        'Reusable documentation templates (onboarding, process, reference)',
        'Role-based navigation pathways',
        'Governance model (ownership, review cadence)',
      ],
      tools: ['Notion', 'Structured template design', 'Information architecture methodology'],
      decisions: [
        'Template-first contribution model — enforces consistency without creating a documentation bottleneck',
        'User-intent hierarchy over org-structure hierarchy — organized by what users need to do, not by team structure',
        'Separation of "what it is" from "how to use it" in all documentation entries',
      ],
      tradeoffs:
        'Chose breadth of template coverage over depth of any single document — optimized for the team\'s ability to maintain the system independently over time.',
    },

    impact: [
      {
        value: '30–50%',
        label: 'reduction in synchronous onboarding time',
        qualifier: 'conservative estimate',
      },
      {
        value: '0',
        label: 'recurring interrupts from repetitive process questions',
        qualifier: 'eliminated category',
      },
      {
        value: '3+',
        label: 'workflows adopted the template system beyond original scope',
        qualifier: 'reuse signal',
      },
      {
        value: '100%',
        label: 'self-service — no engineering required to find or use information',
        qualifier: 'structural outcome',
      },
    ],

    hiringSignal:
      'Directly analogous to Uber\'s knowledge infrastructure problem at scale — operational knowledge spread across hundreds of city teams, non-technical operators who need self-service access, and documentation that must survive high employee turnover. The decision to organize by user intent over org structure is what separates systems designers from document writers.',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 02 · AI Workflow
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'ai-workflow',
    index: '02',
    type: 'ai-workflow',
    typeLabel: 'AI Workflow',
    systemName: 'AI-Assisted Content Generation Pipeline',
    tagline: 'Replaced manual document production with a structured AI pipeline that separates high-judgment work from low-judgment work.',

    context: {
      before:
        'Document creation was entirely manual — each new deliverable required a contributor to draft, format, structure, and review from scratch. No shared input structure, no enforced output format, no reusable components.',
      broken:
        'Quality was inconsistent because outputs depended on who was writing and when. Volume was constrained by available time. There was no mechanism to separate high-judgment work (deciding what to say) from low-judgment work (structuring how to say it).',
      affected:
        'Content contributors working on recurring document types — onboarding materials, process documentation, structured deliverables. The bottleneck was time-per-document, not knowledge.',
    },

    systemDesign: {
      architecture:
        'The pipeline separates four discrete layers, each with its own responsibility. Prompts are designed as reusable, parameterized components — not one-off instructions. Each prompt accepts defined variables and returns a structured output that maps directly to a template.',
      dataFlow:
        'Structured input → parameterized prompt pipeline → JSON schema enforcement → template rendering → review checkpoint → delivery',
      diagram: `
  STRUCTURED INPUT
  (intake forms · typed schemas per doc type)
        │
        ▼
  ┌─────────────────────────────────────────┐
  │          ORCHESTRATION LAYER            │
  │               Make / n8n               │
  │       trigger · route · deliver         │
  │    (modifiable by non-engineers)        │
  └─────────────────────────────────────────┘
        │
        ▼
  ┌─────────────────────┐
  │   PROMPT PIPELINE   │
  │  parameterized      │
  │  components, not    │
  │  one-off prompts    │
  │                     │
  │  OpenAI / Claude    │
  └─────────────────────┘
        │
        ▼
  ┌─────────────────────┐
  │  JSON SCHEMA        │
  │  ENFORCEMENT        │
  │  typed output       │
  │  before render      │
  └─────────────────────┘
        │
        ▼
  TEMPLATE RENDER ──── REVIEW CHECKPOINT ──── DELIVERY
`,
      decisionHierarchy: [
        'What type of document is being created? (classification)',
        'What structured inputs does this type require? (schema)',
        'What transformation rules apply? (prompt component)',
        'What output format does the consumer need? (template)',
      ],
    },

    intervention: {
      designed:
        'The pipeline architecture — separating input, transformation, output, and orchestration into discrete, independently maintainable layers. Defined the schema for each document type before writing any prompts.',
      built:
        'A library of parameterized prompt components mapped to document types. An orchestration layer in Make/n8n connecting intake → generation → output delivery without manual handoffs.',
      changed:
        'Shifted the workflow from manual production to an oversight-and-review model. Contributors no longer create documents from scratch — they define inputs, review structured outputs, and approve delivery. High-judgment work is preserved; low-judgment work is automated.',
    },

    execution: {
      components: [
        'Structured intake form system (input schema per document type)',
        'Parameterized prompt library (reusable, versioned, typed)',
        'JSON output schema enforcement (before template rendering)',
        'Make/n8n orchestration (trigger → generate → route → deliver)',
        'Review checkpoint layer before output delivery',
      ],
      tools: ['OpenAI API / Claude API', 'Make', 'n8n', 'Notion (output storage)'],
      decisions: [
        'JSON output enforcement before rendering — prevents malformed structure from reaching the output layer',
        'Make/n8n for orchestration — keeps the pipeline modifiable by non-engineers without touching prompt logic',
        'Parameterized prompt components — enables reuse across new document types without rebuilding the pipeline',
      ],
      tradeoffs:
        'Prioritized consistency over flexibility at the generation layer — the pipeline produces reliable, structured output rather than creative variation. Correct for production document workflows.',
    },

    impact: [
      {
        value: '40–60%',
        label: 'reduction in manual document creation time',
        qualifier: 'measured output',
      },
      {
        value: 'N→1',
        label: 'document types served from a single reusable pipeline architecture',
        qualifier: 'structural reuse',
      },
      {
        value: '100%',
        label: 'consistent output structure — no longer dependent on individual contributor availability',
        qualifier: 'quality outcome',
      },
      {
        value: '0',
        label: 'manual handoffs between pipeline stages after orchestration was implemented',
        qualifier: 'eliminated category',
      },
    ],

    hiringSignal:
      'Uber operates at a scale where manual content and documentation processes are categorically non-viable. The decision to enforce structured inputs and typed outputs before generation — rather than prompting loosely and hoping for consistency — reflects production-grade AI system design. This is distinct from "using AI tools" and directly relevant to Uber\'s internal tooling, ops, and platform teams building AI-assisted workflows.',
  },

  // ─────────────────────────────────────────────────────────────────────
  // 03 · Product Engineering
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'product-engineering',
    index: '03',
    type: 'product-engineering',
    typeLabel: 'Product Engineering',
    systemName: 'Multi-Tenant Configurable UI Deployment System',
    tagline: 'Re-architected a hospital software platform from client-specific code to a single config-driven system serving 130+ deployments.',

    context: {
      before:
        'A healthcare software platform serving hospital clients required customized UI for each client deployment. Every visual or behavioral change required engineering involvement. The system had no abstraction layer between client requirements and implementation.',
      broken:
        'The deployment model did not scale. At 130+ hospital clients, the volume of customization requests created a permanent engineering bottleneck. Each new client required bespoke work rather than configuration. There was no shared component language between engineering and design, so implementation errors were frequent and documentation was unreliable.',
      affected:
        'Frontend engineers (bottlenecked by customization requests), non-technical stakeholders (unable to make changes without engineering support), and design teams (working without a reliable source of truth for component behavior).',
    },

    systemDesign: {
      architecture:
        'Three distinct layers with explicit separation of concerns: a configuration layer (structured data objects defining client-specific behavior), a component layer (modular React components consuming configuration as typed inputs), and a documentation layer (Storybook as the canonical source of truth for component API, states, and usage patterns).',
      dataFlow:
        'Client config object → TypeScript prop interface (enforced contract) → component rendering → Storybook documentation (all states verified)',
      diagram: `
  CLIENT CONFIG OBJECT
  { id, theme, features, permissions }
        │
        ▼
  ┌─────────────────────┐
  │  TYPESCRIPT         │
  │  INTERFACE          │
  │  enforced contract  │
  │  between config     │
  │  and components     │
  └─────────────────────┘
        │
        ▼
  ┌─────────────────────────────────────────┐
  │              COMPONENT LAYER            │
  │                                         │
  │  PRESENTATION  ◀────  LOGIC LAYER       │
  │  (React)              (state · rules)   │
  │                                         │
  │  separated — no direct coupling         │
  └─────────────────────────────────────────┘
        │
        ▼
  ┌─────────────────────────────────────────┐
  │         STORYBOOK DOCUMENTATION         │
  │  props · states · patterns ·            │
  │  anti-patterns · real-world examples    │
  └─────────────────────────────────────────┘
        │
        ▼
  130+ CLIENT DEPLOYMENTS
  (single codebase · configuration per client)
`,
      decisionHierarchy: [
        'Is this a configuration concern or a logic concern? (drives where code lives)',
        'What is the component\'s typed interface? (enforces API consistency)',
        'What states must this component handle? (completeness requirement)',
      ],
    },

    intervention: {
      designed:
        'The config-driven architecture — the structural decision that moved client customization out of the codebase and into configuration objects. This is the decision that unlocked non-technical self-service.',
      built:
        'The modular component system and the Storybook documentation infrastructure. Defined TypeScript interfaces as the contract between configuration and components, preventing implementation drift across engineers and clients.',
      changed:
        'Re-architected existing components from client-specific implementations into a reusable, configuration-consuming system. Established Storybook as the shared source of truth between engineering and design — eliminating the ambiguity that caused implementation errors.',
    },

    execution: {
      components: [
        'Config-driven component system (TypeScript interfaces as data contract)',
        'Modular component library (presentation separated from logic)',
        'Storybook documentation (props, state variants, usage patterns, anti-patterns)',
        'Deployment model: single codebase, configuration per client',
      ],
      tools: ['React', 'TypeScript', 'Redux', 'Storybook'],
      decisions: [
        'TypeScript interfaces as enforced contract between config inputs and component behavior — not optional, structural',
        'Storybook anti-patterns documented explicitly — what not to do, not just what to do',
        'State completeness requirement for all components: empty, loading, error, success — no partial implementations',
      ],
      tradeoffs:
        'Upfront investment in abstraction and documentation in exchange for permanent reduction in per-client engineering cost. Break-even crossed quickly at 130+ deployments.',
    },

    impact: [
      {
        value: '130+',
        label: 'hospital websites served from a single configurable codebase',
        qualifier: 'verified',
      },
      {
        value: '0',
        label: 'engineering required for non-technical UI customization',
        qualifier: 'eliminated category',
      },
      {
        value: '~50%',
        label: 'reduction in per-client engineering customization work post-architecture change',
        qualifier: 'conservative estimate',
      },
      {
        value: '1',
        label: 'source of truth for all component behavior — Storybook replaces scattered docs',
        qualifier: 'structural outcome',
      },
    ],

    hiringSignal:
      'Uber\'s core infrastructure challenges are multi-market, multi-operator, multi-configuration at scale. The decision to build config-driven rather than fork code per client is exactly the architectural thinking Uber applies to its own platform systems. TypeScript interfaces as contracts and explicit anti-pattern documentation reflect the engineering maturity hiring managers at Uber recognize as production-grade system design.',
  },
]
