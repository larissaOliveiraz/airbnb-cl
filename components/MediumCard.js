import Image from "next/image";

export default function MediumCard({ img, title }) {
  return (
    <div className="transition duration-300 ease-out transform cursor-pointer hover:scale-105">
      <div className="relative w-80 h-80">
        <Image src={img} fill alt="" className="rounded-2xl" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
}
