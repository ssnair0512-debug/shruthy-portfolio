import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getProject, getProjects } from '@/lib/projects'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = getProjects()
  // "wyd" and "why" have their own static pages
  return projects.filter(p => p.slug !== 'wyd' && p.slug !== 'why').map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Shruthy Nair`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
<main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mobile-only back link */}
        <Link
          href="/"
          className="inline-flex sm:hidden items-center gap-1.5 text-sm mt-8 mb-6 transition-opacity duration-150 hover:opacity-60"
          style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>

        {/* Hero */}
        <section className="pt-10 pb-10 sm:pt-14 md:pt-16">
          <p
            className="mb-4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
            }}
          >
            {project.label}
          </p>
          <h1
            className="mb-6 max-w-3xl"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {project.title}
          </h1>

          {/* Meta row */}
          <div
            className="flex flex-wrap gap-2 pb-6 mb-8 border-b"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'var(--color-surface-2)',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.description && (
            <p
              className="max-w-2xl"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                fontWeight: 300,
                lineHeight: 1.65,
                color: 'var(--color-text-secondary)',
              }}
            >
              {project.description}
            </p>
          )}
        </section>

        {/* Cover image */}
        <div
          className="relative w-full aspect-video overflow-hidden mb-14 md:mb-20"
          style={{ borderRadius: 12, backgroundColor: 'var(--color-surface-2)' }}
        >
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          ) : null}
        </div>

        {/* Placeholder content */}
        <section
          className="pb-20 md:pb-32 max-w-2xl"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)',
          }}
        >
          <p>
            Case study content coming soon. Replace this section with your project writeup,
            process documentation, key decisions, and outcomes.
          </p>
        </section>

      </main>
    </>
  )
}
