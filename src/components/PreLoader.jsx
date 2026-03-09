import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"

const PreLoader = ({ onFinish }) => {

  const fullText = "Welcome To My Portfolio Website"

  const [loading, setLoading] = useState(true)
  const [stage, setStage] = useState(1)
  const [fadeScreen, setFadeScreen] = useState(false)

  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

useEffect(() => {
  if (stage === 1 && index < fullText.length) {
    const timer = setTimeout(() => {
      setDisplayText((prev) => prev + fullText[index])
      setIndex((prev) => prev + 1)
    }, 70)

    return () => clearTimeout(timer)
  }
}, [index, stage])

  // setelah animasi selesai → masuk portfolio
  useEffect(() => {
    if (stage === 1 && index === fullText.length) {
      const timer = setTimeout(() => {
        setFadeScreen(true)
        setTimeout(() => {
  setLoading(false)
  onFinish()
}, 1000)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [index, stage])

  if (!loading) return null

  return (
    <div
      className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-1000 ${
        fadeScreen ? "opacity-0" : "opacity-100"
      }`}
    >

      <Aurora
        colorStops={["#2563eb", "#7c3aed", "#ec4899"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      <div className="absolute text-center">


        {stage === 1 && (
<h1
  className="
  text-3xl md:text-5xl font-bold
  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
  bg-clip-text text-transparent
  tracking-wide
  drop-shadow-[0_0_20px_rgba(139,92,246,0.8)]
  max-w-3xl
  "
>
  {displayText}
  <span className="animate-pulse text-white">|</span>
</h1> )}

      </div>

    </div>
  )
}

export default PreLoader