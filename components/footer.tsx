import React from "react";

export function Footer({ url }: { url?: string }) {
  return (
    <footer className="text-white text-xs font-bold text-center">
      Made in 🇨🇦 with <i className="fas fa-heart text-red-700" />
    </footer>
  );
}
