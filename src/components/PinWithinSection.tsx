"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Mode = "static" | "fixed" | "absolute";

/**
 * Pins its children while the viewport is inside the section.
 * - static (before the section)
 * - fixed  (inside the section)
 * - absolute (at the bottom of the section)
 *
 * top: navbar height offset.
 */
export default function PinWithinSection({
  top = 96,
  children,
}: {
  top?: number;
  children: React.ReactNode;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);   // bounds (takes height)
  const boxRef  = useRef<HTMLDivElement | null>(null);   // actual pinned content
  const secRef  = useRef<HTMLElement | null>(null);      // owning <section> (parent of host)

  const [mode, setMode] = useState<Mode>("static");
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState<number | "auto">("auto");
  const [boxH, setBoxH] = useState(0);
  const [absTop, setAbsTop] = useState(0);

  // Find the nearest section ancestor (so we stop at its end)
  useLayoutEffect(() => {
    let n: HTMLElement | null = hostRef.current as HTMLElement | null;
    while (n && n.tagName.toLowerCase() !== "section") {
      n = n.parentElement as HTMLElement | null;
    }
    secRef.current = n;
  }, []);

  // Keep placeholder height, width, and left aligned
  const syncMeasurements = () => {
    const host = hostRef.current;
    const box  = boxRef.current;
    if (!host || !box) return;

    const hostRect = host.getBoundingClientRect();
    const boxRect  = box.getBoundingClientRect();

    setLeft(hostRect.left + window.scrollX);
    setWidth(hostRect.width);
    setBoxH(boxRect.height);
  };

  // Decide current mode based on scroll position
  const recalc = () => {
    const sec  = secRef.current;
    const host = hostRef.current;
    const box  = boxRef.current;
    if (!sec || !host || !box) return;

    const sectionTop    = sec.offsetTop;
    const sectionBottom = sectionTop + sec.offsetHeight;
    const scrollTop     = window.scrollY + top;
    const contentH      = box.offsetHeight;

    if (scrollTop < sectionTop) {
      setMode("static");
    } else if (scrollTop > sectionBottom - contentH) {
      setMode("absolute");
      setAbsTop(sectionBottom - sectionTop - contentH); // within host
    } else {
      setMode("fixed");
    }
  };

  useLayoutEffect(() => {
    syncMeasurements();
    recalc();
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        recalc();
        syncMeasurements(); // keep width/left responsive while scrolling
      });
    };
    const onResize = () => {
      syncMeasurements();
      recalc();
    };
    const ro = new ResizeObserver(() => {
      syncMeasurements();
      recalc();
    });

    if (hostRef.current) ro.observe(hostRef.current);
    if (secRef.current) ro.observe(secRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="pin-host"
      style={{ position: "relative", height: boxH || "auto" }} // placeholder height
    >
      <div
        ref={boxRef}
        className="pin-box"
        style={
          mode === "fixed"
            ? { position: "fixed", top, left, width, zIndex: 2 }
            : mode === "absolute"
            ? { position: "absolute", top: absTop, left: 0, right: 0, width: "100%" }
            : { position: "static", width: "auto" }
        }
      >
        {children}
      </div>
    </div>
  );
}
