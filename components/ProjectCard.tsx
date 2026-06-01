import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/types/project'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-2)',
        borderRadius: 12,
        overflow: 'hidden',
        textDecoration: 'none',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.2s, transform 0.2s',
      }}
    >
      <div
        className="aspect-video relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-surface-2)' }}
      >
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full" style={{ backgroundColor: 'var(--color-surface-2)' }} />
        )}
      </div>
      <div
        className="flex flex-col gap-1.5"
        style={{ padding: '1.125rem 1.25rem 1.25rem' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'var(--color-text-ghost)',
            letterSpacing: '0.02em',
          }}
        >
          {project.label}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            fontWeight: 400,
            color: 'var(--color-text-primary)',
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h3>
        {project.description && (
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 300,
              lineHeight: 1.55,
              color: 'var(--color-text-secondary)',
            }}
          >
            {project.description}
          </p>
        )}
      </div>
    </Link>
  )
}
