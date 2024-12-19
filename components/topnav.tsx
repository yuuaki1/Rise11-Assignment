import Image from "next/image";

export default function Topnav() {
    return (
        <div className="xl:w-[1200px] w-full bg-white text-blue-500 flex py-4">
            <Image className="xl:ml-[1200px] ml-96 cursor-pointer" src="/bell.svg" alt="bell" width={30} height={50} />
            <Image className="ml-10 cursor-pointer" src="/user.svg" alt="user" width={30} height={50} />
        </div>
    )
}