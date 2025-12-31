import { Icon } from "@iconify/react"

const AboutMe = () => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="subheader text-lg">If you’d like to collaborate or invite me, feel free to contact me using the details below.</h2>
            <ul className="listSosmed flex flex-col w-full text-lg gap-2">
                <li className="flex items-center gap-2">
                    <Icon icon="uil:instagram" width={24}/>
                    <p>@pararelphoto</p>
                </li>
                <li className="flex items-center gap-2">
                    <Icon icon="mingcute:mail-line" width={24}/>
                    <p>farrelekaputra1@gmail.com</p>
                </li>
            </ul>
        </div>
    )
}

export default AboutMe