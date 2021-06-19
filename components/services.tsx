import React from "react";
import ServiceCard from "./serviceCard";

export function Services() {
  return (
    <div className={"flex md:flex-row flex-wrap justify-center px-1"}>
      <ServiceCard
        color={"mediumvioletred"}
        expandedText={"Creation of institutional and promotional web sites"}
      >
        Website
      </ServiceCard>
      <ServiceCard color={"brown"} expandedText={"Start selling online"}>
        E-Commerce
      </ServiceCard>
      <ServiceCard
        color={"tomato"}
        expandedText={"Custom domain and email for personalized interaction"}
      >
        Email
      </ServiceCard>
      <ServiceCard
        color={"chocolate"}
        expandedText={"Development of iPhone, iPad and Android apps on-demand"}
      >
        Mobile apps
      </ServiceCard>
    </div>
  );
}
