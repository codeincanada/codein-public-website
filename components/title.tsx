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
  expandedText,
  icon,
}: {
  children: ReactNode;
  expandedText?: string;
  icon?: ReactNode;
}) {
  return expandedText ? (
    <details className="text-md md:text-lg lg:text-xl flex flex-1">
      <summary className={"flex"}>
        {icon ? icon : null}
        <span
          className={
            "text-xl md:text-2xl lg:text-3xl flex-1 flex items-center md:justify-center"
          }
        >
          {children}
        </span>
        <a className="flex items-center border-2 border-black bg-red-900 p-2 radius">
          <span className={"hidden lg:inline lg:px-2"}>Contact us</span>
          <i className={`far fa-phone text-md`} />
          /&nbsp;
          <i className="far fa-envelope text-md" />
        </a>
      </summary>
      <span className={"p-2 mt-2 border-t-2"}>{expandedText}</span>
    </details>
  ) : (
    <span className="text-md md:text-lg lg:text-xl flex nowrap flex-1 items-center">
      {icon ? icon : null}
      {children}
    </span>
  );
}
