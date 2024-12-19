import Progressbar from "./dashboard/bar";
import Converter from "./dashboard/converter";

export default function Dashboard() {
    return (
        <div className="bg-neutral-100 h-full rounded-xl text-black pt-12 md:flex-col">
            <Progressbar />
            <Converter />
        </div>
    )
}