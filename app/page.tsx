import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/splite'

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
      </section>
    </main>
  )
}
