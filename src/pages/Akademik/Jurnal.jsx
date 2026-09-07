import { Fragment } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import { FiBookOpen, FiExternalLink } from "react-icons/fi";

import { halaman } from "../../data/akademik/capaianPembelajaranData";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const headerItemVariants = {
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

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const jurnalData = [
  {
    id: 1,
    title: {
      id: "Jurnal Akta",
      en: "Akta Journal",
    },
    description: {
      id: "Jurnal AKTA berfokus pada kajian ilmiah, hasil penelitian, serta tinjauan kritis di bidang ilmu hukum kontemporer dengan penekanan utama pada bidang hukum perdata, kenotariatan, dan keagrariaan.",
      en: "Academic journal covering legal and notarial studies.",
    },
    link: "http://jurnal.unissula.ac.id/index.php/akta",
  },
  {
    id: 2,
    title: {
      id: "SANLaR (Sultan Agung Notariat Law Review)",
      en: "SANLaR",
    },
    description: {
      id: "Sesuai dengan namanya—Konstatering (proses merumuskan atau mengonstatir fakta hukum kedalam bentuk akta)—jurnal ini memuat artikel ringkasan dari hasil penelitian tesis mahasiswa yang berfokus pada;",
      en: "Academic journal on notarial and land law studies.",
    },
    link: "http://jurnal.unissula.ac.id/index.php/SANLaR",
  },
  {
    id: 3,
    title: {
      id: "Jurnal Konstatering",
      en: "Konstatering Journal",
    },
    description: {
      id: "Sesuai dengan namanya—Konstatering (proses merumuskan atau mengonstatir fakta hukum kedalam bentuk akta)—jurnal ini memuat artikel ringkasan dari hasil penelitian tesis mahasiswa yang berfokus pada;",
      en: "Academic journal featuring legal and notarial studies.",
    },
    link: "https://jurnal.unissula.ac.id/index.php/jk",
  },

  {
    id: 4,
    title: {
      id: "Jurnal Tabelius",
      en: "Tabelius Journal",
    },
    description: {
      id: "Jurnal ilmiah di bidang hukum dan kenotariatan.",
      en: "Academic journal in the fields of law and notarial studies.",
    },
    link: "https://jurnal.unissula.ac.id/index.php/tabelius",
  },
];

function KartuJurnal({ item }) {
  const t = useT();

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.25,
        },
      }}
      className="bg-white border border-gray-200 rounded-xs p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-12 hover:border-gray-300 transition-all duration-200 shadow-2xs group"
    >
      {/* Sisi Kiri */}
      <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
        {/* Icon Buku */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
          className="text-primary text-2xl sm:text-3xl shrink-0 flex items-center justify-center"
        >
          <FiBookOpen />
        </motion.div>

        <motion.div
          variants={contentVariants}
          className="flex-1 min-w-0 max-w-3xl"
        >
          <h2 className="font-heading font-bold text-base sm:text-[18px] text-heading leading-snug group-hover:text-primary transition-colors">
            {t(item.title)}
          </h2>

          <p className="mt-2 text-sm text-gray-500 leading-relaxed text-justify">
            {t(item.description)}
          </p>
        </motion.div>
      </div>

      {/* Button */}
      <motion.div
        variants={contentVariants}
        className="shrink-0 flex items-center self-start sm:self-center pl-10 sm:pl-0"
      >
        {item.link ? (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-primary bg-primary text-white hover:bg-primary/90 rounded-xs text-xs sm:text-sm font-semibold transition-colors"
          >
            <motion.span
              whileHover={{
                x: 2,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <FiExternalLink className="text-base" />
            </motion.span>

            <span>
              {t({
                id: "Buka Jurnal",
                en: "Open Journal",
              })}
            </span>
          </motion.a>
        ) : (
          <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-dashed border-gray-300 bg-gray-50 text-gray-400 rounded-xs text-xs sm:text-sm font-semibold cursor-not-allowed select-none">
            {t(halaman.belumTersedia)}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Jurnaal() {
  const t = useT();
  const ui = useUi();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta
          name="description"
          content={t(halaman.meta.description)}
        />
      </Helmet>

      <div className="space-y-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.span
            variants={headerItemVariants}
            className="text-xs font-bold tracking-[0.16em] uppercase text-primary block"
          >
            {ui("sectionAcademic")}
          </motion.span>

          <motion.h1
            variants={headerItemVariants}
            className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            E-Jurnal
          </motion.h1>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.15,
            }}
            viewport={viewportSettings}
            className="h-[2px] bg-primary mt-4 mb-5"
          />
        </motion.div>

        {/* List Jurnal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          {jurnalData.map((item) => (
            <Fragment key={item.id}>
              <KartuJurnal item={item} />
            </Fragment>
          ))}
        </motion.div>
      </div>
    </>
  );
}