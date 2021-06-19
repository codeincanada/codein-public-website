import Link from "next/link";
import React, { ReactNode } from "react";
import { TextBody } from "./textComponents";

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
      style={
        color
          ? {
              backgroundColor: color,
              color: getMatchingColor(color),
              fontWeight: "bold",
              textShadow: "1px 1px rgba(0, 0, 0, 0.5)",
            }
          : {}
      }
    >
      <Link href={"#a"}>
        <TextBody
          expandedText={expandedText}
          icon={
            <i
              className={`far fa-check-circle text-6xl pr-2 md:pr-4`}
              style={color ? { color: getMatchingColor(color) } : {}}
            />
          }
        >
          {children}
        </TextBody>
      </Link>
    </div>
  );
};
export default ServiceCard;
