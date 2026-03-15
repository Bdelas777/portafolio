"use client";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const routes = ["/", "/expertise", "/resume", "/projects"];

// Cuántos px acumulados de scroll "extra" se necesitan en el borde para navegar
const THRESHOLD = 300;

const ScrollNavigator = () => {
  const router     = useRouter();
  const pathname   = usePathname();
  const cooling    = useRef(false);
  const accumulated = useRef(0);

  useEffect(() => {
    // Resetea acumulado cuando cambia de ruta
    accumulated.current = 0;

    const handleWheel = (e) => {
      if (cooling.current) return;

      const currentIndex = routes.indexOf(pathname);
      if (currentIndex === -1) return;

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      const atTop = window.scrollY <= 0;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp   = e.deltaY < 0;

      // Solo acumula si estamos en el borde correcto
      if (scrollingDown && atBottom) {
        accumulated.current += e.deltaY;
      } else if (scrollingUp && atTop) {
        accumulated.current += e.deltaY; // deltaY negativo
      } else {
        // No estamos en el borde — resetea acumulado
        accumulated.current = 0;
        return;
      }

      // ¿Suficiente scroll acumulado?
      if (Math.abs(accumulated.current) < THRESHOLD) return;

      const direction = scrollingDown ? 1 : -1;
      const nextIndex = currentIndex + direction;
      if (nextIndex < 0 || nextIndex >= routes.length) return;

      // Navegar
      accumulated.current = 0;
      cooling.current = true;
      router.push(routes[nextIndex]);

      setTimeout(() => {
        cooling.current = false;
      }, 1400);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [pathname, router]);

  return null;
};

export default ScrollNavigator;