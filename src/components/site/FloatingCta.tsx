import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { btnCls, BtnDot } from "./ui";

export function FloatingCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className={`fixed inset-x-3 bottom-3 z-40 flex items-center justify-end gap-2 transition-all duration-500 sm:inset-x-auto sm:bottom-6 sm:right-6 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
      <Link to="/contact-us" className={btnCls("rose", "h-14 flex-1 justify-center shadow-cta sm:flex-none")}>Book a Strategy Call <BtnDot /></Link>
    </div>
  );
}
