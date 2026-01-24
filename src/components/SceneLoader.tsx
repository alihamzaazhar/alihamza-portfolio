import { Html, useProgress } from '@react-three/drei'

const SceneLoader = () => {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-slate-900/80 px-6 py-4 text-white shadow-xl">
        <span className="text-xs uppercase tracking-[0.4em] text-slate-300">
          Loading
        </span>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-slate-700">
          <div
            className="h-full bg-sky-400 transition-all"
            style={{ width: `${Math.round(progress)}%` }}
          />
        </div>
        <span className="text-sm text-slate-200">
          {Math.round(progress)}%
        </span>
      </div>
    </Html>
  )
}

export default SceneLoader
