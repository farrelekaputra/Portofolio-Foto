import Portrait1 from "../assets/portrait/1.webp"
import Portrait2 from "../assets/portrait/2.webp"
import Portrait3 from "../assets/portrait/3.webp"
import Portrait4 from "../assets/portrait/4.webp"
import Portrait5 from "../assets/portrait/5.webp"
import Portrait6 from "../assets/portrait/6.webp"
import Portrait7 from "../assets/portrait/7.webp"
import Portrait8 from "../assets/portrait/8.webp"
import Portrait9 from "../assets/portrait/9.webp"
import Portrait10 from "../assets/portrait/10.webp"

const PortraitPhoto = () => {
    return (
            <ul className="mainClass flex flex-wrap gap-4 md:gap-8">
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait1} className="w-full h-full object-cover" alt="Portrait 1" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait2} className="w-full h-full object-cover" alt="Portrait 2" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait3} className="w-full h-full object-cover" alt="Portrait 3" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait4} className="w-full h-full object-cover" alt="Portrait 4" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait7} className="w-full h-full object-cover" alt="Portrait 5" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait8} className="w-full h-full object-cover" alt="Portrait 6" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait9} className="w-full h-full object-cover" alt="Portrait 6" /></li>
                <li className="w-full md:w-[calc(31%-0.31rem)] aspect-[2/3] overflow-hidden"><img src={Portrait10} className="w-full h-full object-cover" alt="Portrait 6" /></li>
            </ul>
            )
        }

export default PortraitPhoto