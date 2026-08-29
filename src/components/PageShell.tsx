import type { ReactNode } from 'react'

interface PageShellProps { eyebrow?: string; title: string; description?: string; children: ReactNode }

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return <main><section className="border-b border-[var(--line)] bg-[var(--surface)]"><div className="container-shell py-14 md:py-20">{eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}<h1 className="title-lg max-w-4xl">{title}</h1>{description && <p className="muted mt-5 max-w-3xl text-lg leading-8">{description}</p>}</div></section>{children}</main>
}
