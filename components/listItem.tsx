import React, { ReactNode } from "react";

export default function ListItemCA({
  children,
  isHighlighted = false,
}: {
  children: ReactNode;
  isHighlighted?: boolean;
}) {
  return isHighlighted ? (
    /* filter drop-shadow*/
    <li className="font-light my-4 px-8 py-2 md:py-4 text-2xl md:text-3xl text-white hover:text-pink-500 border-b-2 border-solid border-pink-500 hover:border-white transition delay-50 duration-200 ease-in-out">
      {children}
    </li>
  ) : (
    <li className="font-light px-6 md:w-3/4 mx-auto my-4 text-lg md:text-2xl text-white hover:text-pink-500 border-b-2 border-solid border-pink-500 hover:border-white border-opacity-25 transition delay-50 duration-200 ease-in-out">
      {children}
    </li>
  );
}
