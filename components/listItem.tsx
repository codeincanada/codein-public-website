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
    <li className="mb-4 pl-2 p-2 border-b-2 border-solid border-gray-800 hover:border-b-2 hover:border-pink-700 text-2xl md:text-3xl text-pink-500 hover:text-white transition delay-50 duration-200 ease-in-out">
      {children}
    </li>
  ) : (
    <li className="mx-4 py-2 px-4 text-xl md:text-2xl text-gray-400 hover:text-pink-400">
      {/* border-b-2 border-dashed border-pink-700 border-opacity-50 */}
      {children}
    </li>
  );
}
