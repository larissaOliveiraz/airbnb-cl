import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

export default function SearchCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div
      className={clsx(
        "flex px-2 py-5",
        "trasition duration-200 ease-out transform",
        "border-b",
        "cursor-pointer",
        "hover:bg-gray-50 first:border-t hover:shadow-xl  hover:opacity-95"
      )}
    >
      <div
        className={clsx(
          "relative flex-shrink-0",
          "w-40 h-24",
          "md:h-52 md:w-80"
        )}
      >
        <Image src={img} fill alt="" className="object-cover rounded-2xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="text-gray-300 cursor-pointer h-7" />
        </div>

        <h4 className="text-xl font-semibold">{title}</h4>
        <div className="w-10 pt-2 border-b" />
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center gap-x-1">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="pb-2 text-lg font-semibold lg:2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
