import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-base-300 to-base-100 flex flex-col gap-32 items-center">
      <div className="flex flex-col w-full justify-evenly items-center gap-4 px-4 space-y-4 md:gap-8 md:flex-row md:px-6 lg:space-y-10">
        <Image
          alt="Hero"
          className="overflow-hidden rounded-xl object-bottom"
          height="500"
          width="500"
          src="/CvBilde.jpg"
        />
        <div className="flex flex-col items-center justify-center space-y-4 md:items-start md:space-y-2 lg:space-y-4 xl:space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center md:items-center md:space-y-3 lg:space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hei! Jeg heter{" "}
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-fuchsia-600">
                Jens Haakaas{" "}
              </div>
            </h1>
          </div>
          <div className="space-y-2 min-[400px]:flex-row md:ml-10"></div>
        </div>
      </div>
    </section>
  );
}
