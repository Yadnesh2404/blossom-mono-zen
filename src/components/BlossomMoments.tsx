import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback, memo } from "react";

const videos = [
  { webm: "/videos_webm/VN20251130_173703_nail.webm", mp4: "/videos_mp4/VN20251130_173703_nail.mp4", label: "Nail Art" },
  { webm: "/videos_webm/VN20251204_195233_hiar.webm", mp4: "/videos_mp4/VN20251204_195233_hiar.mp4", label: "Hair Styling" },
  { webm: "/videos_webm/VN20251204_233207_hair.webm", mp4: "/videos_mp4/VN20251204_233207_hair.mp4", label: "Hair Care" },
  { webm: "/videos_webm/VN20251205_183201_nail.webm", mp4: "/videos_mp4/VN20251205_183201_nail.mp4", label: "Nail Studio" },
  { webm: "/videos_webm/VN20251206_175935nail.webm", mp4: "/videos_mp4/VN20251206_175935nail.mp4", label: "Nail Artistry" },
  { webm: "/videos_webm/VN20251210_200416color.webm", mp4: "/videos_mp4/VN20251210_200416color.mp4", label: "Colour" },
];

// Optimized: Reduced from 5x (30 items) to 3x (18 items) — still enough for seamless infinite scroll
// This reduces initial DOM size by 40% while maintaining smooth infinite scroll experience
const displayVideos = Array(3).fill(videos).flat();

const LazyVideo = memo(({ 
  webm, 
  mp4, 
  label, 
  idx,
  isCenter, 
  onCycleComplete 
}: { 
  webm: string; 
  mp4: string; 
  label: string; 
  idx: number;
  isCenter: boolean; 
  onCycleComplete: (idx: number) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggeredCycle = useRef(false);
  const isReadyForCycle = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Synchronize video playback with center state and visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && isCenter) {
      // Reset cycle detection variables
      isReadyForCycle.current = false;
      hasTriggeredCycle.current = false;
      
      try {
        video.currentTime = 0;
        video.play().catch(() => {});
      } catch (e) {
        console.error(e);
      }
    } else {
      isReadyForCycle.current = false;
      hasTriggeredCycle.current = false;
      
      try {
        video.pause();
      } catch (e) {
        console.error(e);
      }
    }
  }, [isVisible, isCenter]);

  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (isCenter) {
      onCycleComplete(idx);
    }
    // Always manual loop to keep the video active (e.g. if carousel is paused/hovered)
    try {
      video.currentTime = 0;
      video.play().catch(() => {});
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[250px] sm:w-[270px] md:w-[290px] shrink-0 aspect-[9/16] rounded-[1.25rem] overflow-hidden shadow-luxury border border-brand-gold/10 group bg-foreground/5 cursor-pointer snap-center transition-transform duration-300 ease-out hover:scale-[1.02]"
    >
      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 via-black/15 to-transparent z-10 pointer-events-none" />

      {/* Gold ring on hover */}
      <div className="absolute inset-0 ring-1 ring-inset ring-brand-gold/0 group-hover:ring-brand-gold/30 transition-all duration-300 rounded-[1.25rem] z-20 pointer-events-none" />

      {/* Service label at bottom */}
      <div className="absolute bottom-0 inset-x-0 z-20 px-4 pb-4 pointer-events-none">
        <span className="text-white/80 text-[10px] tracking-[0.2em] uppercase font-light">
          {label}
        </span>
      </div>

      {isVisible ? (
        <video
          ref={videoRef}
          autoPlay={isCenter}
          muted
          playsInline
          preload={isCenter ? "auto" : "metadata"}
          className="w-full h-full object-cover"
          onEnded={handleEnded}
        >
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-foreground/5" />
      )}
    </div>
  );
});
LazyVideo.displayName = 'LazyVideo';

export default function BlossomMoments() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerChildIndex, setCenterChildIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const lastScrollTime = useRef<number>(0);

  const getCenterIdx = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    
    const containerCenter = el.scrollLeft + el.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;
    
    for (let i = 0; i < el.children.length; i++) {
      const childEl = el.children[i] as HTMLElement;
      const childCenter = childEl.offsetLeft + childEl.offsetWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = i;
      } else if (distance > minDistance) {
        break; 
      }
    }
    return closestIdx;
  }, []);

  // Throttled scroll handler to reduce state updates during scrolling
  const scrollRAF = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const onScroll = useCallback(() => {
    if (scrollRAF.current) return;
    scrollRAF.current = requestAnimationFrame(() => {
      const closestIdx = getCenterIdx();
      setCenterChildIndex(closestIdx);
      setActiveIndex(closestIdx % videos.length);
      scrollRAF.current = 0;
    });

    // Infinite loop jump after scrolling pauses
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      const el = scrollRef.current;
      if (!el) return;
      
      const centerIdx = getCenterIdx();
      const setSize = videos.length;
      
      // If we are in the first set (too far left) or last set (too far right)
      if (centerIdx < setSize || centerIdx >= setSize * 2) {
        const targetIdx = centerIdx < setSize ? centerIdx + setSize : centerIdx - setSize;
        const currentEl = el.children[centerIdx] as HTMLElement;
        const targetEl = el.children[targetIdx] as HTMLElement;
        
        if (currentEl && targetEl) {
          const diff = targetEl.offsetLeft - currentEl.offsetLeft;
          el.scrollLeft += diff;
        }
      }
    }, 150); // wait 150ms after scroll to do the seamless jump
  }, [getCenterIdx]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (scrollRAF.current) cancelAnimationFrame(scrollRAF.current);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [onScroll]);

  // Initial centered scroll
  useEffect(() => {
    const initScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      const middleIdx = Math.floor(displayVideos.length / 2);
      const targetIdx = middleIdx - (middleIdx % videos.length);
      const targetEl = el.children[targetIdx] as HTMLElement;
      if (targetEl) {
        const scrollPos = targetEl.offsetLeft - el.clientWidth / 2 + targetEl.offsetWidth / 2;
        el.scrollTo({ left: scrollPos, behavior: "auto" });
        setCenterChildIndex(targetIdx);
        setActiveIndex(targetIdx % videos.length);
      }
    };
    setTimeout(initScroll, 100);
  }, []);

  const handleCycleComplete = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el || isPaused) return;

    // Cooldown of 1s between automatic advances to prevent accidental rapid double-scrolling
    const now = Date.now();
    if (now - lastScrollTime.current < 1000) return;

    const currentCenterIdx = getCenterIdx();
    if (idx !== currentCenterIdx) return;

    const nextIdx = currentCenterIdx + 1;
    if (nextIdx < el.children.length) {
      const targetEl = el.children[nextIdx] as HTMLElement;
      const scrollPos = targetEl.offsetLeft - el.clientWidth / 2 + targetEl.offsetWidth / 2;
      el.scrollTo({ left: scrollPos, behavior: "smooth" });
      lastScrollTime.current = Date.now();
    }
  }, [isPaused, getCenterIdx]);

  const scrollTo = (targetOriginalIdx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    
    const currentIdx = getCenterIdx();
    const currentOriginalIdx = currentIdx % videos.length;
    
    let diff = targetOriginalIdx - currentOriginalIdx;
    if (diff > videos.length / 2) diff -= videos.length;
    else if (diff < -videos.length / 2) diff += videos.length;
    
    const targetIdx = currentIdx + diff;
    if (targetIdx >= 0 && targetIdx < el.children.length) {
      const targetEl = el.children[targetIdx] as HTMLElement;
      const scrollPos = targetEl.offsetLeft - el.clientWidth / 2 + targetEl.offsetWidth / 2;
      el.scrollTo({ left: scrollPos, behavior: "smooth" });
      lastScrollTime.current = Date.now() + 1000;
    }
  };

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden" 
      style={{ background: "linear-gradient(180deg, #fdfbf7 0%, #f7f4eb 60%, #fdfbf7 100%)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(40_60%_70%/0.05),transparent_60%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[radial-gradient(circle,hsl(344_64%_50%/0.02),transparent_60%)] blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="w-12 h-[1px] bg-brand-gold/50 mb-5" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground/90 uppercase tracking-[0.05em] leading-tight">
            BLOSSOM <span className="text-brand-gold">MOMENTS</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-foreground/50 font-light max-w-xl leading-relaxed">
            A curated glimpse into the artistry, care, and transformation that define every visit.
          </p>
        </motion.div>

        {/* ── VIDEO STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          viewport={{ once: true }}
          className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 md:gap-7 overflow-x-auto snap-x snap-mandatory py-6 px-[20vw] sm:px-[30vw] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {displayVideos.map((vid, idx) => (
              <LazyVideo 
                key={idx} 
                webm={vid.webm} 
                mp4={vid.mp4} 
                label={vid.label} 
                idx={idx}
                isCenter={idx === centerChildIndex}
                onCycleComplete={handleCycleComplete}
              />
            ))}
          </div>
        </motion.div>

        {/* ── DOT INDICATORS ── */}
        <div className="flex justify-center gap-2 mt-8">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to video ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-[5px] bg-brand-gold"
                  : "w-[5px] h-[5px] bg-foreground/20 hover:bg-brand-gold/50"
              }`}
            />
          ))}
        </div>

        {/* ── EDITORIAL FOOTER CAPTION ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/30 font-light">
            Real Blossom Clients · Real Results · Andheri West, Mumbai
          </p>
        </motion.div>

      </div>
    </section>
  );
}
