import Link from "next/link";
import React from "react";
import Title from "./title";

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
          "flex flex-col md:flex-row flex-wrap items-stretch justify-center md:text-center"
        }
      >
        <div className="cursor-pointer p-0 md:p-8 m-1 md:m-4 md:w-1/3 rounded md:bg-black text-white md:bg-opacity-30 flex items-center justify-center">
          <Link href={"#a"}>
            <Title>
              ✅️ We create websites for companies (institutional, promotional)
              and individuals (resume, blog)
            </Title>
          </Link>
        </div>
        <div className="cursor-pointer p-0 md:p-8 m-1 md:m-4 md:w-1/3 rounded md:bg-black text-white md:bg-opacity-30 flex items-center justify-center ">
          <Link href={"#a"}>
            <Title>
              ✅️ Start selling online: personalized e-commerce based on Stripe
              or Wordpress
            </Title>
          </Link>
        </div>
        <div className="cursor-pointer p-0 md:p-8 m-1 md:m-4 md:w-1/3 rounded md:bg-black text-white md:bg-opacity-30 flex items-center justify-center ">
          <Link href={"#a"}>
            <Title>
              ✅️ We offer custom domain and email for you or your business
            </Title>
          </Link>
        </div>
        <div className="cursor-pointer p-0 md:p-8 m-1 md:m-4 md:w-1/3 rounded md:bg-black text-white md:bg-opacity-30 flex items-center justify-center ">
          <Link href={"#a"}>
            <Title>
              ✅️ We create iPhone, iPad and Android apps to suit your needs
            </Title>
          </Link>
        </div>
      </div>
    </div>
  );
}
