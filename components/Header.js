import Image from "next/image";
import {
  GlobeAmericasIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
      {/* left - logo */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          className="object-contain object-left"
          fill
          alt=""
        />
      </div>

      {/* middle - search */}
      <div className="flex items-center justify-between py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden h-8 p-1 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* right - info */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAmericasIcon className="h-6 cursor-pointer" />
        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
