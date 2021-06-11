import React, { ReactNode } from "react";

export default function TitleCA({
  children,
  isTopLevel,
}: {
  children: ReactNode;
  isTopLevel?: boolean;
}) {
  return isTopLevel ? (
    <h1 className="font-bold text-3xl md:text-xl">{children}</h1>
  ) : (
    <h2 className="font-medium text-2xl md:text-lg">{children}</h2>
  );
}
