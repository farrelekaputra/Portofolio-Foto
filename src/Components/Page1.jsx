import StreetPhoto from "./Street"
import PortraitPhoto from "./Portrait"
import AboutMe from "./Me"
import { useState } from "react"

const Halaman1 = () => {
  const [activeTab, setActiveTab] = useState("street")

  return (
    <div id="gallery" className="w-full overflow-x-hidden px-4 md:px-20 mb-24 -mt-6">
        <div className="border-t-2 md:block hidden sticky top-0"></div>

      {/* TAB HEADER */}
      <header className="flex md:gap-8 gap-2 pb-2 md:pb-4 mb-4 md:mb-8 mt-8 md:mt-12 items-center justify-center">
        <button
          onClick={() => setActiveTab("street")}
          className={activeTab === "street"
            ? "font-bold border-b-2 border-b-blue-400 bg-transparent rounded-none focus:outline-none text-lg"
            : "opacity-60 hover:opacity-100 bg-transparent border-none rounded-none focus:outline-none text-lg"}
        >
          Event
        </button>

        <button
          onClick={() => setActiveTab("portrait")}
          className={activeTab === "portrait"
            ? "font-bold border-b-2 border-b-blue-400 bg-transparent rounded-none focus:outline-none text-lg"
            : "opacity-60 hover:opacity-100 bg-transparent border-none rounded-none focus:outline-none text-lg"}
        >
          Portrait
        </button>

        <button
          onClick={() => setActiveTab("about")}
          className={activeTab === "about"
            ? "font-bold border-b-2 border-b-blue-400 bg-transparent rounded-none focus:outline-none text-lg"
            : "opacity-60 hover:opacity-100 bg-transparent border-none rounded-none focus:outline-none text-lg"}
        >
          About Me
        </button>
      </header>

      {/* KONTEN */}
      {activeTab === "street" && <StreetPhoto/>}
      {activeTab === "portrait" && <PortraitPhoto/>}
      {activeTab === "about" && <AboutMe/>}

    </div>
  )
}

export default Halaman1