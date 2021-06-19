import React from "react";
import ServiceCard from "./serviceCard";

export function Services() {
  return (
    <div className={"text-white p-4 md:rounded"}>
      <div
        className={
          "flex flex-col md:flex-row flex-wrap items-stretch justify-center"
        }
      >
        <ServiceCard color={"mediumvioletred"}>
          Creation of institutional and promotional web sites
        </ServiceCard>
        <ServiceCard color={"brown"}>
          E-Commerce platform: start selling online
        </ServiceCard>
        <ServiceCard color={"tomato"}>
          Custom domain and email for personalized interaction
        </ServiceCard>
        <ServiceCard color={"chocolate"}>
          Mobile apps (iPhone, iPad and Android) development on-demand
        </ServiceCard>
      </div>
    </div>
  );
}
