import Image from "next/image"

export default function Sidebar() {
    const options = [
        {
            name: "Dashboard",
            src: "/dashboard.svg"
        }, 
        {
            name: "My Cases",
            src: "/cases.svg"
        },
        {
            name: "Activities",
            src: "/activities.svg"
        },
        {
            name: "Calendar",
            src: "/calendar.svg"
        },
        {
            name: "Files",
            src: "/files.svg"
        },
        {
            name: "Open a Dispute",
            src: "/dispute.svg"
        }
    ]
    return (
        <div className="bg-white h-screen text-black px-4">
            <Image className="pt-3 cursor-pointer" src="/logo.png" alt="logo" width={200} height={50} />
            <ul className="py-14 pl-5">
                {options.map((option, index) => (
                    <li className="py-3 whitespace-nowrap cursor-pointer rounded-md flex flex-row opacity-40 hover:opacity-100 transition-all duration-300" key={index}>
                        <Image src={option.src} alt={option.name} width={30} height={30} />
                        <p className="ml-4 text-lg font-bold">{option.name}</p>
                    </li>
                ))}
            </ul>
            <div className="relative w-64 h-96 mt-3">
                <Image src="/jury.png" alt="jury" fill />
            </div>
        </div>
    )
}