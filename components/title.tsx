import React, { ReactNode } from "react";

export function Title({
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

export function Body({
  children,
  isParagraph = false,
  icon,
}: {
  children: ReactNode;
  isParagraph?: boolean;
  icon?: ReactNode;
}) {
  return isParagraph ? (
    <p className="text-md">
      {icon ? icon : null}
      {children}
    </p>
  ) : (
    <span className="text-md md:text-lg lg:text-xl flex nowrap flex items-center">
      {icon ? icon : null}
      {children}
    </span>
  );
}
