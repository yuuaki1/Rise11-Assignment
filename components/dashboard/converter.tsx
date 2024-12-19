import Claim from "@/components/interactive/claim"
import Location from '@/components/interactive/location'
import Language from "@/components/interactive/language"
import Statement from "@/components/interactive/statement"
import Agreement from "../interactive/agreement"
import Documentation from "../interactive/documentation"

export default function Converter() {
    return (
        <div className="m-8">
            <div className="flex flex-row bg-white px-16 pt-10 pb-2 rounded-t-xl ">
                <h1 className="text-2xl font-bold mr-3">File your Claim.</h1>
                <p className="text-sm text-neutral-400 mt-2">(Approx 5 Minutes)</p>
            </div>
            <div className="flex xl:flex-row flex-col bg-white mt-1 xl:gap-x-20 gap-y-2 pb-10">
                <div>
                    <Claim />
                </div>
                <div className="ml-16 xl:ml-0">
                    <Location />
                </div>
                <div className="ml-16 xl:ml-0">
                    <Language />
                </div>
            </div>
            <div className="flex xl:flex-row bg-white mt-1 gap-x-28 flex-col pb-10 px-16">
                <Statement />
                <Agreement />
                <div className="ml-8 xl:ml-0">
                    <Documentation />
                </div>
            </div>
        </div>
    )
}