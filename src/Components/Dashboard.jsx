import { useEffect, useState } from "react"
import imgMe from "../assets/me1.png"
import { Icon } from "@iconify/react"

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
        className="fixed md:top-8 md:end-8 top-2 end-0 bg-transparent p-4"
        aria-label="Toggle theme"
      >
        {isLight ? (<Icon icon="material-symbols-light:dark-mode-rounded" width={28}/>) : (<Icon icon="material-symbols-light:light-mode-rounded" width={28}/>)}
      </button>

      <div className="heading flex flex-col md:flex-row -mt-8 md:-mt-24 items-center gap-8">
        <img className="md:w-2/5 md:-mt-0 -mt-12 w-4/5" src={imgMe} alt="" />
        <div className="teks flex flex-col gap-2 text-start">
            <h1 className="font-ephesis tetx-6xl md:text-7xl text-yellow-500">Hi, Im Farrel</h1>
            <div className="square h-1 w-full md:w-3/4 bg-yellow-500 md:mt-4 mt-4 "></div>
            <p className="text-justify text-lg mt-2 font-medium">I'm a beginner photographer based in Central Java, Indonesia, who has been exploring photography for the past six months. I mostly shoot street photography, with some portrait work along the way. Hope you enjoy the page!</p>
            <button  
             onClick={() => {
              document.getElementById("gallery")?.scrollIntoView
              ({
                behavior:"smooth",
              })
             }}
             className="p-2 md:w-1/4 w-1/3 mt-4 border-2 border-yellow-500 hover:bg-gray-700">Explore Gallery</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage