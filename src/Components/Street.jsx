import event1 from "../assets/event/1.webp"
import event2 from "../assets/event/2.webp"
import event3 from "../assets/event/3.webp"
import event5 from "../assets/event/5.webp"
import event6 from "../assets/event/6.webp"
import event7 from "../assets/event/7.webp"
import event8 from "../assets/event/8.webp"
import event9 from "../assets/event/9.webp"
import event10 from "../assets/event/10.webp"
import event11 from "../assets/event/11.webp"

const StreetPhoto = () => {
    return (
        <ul className="mainClass w-full flex flex-wrap gap-4">
            <li className="w-full md:w-[25%] aspect-[2/3] overflow-hidden"><img src={event1} className="w-full h-full object-cover" alt="Event 1" /></li>
            <li className="w-full md:w-[25%] aspect-[2/3] overflow-hidden"><img src={event2} className="w-full h-full object-cover" alt="Event 2" /></li>
            <li className="w-full md:w-[25%] aspect-[2/3] overflow-hidden"><img src={event3} className="w-full h-full object-cover" alt="Event 3" /></li>
            <li className="w-full md:w-[40%] aspect-[3/2] overflow-hidden"><img src={event5} className="w-full h-full object-cover" alt="Event 5" /></li>
            <li className="w-full md:w-[25%] aspect-[2/3] overflow-hidden"><img src={event6} className="w-full h-full object-cover" alt="Event 6" /></li>
            <li className="w-full md:w-[25%] aspect-[2/3] overflow-hidden"><img src={event10} className="w-full h-full object-cover" alt="Event 10" /></li>
            <li className="w-full md:w-[40%] aspect-[3/2] overflow-hidden"><img src={event7} className="w-full h-full object-cover" alt="Event 7" /></li>
            <li className="w-full md:w-[25%] aspect-[2/3] overflow-hidden"><img src={event9} className="w-full h-full object-cover" alt="Event 9" /></li>
            <li className="w-full md:w-[40%] aspect-[3/2] overflow-hidden"><img src={event8} className="w-full h-full object-cover" alt="Event 8" /></li>
            <li className="w-full md:w-[40%] aspect-[3/2] overflow-hidden"><img src={event11} className="w-full h-full object-cover" alt="Event 11" /></li>
        </ul>
    )
}

export default StreetPhoto