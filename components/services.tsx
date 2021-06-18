import React from "react";
import { Title } from "./title";
import ServiceCard from "./serviceCard";

export function Services() {
  return (
    <div
      className={
        "bg-pink-400 md:bg-transparent bg-opacity-10 md:bg-opacity-90 text-white md:text-black p-4 md:rounded"
      }
    >
      <Title isTopLevel>💡Services we offer:</Title>
      <div
        className={
          "flex flex-col md:flex-row flex-wrap items-stretch justify-center"
        }
      >
        <ServiceCard color={"mediumvioletred"}>
          Creation of institutional and promotional web sites
        </ServiceCard>
        <ServiceCard color={"yellowgreen"}>
          E-Commerce platform: start selling online
        </ServiceCard>
        <ServiceCard color={"tomato"}>
          Custom domain and email for personalized interaction
        </ServiceCard>
        <ServiceCard color={"deepskyblue"}>
          Mobile apps (iPhone, iPad and Android) development on-demand
        </ServiceCard>
      </div>
    </div>
  );
}
