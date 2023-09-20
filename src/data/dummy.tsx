import {SlWrench} from "react-icons/sl"
import {BiWind, BiGasPump, BiSolidCar} from "react-icons/bi"
import {AiOutlineSafety} from "react-icons/ai"
import {HiOutlineClipboardDocumentList} from "react-icons/hi2"
import {MdOutlineLiquor} from "react-icons/md"

export const services = [
    {
        icon: <SlWrench />,
        title: "Inspection",
        bg:"bg-red-400",
        content: "General inspections and safety checks according to §29 StVZO"
    },
    {
        icon: <BiWind />,
        title: "Emissions",
        bg:"bg-blue-400",
        content: "Emissions tests according to §47a StVZO"
    },
    {
        icon: <AiOutlineSafety />,
        title: "Safety systems",
        bg:"bg-green-400",
        content: "Safety check truck and KOM according to §29 StVZO"
    },
    {
        icon: <HiOutlineClipboardDocumentList />,
        title: "Documents",
         bg:"bg-orange-400",
        content: "Change approvals according to §19.3 StVZO"
    },
    {
        icon: <BiGasPump />,
        title: "Gas",
         bg:"bg-violet-400",
        content: "Gas system tests according to §41a StVZO"
    },
    {
        icon: <MdOutlineLiquor />,
        title: "Liquid",
         bg:"bg-teal-400",
        content: "Testing of liquid gas systems in vehicles in accordance with DVGW G607"
    },
    {
        icon: <BiSolidCar />,
        title: "Classic cars",
         bg:"bg-indigo-400",
        content: "Expert opinion for classic car classification according to §23 StVZO (H license plate)"
    },

]

export const teams = [
    {name:"Alex", designation:"Master straightener", image:"/images/teams/1.png"},
    {name:"James", designation:"Chief engineer", image:"/images/teams/2.png"},
    {name:"Wërner", designation:"Chief engineer", image:"/images/teams/3.png"},
    {name:"Frank", designation:"Master straightener", image:"/images/teams/4.png"},
]