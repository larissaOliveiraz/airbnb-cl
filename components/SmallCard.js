import Image from "next/image";

export default function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 transition duration-150 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
      {/* left - image */}
      <div className="relative w-16 h-16">
        <Image src={img} className="rounded-lg" fill alt="" />
      </div>

      {/* right - location, distance */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
