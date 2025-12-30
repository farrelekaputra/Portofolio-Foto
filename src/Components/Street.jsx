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
        <ul className="mainClass flex flex-col w-full gap-4">
            <li><img src={street1} classname="md:w-1/2" alt="Street 1" /></li>
            <li><img src={street2} classname="md:w-1/2" alt="Street 2" /></li>
            <li><img src={street3} classname="md:w-1/2" alt="Street 3" /></li>
            <li><img src={street4} classname="md:w-1/2" alt="Street 4" /></li>
            <li><img src={street5} classname="md:w-1/2" alt="Street 5" /></li>
            <li><img src={street6} classname="md:w-1/2" alt="Street 6" /></li>
            <li><img src={street7} classname="md:w-1/2" alt="Street 7" /></li>
            <li><img src={street8} classname="md:w-1/2" alt="Street 8" /></li>
            <li><img src={street9} classname="md:w-1/2" alt="Street 9" /></li>
        </ul>
    )
}

export default StreetPhoto