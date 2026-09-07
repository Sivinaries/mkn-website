import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Text animation
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ProfilHero() {
  const videoRef = useRef(null);

  const isInView = useInView(videoRef, {
    once: true,
    amount: 0.2,
  });

  // Play video when entering viewport
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay can still be blocked by some browsers
      });
    }
  }, [isInView]);

  return (
    <section className="w-full bg-white font-body overflow-hidden">

      {/* =========================
          HERO VIDEO
      ========================= */}
      <div className="w-full h-[280px] sm:h-[360px] lg:h-[420px] bg-[#E8E6E1] relative overflow-hidden flex items-center justify-center">

        {/* Video Reveal */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.1,
            filter: "grayscale(100%) blur(4px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "grayscale(0%) blur(0px)",
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
          className="w-full h-full"
        >
          <video
            ref={videoRef}
            src="/videos/profile-mkn-terbaru-4.mp4"
            className="
              w-full
              h-full
              object-cover
              object-center
              filter
              contrast-[1.02]
              brightness-95
              hover:scale-105
              transition-transform
              duration-700
              ease-out
            "
            muted
            loop
            playsInline
            preload="metadata"
          />
        </motion.div>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>


      {/* =========================
          HEADER TITLE
      ========================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="
          max-w-[1600px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-10
          sm:pt-14
          pb-8
        "
      >

        {/* Label */}
        <motion.span
          variants={itemVariants}
          className="
            text-xs
            font-bold
            tracking-[0.18em]
            uppercase
            text-primary
            block
            mb-2
          "
        >
          PROFIL PROGRAM STUDI
        </motion.span>


        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="
            text-4xl
            sm:text-5xl
            lg:text-[56px]
            font-heading
            font-medium
            text-heading
            tracking-tight
          "
        >
          Tentang Kami
        </motion.h1>


        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="
            w-full
            max-w-sm
            h-[2.5px]
            bg-primary
            mt-4
            mb-4
          "
        />


        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="
            text-base
            sm:text-lg
            text-body
            leading-relaxed
            max-w-3xl
          "
        >
          Program Studi Magister Kenotariatan UNISSULA berdiri untuk memenuhi
          kebutuhan notaris yang menguasai hukum keperdataan sekaligus memegang
          etika jabatan.
        </motion.p>

      </motion.div>
    </section>
  );
}
