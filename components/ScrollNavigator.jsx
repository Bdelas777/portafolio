"use client";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const PAGES = ["/", "/expertise", "/resume", "/projects"];
const COOLDOWN = 900; // ms entre navegaciones

const ScrollNavigator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const lastNav = useRef(0);
  const touchStartY = useRef(0);

  const currentIndex = PAGES.indexOf(pathname);

  const navigate = (dir: 1 | -1) => {
    const now = Date.now();
    if (now - lastNav.current < COOLDOWN) return;

    const next = PAGES[currentIndex + dir];
    if (!next) return;

    lastNav.current = now;
    router.push(next);
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      // Ignora si el usuario está scrolleando dentro de un contenedor interno
      const target = e.target as HTMLElement;
      const scrollable = target.closest("[data-scroll]");
      if (scrollable) return;

      if (Math.abs(e.deltaY) < 30) return; // ignora trackpad accidental
      navigate(e.deltaY > 0 ? 1 : -1);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 50) return;
      navigate(delta > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [currentIndex]);

  if (currentIndex === -1) return null;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50
      flex flex-col items-center gap-2.5 pointer-events-none">
      {PAGES.map((page, i) => (
        <motion.button
          key={page}
          onClick={() => router.push(page)}
          className="pointer-events-auto group relative"
          aria-label={page}
        >
          <AnimatePresence mode="wait">
            {i === currentIndex ? (
              <motion.div
                key="active"
                className="w-[5px] bg-accent rounded-full"
                initial={{ height: 5, opacity: 0 }}
                animate={{ height: 22, opacity: 1 }}
                exit={{ height: 5, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            ) : (
              <motion.div
                key="inactive"
                className="w-[5px] h-[5px] rounded-full bg-white/20
                  group-hover:bg-white/50 transition-colors duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      ))}
    </div>
  );
};

export default ScrollNavigator;