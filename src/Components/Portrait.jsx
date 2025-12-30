import Portrait1 from "../assets/portrait/1.jpg"
import Portrait2 from "../assets/portrait/2.jpg"
import Portrait3 from "../assets/portrait/3.jpg"
import Portrait4 from "../assets/portrait/4.jpg"
import Portrait5 from "../assets/portrait/5.jpg"
import Portrait6 from "../assets/portrait/6.jpg"

const PortraitPhoto = () => {
    return (
            <ul className="mainClass flex flex-wrap gap-4 md:gap-8">
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait1} className="w-full h-full object-cover" alt="Portrait 1" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait2} className="w-full h-full object-cover" alt="Portrait 2" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait3} className="w-full h-full object-cover" alt="Portrait 3" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait4} className="w-full h-full object-cover" alt="Portrait 4" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait5} className="w-full h-full object-cover" alt="Portrait 5" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait6} className="w-full h-full object-cover" alt="Portrait 6" /></li>
            </ul>
            )
        }

export default PortraitPhoto