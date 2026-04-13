import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CaseStudySection from '@/components/CaseStudySection'
import { caseStudies } from '@/data/case-studies'

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />

        {caseStudies.map((study, i) => (
          <CaseStudySection
            key={study.id}
            study={study}
            background={i % 2 === 0 ? 'gray' : 'white'}
          />
        ))}
      </main>

      <footer
        className="section-gray px-8 py-16"
        style={{ borderTop: '1px solid #d2d2d7' }}
      >
        <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-ink font-medium text-sm mb-1">Rena Hahn</p>
            <p className="text-ink-2 text-sm">
              Frontend Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Knowledge Systems&nbsp;&nbsp;·&nbsp;&nbsp;AI Workflows
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="mailto:renabhahn@gmail.com"
              className="text-sm text-ink-2 hover:text-ink transition-colors"
            >
              renabhahn@gmail.com
            </a>
            <span className="text-sm text-ink-3">New Jersey</span>
          </div>
        </div>
      </footer>
    </>
  )
}
