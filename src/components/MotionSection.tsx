"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { MotionStyle } from "framer-motion";


type Variant = "fadeUp" | "slideL" | "slideR" | "zoom";

export default function MotionSection({
  id,
  bg = "#0a0a0a",
  variant = "fadeUp",
  children,
}: {
  id: string;
  bg?: string;
  variant?: Variant;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  // يراقب تقدم ظهور هذا السكشن تحديدًا داخل viewport الحاوية
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"], // يبدأ الأنيميشن لما 20% من السكشن تدخل
  });

  // خرائط التحويل حسب التأثير المطلوب
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yUp     = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const xL      = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const xR      = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scaleZ  = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

const styleByVariant: Record<Variant, Partial<MotionStyle>> = {
  fadeUp: { opacity, y: yUp },
  slideL: { opacity, x: xL },
  slideR: { opacity, x: xR },
  zoom:   { opacity, scale: scaleZ },
} as const;

  return (
    <section
      id={id}
      ref={ref}
      className={`snap-start h-screen ${bg} text-white grid place-items-center px-6`}
    >
     <motion.div
  style={styleByVariant[variant]}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  className="max-w-3xl text-center space-y-4"
>
  {children}
</motion.div>

    </section>
  );
}
