import { ReactNode } from "react";
import "tailwindcss/tailwind.css";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="flex bg-gray-700 w-screen h-screen">{children}</div>;
}
