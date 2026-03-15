"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const STRIPS = 5;

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>

        {/* ── Venetian blind overlay ── */}
        <div className="fixed inset-0 z-[9999] pointer-events-none flex overflow-hidden">
          {Array.from({ length: STRIPS }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 h-full bg-accent"
              initial={{ y: "-100%" }}
              animate={{ y: ["-100%", "0%", "0%", "100%"] }}
              transition={{
                times:    [0, 0.38, 0.58, 1],
                duration: 1,
                delay:    i * 0.055,
                ease:     [0.76, 0, 0.24, 1],
              }}
            />
          ))}
        </div>

        {/* ── Page content fade-in ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>

      </div>
    </AnimatePresence>
  );
};

export default PageTransition;