import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/splite'
import { ShaderAnimation } from '@/components/ui/neno-shader'
import { HeroScrollDemo } from '@/components/ui/hero-scroll-demo'

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8 sm:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            warxone interactive experience
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Immersive 3D storytelling for your hero section
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg">
            Use a responsive 3D spline scene with ambient motion and spotlight effects to make your hero section feel alive.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/demo-one"
              className="rounded-full bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-300"
            >
              View shader demo
            </Link>
            <span className="text-sm text-slate-400">or explore the 3D Spline hero above.</span>
          </div>
        </div>

        <Card className="relative overflow-hidden border border-white/10 bg-black/75 shadow-2xl">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
              <span className="inline-flex rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">
                Hero size: 500px tall
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Bring your UI to life with beautiful 3D scenes.
              </h2>
              <p className="max-w-xl text-slate-300">
                Build immersive hero sections with motion, depth, and interactive lighting so your product feels modern and premium.
              </p>
            </div>
            <div className="min-h-[500px] bg-slate-950/80">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
            </div>
          </div>
        </Card>

        <section className="mt-12 rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-2xl">
          <div className="overflow-hidden rounded-3xl bg-black">
            <div className="relative h-[520px] w-full">
              <ShaderAnimation />
              <div className="absolute inset-x-0 bottom-0 rounded-b-3xl bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Shader animation experience
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Gaming vibe shader after the hero section
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-2xl">
          <div className="overflow-hidden rounded-3xl bg-black">
            <div className="relative w-full">
              <HeroScrollDemo />
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
