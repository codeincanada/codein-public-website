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
    <li className="mb-4 pl-2 p-2 border-l-2 border-b-2 border-solid border-pink-700 hover:border-transparent hover:border-b-0 hover:border-white text-3xl md:text-4xl hover:text-pink-400 transition delay-50 duration-200 ease-in-out">
      {children}
    </li>
  ) : (
    <li className="mx-4 py-2 px-4 border-b-2 border-dashed border-pink-700 border-opacity-50 text-xl md:text-2xl hover:text-pink-400">
      {children}
    </li>
  );
}
