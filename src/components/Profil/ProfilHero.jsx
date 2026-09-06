import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function ProfilHero() {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay can still be blocked by some browsers
      });
    }
  }, [isInView]);

  return (
    <section className="w-full bg-white font-body">
      {/* Full-width Banner Video */}
      <div className="w-full h-[280px] sm:h-[360px] lg:h-[420px] bg-[#E8E6E1] relative overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src="/videos/profile-mkn-terbaru-4.mp4"
          className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-95 hover:scale-105 transition-transform duration-500"
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Header Title Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8">
        <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
          PROFIL PROGRAM STUDI
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-medium text-heading tracking-tight">
          Tentang Kami
        </h1>

        <div className="w-full max-w-sm h-[2.5px] bg-primary mt-4 mb-4" />

        <p className="text-base sm:text-lg text-body leading-relaxed max-w-3xl">
          Program Studi Magister Kenotariatan UNISSULA berdiri untuk memenuhi
          kebutuhan notaris yang menguasai hukum keperdataan sekaligus memegang
          etika jabatan.
        </p>
      </div>
    </section>
  );
}