import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useT, useLanguage } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import {
  peoIntro,
  peoItems,
  halaman,
} from "../../data/profil/peoData";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

// Container animation
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Standard item animation
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

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Tujuan() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta
          name="description"
          content={t(halaman.meta.description)}
        />
      </Helmet>

      <div className="space-y-14 sm:space-y-16">

        {/* =========================================
            HEADER
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
                {t(halaman.judul)}
              </h2>
            </motion.div>

            {/* Introduction */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 text-sm sm:text-base text-body leading-relaxed"
            >
              <p>
                <RichText>{t(peoIntro)}</RichText>
              </p>
            </motion.div>

          </div>
        </motion.section>


        {/* =========================================
            PEO SECTION
        ========================================= */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-6"
        >

          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <h2 className="font-heading font-normal text-2xl sm:text-3xl text-heading tracking-normal">
              {t(halaman.judulRumusan)}
            </h2>

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: "100%",
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={viewportSettings}
              className="h-[1.5px] bg-heading mt-3"
            />
          </motion.div>


          {/* PEO Cards */}
          <motion.div
            variants={containerVariants}
            className="space-y-5"
          >
            {peoItems.map((item) => (
              <motion.article
                key={item.code}
                variants={cardVariants}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-xs
                  shadow-2xs
                  hover:border-primary/40
                  transition-colors
                  overflow-hidden
                "
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">

                  {/* =====================================
                      RUMUSAN PEO
                  ===================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.1,
                    }}
                    viewport={viewportSettings}
                    className="p-6 sm:p-7 space-y-3.5"
                  >
                    <span className="inline-block px-3 py-1.5 rounded-xs bg-primary/10 text-primary font-heading font-bold text-sm tracking-wide">
                      {item.code}
                    </span>

                    <p className="text-sm sm:text-base text-body leading-relaxed">
                      <RichText>
                        {t(item.objective)}
                      </RichText>
                    </p>
                  </motion.div>


                  {/* =====================================
                      EPHE
                  ===================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    viewport={viewportSettings}
                    lang="en"
                    className="
                      p-6
                      sm:p-7
                      space-y-2.5
                      bg-gray-50/70
                      border-t
                      border-gray-200
                      lg:border-t-0
                      lg:border-l
                    "
                  >
                    <span
                      lang={lang}
                      className="text-[10px] font-bold tracking-[0.14em] text-gray-400 uppercase block"
                    >
                      {t(halaman.labelEphe)}
                    </span>

                    <h3 className="font-heading font-semibold text-base text-heading leading-snug">
                      {item.ephe.title}
                    </h3>

                    <p className="text-sm text-body leading-relaxed">
                      {item.ephe.desc}
                    </p>
                  </motion.div>

                </div>
              </motion.article>
            ))}
          </motion.div>

        </motion.section>

      </div>
    </>
  );
}
