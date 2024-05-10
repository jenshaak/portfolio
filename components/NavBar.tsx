import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Prosjekter",
    href: "#prosjekter",
  },
  {
    title: "Kontakt meg",
    href: "#footer",
  },
  {
    title: "Ferdigheter",
    href: "#ferdigheter",
  },
];

export default function NavBar() {
  return (
    <div className="bg-base-300 w-full flex justify-between items-center py-1 px-5">
      <Link href="/" className="btn btn-sm btn-ghost text-xl">
        Jens Haakaas
      </Link>
      <div className="flex justify-evenly items-center gap-5">
        {links.map((link, i) => (
          <a
            key={link.title}
            href={link.href}
            className="p-2 px-3 hover:bg-primary/20 rounded-lg"
          >
            {link.title}
          </a>
        ))}
        <div className="h-10 w-10 avatar">
          <Image
            width={300}
            height={300}
            alt="Profilbilde"
            src="/CvBilde.jpg"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
