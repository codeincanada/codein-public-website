import React, { ReactNode } from "react";

export default function TitleCA({
  children,
  isTopLevel = true,
}: {
  children: ReactNode;
  isTopLevel?: boolean;
}) {
  return isTopLevel ? (
    <h1 className="font-sans md:text-sm">{children}</h1>
  ) : (
    <h2 className="font-sans md:text-sm">{children}</h2>
  );
}
