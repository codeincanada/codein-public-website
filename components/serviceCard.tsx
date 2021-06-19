import Link from "next/link";
import React, { ReactNode } from "react";
import { Body } from "./title";

function getMatchingColor(color: string) {
  switch (color) {
    case "mediumvioletred": {
      return "text-white";
    }
    case "yellowgreen": {
      return "darkslateblue";
    }
    case "tomato": {
      return "text-white";
    }
    case "deepskyblue": {
      return "midnightblue";
    }
    default: {
      return "text-white";
    }
  }
  // return "text-white";
}

const ServiceCard = ({
  color = "black",
  expandedText,
  children,
}: {
  color?: string;
  expandedText?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className="cursor-pointer p-4 md:p-8 my-2 mx-auto md:m-8 w-80 md:w-50 rounded-xl text-white md:bg-black md:bg-opacity-30 flex items-center justify-center shadow-xl border border-white"
      style={
        color
          ? {
              backgroundColor: color,
              color: getMatchingColor(color),
              fontWeight: "bold",
              textShadow: "1px 2px rgba(0, 0, 0, 0.5)",
            }
          : {}
      }
    >
      <Link href={"#a"}>
        <Body
          expandedText={expandedText}
          icon={
            <i
              className={`far fa-check-circle text-6xl pr-2 md:pr-4`}
              style={color ? { color: getMatchingColor(color) } : {}}
            />
          }
        >
          {children}
        </Body>
      </Link>
    </div>
  );
};
export default ServiceCard;
