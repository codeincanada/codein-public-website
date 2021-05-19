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
    <li className="mb-4 pl-2 p-2 border-b-4 border-solid border-pink-500 hover:border-white text-2xl md:text-3xl text-white hover:text-pink-500 transition delay-50 duration-200 ease-in-out">
      {children}
    </li>
  ) : (
    <li className="mx-4 py-2 px-4 text-xl md:text-2xl text-gray-400 hover:text-pink-400 border-b-2 border-solid border-pink-500 border-opacity-25">
      {children}
    </li>
  );
}
