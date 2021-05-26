import React, { ReactNode } from "react";

export default function TitleCA({
  children,
  isTopLevel,
}: {
  children: ReactNode;
  isTopLevel?: boolean;
}) {
  return isTopLevel ? (
    <h1 className="font-bold md:text-lg">{children}</h1>
  ) : (
    <h2 className="font-medium md:text-md">{children}</h2>
  );
}
