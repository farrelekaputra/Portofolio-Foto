import { useEffect, useState } from "react"
import imgMe from "../assets/me1.png"

const LandingPage = () => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("light", isLight)
  }, [isLight])

  return (
    <div className="kontenUtama px-8 md:px-20 pt-24 flex h-screen">
      <button
        onClick={() => setIsLight(!isLight)}
        className="fixed top-8 end-8 bg-transparent p-4"
        aria-label="Toggle theme"
      >
        {isLight ? "🌙" : "☀️"}
      </button>

      <div className="heading flex flex-col md:flex-row -mt-8 md:-mt-24 items-center gap-8">
        <img className="md:w-2/5 md:-mt-0 -mt-12 w-4/5" src={imgMe} alt="" />
        <div className="teks flex flex-col gap-2 text-start">
            <h1 className="font-semibold">Hi, Im Farrel</h1>
            <div className="square h-1 w-3/4 bg-blue-400 md:mt-8 mt-4"></div>
            <p className="text-justify">I'm a beginner photographer based in Central Java, Indonesia, who has been exploring photography for the past six months. I mostly shoot street photography, with some portrait work along the way. Hope you enjoy the page!</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage