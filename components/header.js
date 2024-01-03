import Link from "next/link";
// import { ImYoutube, ImTwitter, ImFacebook  } from "react-icons/im";
import Dropdown from "./ui/dropdown";

function Header() {
  return (
    <nav className="sticky z-20 top-0 flex bg-gray-200">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between text-center py-3 w-full">
           {/* <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <input type="text" className="input-text" placeholder="Search..." />
           </div> */}
           <div className="shrink w-80">
              <h1 className="font-bold md:text-3xl text-2xl">Grow your plant</h1>
           </div>
           <div className="flex items-center justify-center space-x-8 h-10 w-48 mt-3 md:mt-0">
              <Link href={'/'} className="text-base text-gray-600 font-bold hover:bg-gray-400 hover:text-gray-800 py-1 rounded-2xl px-2 transition-all ease-in-out duration-150">Home</Link>
              <Link href={'/about'} className="text-base text-gray-600 font-bold hover:bg-gray-400 hover:text-gray-800 py-1 rounded-2xl px-2 transition-all ease-in-out duration-150">About</Link>
           </div>
           <div className="w-96 mt-5 md:mt-0 flex justify-center md:pl-28">
            {/* <div className="flex gap-6">
                <Link href={"/"}><ImYoutube color="#888888"/></Link>
                <Link href={"/"}><ImTwitter color="#888888"/></Link>
                <Link href={"/"}><ImFacebook color="#888888"/></Link>
            </div> */}
            <Dropdown />
           </div>
        </div>
    </nav>
  )
}

export default Header
