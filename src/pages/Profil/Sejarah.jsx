import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { FiExternalLink, FiImage } from "react-icons/fi";

import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
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

                {/* Tahun */}
                <motion.div
                  variants={itemVariants}
                  className="font-heading font-bold text-xl sm:text-2xl text-primary leading-none tabular-nums"
                >
                  {item.year}
                </motion.div>

                {/* Judul */}
                <motion.h3
                  variants={itemVariants}
                  className="mt-2 font-heading font-semibold text-base sm:text-lg text-heading leading-snug"
                >
                  <RichText>{t(item.title)}</RichText>
                </motion.h3>

                {/* Deskripsi */}
                <motion.p
                  variants={itemVariants}
                  className="mt-1.5 text-sm sm:text-base text-body text-justify leading-relaxed max-w-3xl"
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

                {/* Berkas bukti: sertifikat (gambar) dan SK (PDF), keduanya
                    dibuka di tab baru agar pembaca tidak kehilangan posisi
                    bacanya pada linimasa. */}
                {item.sertifikat && (
                  <motion.div
                    variants={itemVariants}
                    className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-2"
                  >
                    <a
                      href={item.sertifikat.gambar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <FiImage className="text-sm shrink-0" />
                      <span>{t(halaman.labelSertifikat)}</span>
                      <FiExternalLink className="text-[11px] shrink-0 opacity-70" />
                    </a>

                    <a
                      href={item.sertifikat.dokumen.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <FaFilePdf className="text-sm shrink-0" />
                      <span>{t(item.sertifikat.dokumen.label)}</span>
                      <FiExternalLink className="text-[11px] shrink-0 opacity-70" />
                    </a>
                  </motion.div>
                )}
              </motion.li>
            ))}

          </ol>
        </motion.section>

      </div>
    </>
  );
}
