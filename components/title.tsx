import React, { ReactNode } from "react";

export default function Title({
  children,
  isTopLevel,
}: {
  children: ReactNode;
  isTopLevel?: boolean;
}) {
  return isTopLevel ? (
    <h1 className="font-bold text-3xl md:text-2xl">{children}</h1>
  ) : (
    <h2 className="font-medium text-2xl md:text-xl">{children}</h2>
  );
}
