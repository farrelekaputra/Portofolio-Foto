import street1 from "../assets/street/1766854789669.jpg"
import street2 from "../assets/street/1766854789720.jpg"
import street3 from "../assets/street/1766854789767.jpg"
import street4 from "../assets/street/1766854789820.jpg"
import street5 from "../assets/street/1766854789873.jpg"
import street6 from "../assets/street/1766854789926.jpg"
import street7 from "../assets/street/1766854789971.jpg"
import street8 from "../assets/street/1766854790016.jpg"
import street9 from "../assets/street/1766854790066.jpg"

const StreetPhoto = () => {
    return (
        <ul className="mainClass flex flex-wrap gap-4 md:gap-8">
            <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={street1} className="w-full h-full object-cover" alt="Street 1" /></li>
            <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={street2} className="w-full h-full object-cover" alt="Street 2" /></li>
            <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={street3} className="w-full h-full object-cover" alt="Street 3" /></li>
            <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={street4} className="w-full h-full object-cover" alt="Street 4" /></li>
            <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={street5} className="w-full h-full object-cover" alt="Street 5" /></li>
            <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={street6} className="w-full h-full object-cover" alt="Street 6" /></li>
            <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={street7} className="w-full h-full object-cover" alt="Street 7" /></li>
            <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={street8} className="w-full h-full object-cover" alt="Street 8" /></li>
            <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={street9} className="w-full h-full object-cover" alt="Street 9" /></li>
        </ul>
    )
}

export default StreetPhoto