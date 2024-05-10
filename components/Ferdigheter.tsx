import { CheckIcon, RocketIcon, TargetIcon } from "@radix-ui/react-icons";
import React from "react";

const ferdigheter = [
  "Typescript",
  "Javascript",
  "React",
  "Next.js",
  "MongoDB",
  "HTML",
  "CSS/TailwindCSS",
];

export default function Ferdigheter() {
  return (
    // <section className="bg-base-200 flex justify-evenly items-center py-36">
    // {ferdigheter.map((ferd) => (
    <section
      id="ferdigheter"
      className="bg-base-200 flex flex-col items-center gap-3 py-36"
    >
      <RocketIcon className="w-20 h-20 text-primary" />
      <h4 className="text-2xl font-semibold">Dreven i:</h4>
      <ul className="mt-4 space-y-2">
        {ferdigheter.map((ferd, i) => (
          <li key={i} className="flex items-center">
            <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
            {ferd}
          </li>
        ))}
      </ul>
    </section>
    // ))}
    // </section>
  );
}
