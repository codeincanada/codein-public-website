import Link from "next/link";
import React, { ReactNode } from "react";
import { Body } from "./title";

function getMatchingColor(color: string) {
  /* switch (color) {
    case "mediumvioletred": {
      return "text-white";
    }
    case "yellowgreen": {
      return "text-white";
    }
    case "tomato": {
      return "text-white";
    }
    case "deepskyblue": {
      return "text-white";
    }
    default: {
      return "text-white";
    }
  }*/
  return "text-white";
}

const ServiceCard = ({
  color = "black",
  children,
}: {
  color?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className="cursor-pointer p-4 md:p-8 my-3 md:m-8 md:w-1/3 rounded-xl text-white md:bg-black md:bg-opacity-30 flex items-center justify-center shadow-xl border border-white"
      style={color ? { backgroundColor: color } : {}}
    >
      <Link href={"#a"}>
        <Body
          icon={
            <i
              className={`far fa-check-circle text-6xl pr-2 ${
                color && getMatchingColor(color)
              }`}
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
