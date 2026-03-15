"use client";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const routes = ["/", "/expertise", "/resume", "/projects"];

const ScrollNavigator = () => {
  const router   = useRouter();
  const pathname = usePathname();
  const cooling  = useRef(false);   // bloquea mientras dura la transición

  useEffect(() => {
    const handleWheel = (e) => {
      if (cooling.current) return;

      const currentIndex = routes.indexOf(pathname);
      if (currentIndex === -1) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0 || nextIndex >= routes.length) return;

      cooling.current = true;
      router.push(routes[nextIndex]);

      // espera que termine la transición (~1.2s) antes de permitir otro scroll
      setTimeout(() => {
        cooling.current = false;
      }, 1200);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [pathname, router]);

  return null; // no renderiza nada
};

export default ScrollNavigator;