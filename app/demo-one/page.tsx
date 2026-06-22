import { ShaderAnimation } from '@/components/ui/neno-shader'

export default function DemoOne() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <ShaderAnimation />
      <span className="absolute pointer-events-none z-10 text-center text-5xl md:text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
        Gaming vibe Shader
      </span>
    </div>
  )
}
