import { Header } from '@/components/Header';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Carousel } from '@/components/Carousel';
import { ParticleBackground } from '@/components/ParticleBackground';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Header />

      <main className="min-h-screen">
        {/* Hero Section with Carousel */}
        <Section className="pt-10 pb-8">
          {/* Carousel */}
          <div className="mt-4">
            <Carousel />
          </div>

          <div
            id="contact"
            className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-12"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border border-slate-200/80" />
              <div className="absolute bottom-0 right-0 h-40 w-64 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_60%)]" />
              <div className="absolute left-8 top-8 h-10 w-10 rounded-full border border-slate-200/80" />
              <div className="absolute right-10 top-10 h-px w-16 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
              Start a Project
            </p>
            <h2 className="mt-3 text-3xl font-light text-slate-900 sm:text-4xl">
              Build a clean, high-converting site that feels futuristic.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              I design and develop modern experiences that load fast, look
              premium, and convert visitors into inquiries.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="https://calendly.com"
                variant="primary"
                external
              >
                Book a Call
              </Button>
              <Button
                href="mailto:hello@andrewrapier.com"
                variant="secondary"
                external
              >
                Send Inquiry
              </Button>
              <Button
                href="tel:+1-000-000-0000"
                variant="secondary"
                external
                className="border-slate-300 text-slate-700 hover:border-slate-400"
              >
                Call Now
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-[11px] uppercase tracking-[0.3em] text-slate-400">
              <span>Fast turnaround</span>
              <span>Conversion focused</span>
              <span>Clear next steps</span>
            </div>
          </div>
        </Section>

        {/* Services & Booking Section */}
        <Section variant="default">
          <div className="mx-auto max-w-4xl">
            {/* Services */}
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-light text-slate-900">
                What I Do
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="group rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-slate-300">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white">
                  <svg
                    className="h-5 w-5 text-slate-500 transition-colors group-hover:text-slate-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-medium text-slate-700">
                  Design
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  Clean, modern interfaces that convert
                </p>
              </div>

              <div className="group rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-slate-300">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white">
                  <svg
                    className="h-5 w-5 text-slate-500 transition-colors group-hover:text-slate-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-medium text-slate-700">
                  Development
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  Fast, scalable Next.js applications
                </p>
              </div>

              <div className="group rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-slate-300">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white">
                  <svg
                    className="h-5 w-5 text-slate-500 transition-colors group-hover:text-slate-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-medium text-slate-700">
                  Optimization
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  Performance and conversion focused
                </p>
              </div>
            </div>

            {/* Industries */}
            <div className="mt-20 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                Expertise
              </p>
              <h2 className="mt-3 text-2xl font-light text-slate-900">
                Industries
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
                  Construction
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
                  SaaS
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
                  E-commerce
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
                  Finance
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
                  Music & Entertainment
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mx-auto mt-24 max-w-4xl border-t border-slate-200 pt-12">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-xs text-slate-400">
                © {new Date().getFullYear()} Andrew Rapier
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-slate-600"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-slate-600"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-slate-600"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </Section>
      </main>
    </>
  );
}
