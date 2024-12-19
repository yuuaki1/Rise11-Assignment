import Dashboard from "@/components/dashboard";
import Mobilenav from "@/components/mobilenav";
import Sidebar from "@/components/sidebar"
import Topnav from "@/components/topnav"

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="hidden xl:flex">
        <Sidebar />
      </div>
      <div className="xl:hidden hidden md:block">
        <Mobilenav />
      </div>
      <div className="flex flex-col">
        <Topnav />
        <Dashboard />
      </div>
    </div>
  );
}
