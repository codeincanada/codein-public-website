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
    <li className="mb-4 text-2xl md:text-3xl text-white hover:text-pink-500 border-b-2 border-solid border-pink-500 hover:border-white transition delay-50 duration-200 ease-in-out">
      {children}
    </li>
  ) : (
    <li className="mx-2 text-xl md:text-2xl text-white hover:text-pink-500 border-b-2 border-solid border-pink-500 border-opacity-25 transition delay-50 duration-200 ease-in-out">
      {children}
    </li>
  );
}
