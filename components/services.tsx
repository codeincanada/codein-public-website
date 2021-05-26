import Link from "next/link";
import React from "react";

export function Services() {
  return (
    <div className={"border bg-pink-700 bg-opacity-60 text-white p-4"}>
      <h1 className={"border-b-2 leading-relaxed text-2xl mb-4"}>
        💡Services we offer:
      </h1>
      <div className={"px-6 flex flex-col leading-relaxed "}>
        <Link href={"#a"}>
          ✅️ We create websites for companies (institutional, promotional) and
          individuals (resume, blog)
        </Link>
        <Link href={"#a"}>
          ✅️ Start selling online: personalized e-commerce based on Stripe or
          Wordpress
        </Link>
        <Link href={"#a"}>
          ✅️ We offer custom domain and email for you or your business
        </Link>
        <Link href={"#a"}>
          ✅️ We create iPhone, iPad and Android apps to suit your needs
        </Link>
      </div>
    </div>
  );
}
