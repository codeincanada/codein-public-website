import React, { ReactNode } from "react";

export function TextTitle({
  children,
  isTopLevel,
}: {
  children: ReactNode;
  isTopLevel?: boolean;
}) {
  return isTopLevel ? <h1>{children}</h1> : <h2>{children}</h2>;
}

export function TextBody({
  children,
  expandedText,
  icon,
}: {
  children: ReactNode;
  expandedText?: string;
  icon?: ReactNode;
}) {
  return expandedText ? (
    <details>
      <summary>
        {icon ? icon : null}
        <span
          className={
            "text-xl md:text-2xl lg:text-3xl flex-1 flex items-center md:justify-center"
          }
        >
          {children}
        </span>
        <a>
          <span>Contact us</span>
          <i className="far fa-phone text-md" />
          /&nbsp;
          <i className="far fa-envelope" />
        </a>
      </summary>
      <span>{expandedText}</span>
    </details>
  ) : (
    <span>
      {icon ? icon : null}
      {children}
    </span>
  );
}
