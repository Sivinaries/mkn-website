import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import Img from "../../components/ui/Img";
import { timeline, halaman } from "../../data/profil/sejarahData";

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

// Item animation
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

export default function Sejarah() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">

        {/* =========================================
            LATAR BELAKANG PENDIRIAN
        ========================================= */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          {/* Eyebrow */}
          <motion.span
            variants={itemVariants}
            className="text-xs font-semibold tracking-wider text-primary uppercase block"
          >
            {t(halaman.eyebrow)}
          </motion.span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">

            {/* Title */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5"
            >
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                {t(halaman.judulLatar)}
              </h2>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-4 text-sm sm:text-base text-body text-justify leading-relaxed"
            >
              {halaman.latarBelakang.map((paragraf, idx) => (
                <p key={idx}>
                  <RichText>{t(paragraf)}</RichText>
                </p>
              ))}
            </motion.div>

          </div>
        </motion.section>


        {/* =========================================
            LINIMASA
        ========================================= */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-6"
        >

          {/* Timeline Header */}
          <motion.div variants={itemVariants}>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
              {t(halaman.judulLinimasa)}
            </h2>

            <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
          </motion.div>


          {/* Timeline */}
          <ol className="relative border-l-2 border-gray-200 ml-2 space-y-9 sm:space-y-11">

            {timeline.map((item, index) => (
              <motion.li
                key={item.year}
                variants={itemVariants}
                className="relative pl-7 sm:pl-10"
              >

                {/* Penanda titik pada garis */}
                <motion.span
                  aria-hidden="true"
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={viewportSettings}
                  className={`absolute -left-[9px] top-2 rounded-full border-[3px] border-white ${
                    item.highlight
                      ? "w-4 h-4 bg-primary ring-4 ring-primary/15"
                      : "w-3.5 h-3.5 bg-gray-300"
                  }`}
                />

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start">

                  <div
                    className={
                      item.sertifikat
                        ? "lg:col-span-7"
                        : "lg:col-span-12"
                    }
                  >

                    {/* Year */}
                    <motion.div
                      variants={itemVariants}
                      className="font-heading font-bold text-xl sm:text-2xl text-primary leading-none tabular-nums"
                    >
                      {item.year}
                    </motion.div>


                    {/* Title */}
                    <motion.h3
                      variants={itemVariants}
                      className="mt-2 font-heading font-semibold text-base sm:text-lg text-heading leading-snug"
                    >
                      <RichText>{t(item.title)}</RichText>
                    </motion.h3>


                    {/* Description */}
                    <motion.p
                      variants={itemVariants}
                      className="mt-1.5 text-sm sm:text-base text-body leading-relaxed max-w-3xl"
                    >
                      <RichText>{t(item.desc)}</RichText>
                    </motion.p>


                    {/* Meta */}
                    {item.meta && (
                      <motion.p
                        variants={itemVariants}
                        className="mt-2.5 text-xs text-gray-500 leading-relaxed"
                      >
                        {t(item.meta)}
                      </motion.p>
                    )}

                  </div>


                  {/* =====================================
                      KARTU SERTIFIKAT
                  ===================================== */}

                  {/* 
                    Jika nanti bagian sertifikat diaktifkan,
                    animasinya bisa menggunakan variants={itemVariants}
                    atau reveal image:
                    
                    initial={{
                      opacity: 0,
                      scale: 1.05,
                      filter: "grayscale(100%) blur(4px)"
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      filter: "grayscale(0%) blur(0px)"
                    }}
                  */}

                </div>
              </motion.li>
            ))}

          </ol>
        </motion.section>

      </div>
    </>
  );
}
