import { useEffect, useState } from "react"

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
        <img className="w-2/3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBD9kJLV4sOfffui-1LJnW9dGiR9UPneZLsg&s" alt="" />
        <div className="teks flex flex-col gap-2 text-start">
            <h1 className="font-semibold">Hi, Im Farrel</h1>
            <p className="text-justify">Im a beginner photographer who has been exploring photography for the past half year. I mostly shoot street photography, with some portrait work along the way. Hope you enjoy the page!</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage