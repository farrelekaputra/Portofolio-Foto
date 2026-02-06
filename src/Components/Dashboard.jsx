import { useEffect, useState } from "react"
import imgMe from "../assets/me1.png"
import { Icon } from "@iconify/react"
import background from "../assets/bg.webp"
import me from "../assets/fg.webp"

const LandingPage = () => {
  const [isLight, setIsLight] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("light", isLight)
  }, [isLight])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img src={background} alt="Background" className="absolute object-[40%_center] inset-0 w-full h-full object-cover z-0 scale-105" />
      <div className="teks w-full absolute inset-0 flex flex-col mt-24 md:mt-0 md:justify-center justify-start md:gap-44 gap-28 text-white px-6 md:px-8">
        <h1 className="w-full text-5xl mt-2 md:mt-0 z-10 mb-48 md:mb-0 md:ms-32 text-start md:text-7xl font-bold">Hi! I'm Farrel</h1>
        <p className="max-w-2xl z-30 mt-8 md:mt-0 text-justify md:ms-96 md:me-64 md:text-end text-md md:text-lg leading-relaxed">
          I'm a beginner photographer based in Central Java, Indonesia, who has been exploring photography for the past six months. I mostly shoot street photography, with some portrait work along the way. 
        </p>
      </div>
       <button  
      onClick={() => {
        document.getElementById("gallery")?.scrollIntoView
        ({
          behavior:"smooth",
        })
      }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-40 p-2 md:w-1/4 w-1/3 border-2 bg-white text-gray-800">Explore Gallery</button>
      <img src={me} alt="foreground" className="absolute object-[40%_center] inset-0 w-full h-full object-cover z-20 scale-105" />
    </section>
    // <div className="kontenUtama px-8 md:px-20 pt-24 flex h-screen">
    //   <button
    //     onClick={() => setIsLight(!isLight)}
    //     className="fixed md:top-8 md:end-8 top-2 end-0 bg-transparent p-4"
    //     aria-label="Toggle theme"
    //   >
    //     {isLight ? (<Icon icon="material-symbols-light:dark-mode-rounded" width={28}/>) : (<Icon icon="material-symbols-light:light-mode-rounded" width={28}/>)}
    //   </button>

    //   <div className="heading flex flex-col md:flex-row -mt-8 md:-mt-24 items-center gap-8">
    //     <img className="md:w-2/5 md:-mt-0 -mt-12 w-4/5" src={imgMe} alt="" />
    //     <div className="teks flex flex-col gap-2 text-start">
    //         <h1 className="font-ephesis tetx-6xl md:text-7xl text-yellow-500">Hi, Im Farrel</h1>
    //         <div className="square h-1 w-full md:w-3/4 bg-yellow-500 md:mt-4 mt-4 "></div>
    //         <p className="text-justify text-lg mt-2 font-medium">I'm a beginner photographer based in Central Java, Indonesia, who has been exploring photography for the past six months. I mostly shoot street photography, with some portrait work along the way. Hope you enjoy the page!</p>
    //         <button  
    //          onClick={() => {
    //           document.getElementById("gallery")?.scrollIntoView
    //           ({
    //             behavior:"smooth",
    //           })
    //          }}
    //          className="p-2 md:w-1/4 w-1/3 mt-4 border-2 border-yellow-500 hover:bg-gray-700">Explore Gallery</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default LandingPage