import StreetPhoto from "./Street"
import PortraitPhoto from "./Portrait"
import AboutMe from "./Me"
import { useState } from "react"

const Halaman1 = () => {
  const [activeTab, setActiveTab] = useState("street")

  return (
    <div className="px-8 md:px-20 mb-24">
        <div className="border-t-2 sticky top-0"></div>

      {/* TAB HEADER */}
      <header className="flex gap-8 pb-4 mb-8 mt-12">
        <button
          onClick={() => setActiveTab("street")}
          className={activeTab === "street"
            ? "font-bold border-b-2 border-b-blue-400 bg-transparent rounded-none focus:outline-none"
            : "opacity-60 hover:opacity-100 bg-transparent border-none rounded-none focus:outline-none"}
        >
          Street
        </button>

        <button
          onClick={() => setActiveTab("portrait")}
          className={activeTab === "portrait"
            ? "font-bold border-b-2 border-b-blue-400 bg-transparent rounded-none focus:outline-none"
            : "opacity-60 hover:opacity-100 bg-transparent border-none rounded-none focus:outline-none"}
        >
          Portrait
        </button>

        <button
          onClick={() => setActiveTab("about")}
          className={activeTab === "about"
            ? "font-bold border-b-2 border-b-blue-400 bg-transparent rounded-none focus:outline-none"
            : "opacity-60 hover:opacity-100 bg-transparent border-none rounded-none focus:outline-none"}
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