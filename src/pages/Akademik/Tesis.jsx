import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import {
  KartuSorot,
  JudulSeksi,
  KartuRingkas,
  AlurTahap,
} from "../../components/Akademik/panduan/PanduanSorot";
import { useT } from "../../i18n/languageContext";
import {
  sorotTesis,
  alurTahap,
  tigaUjian,
  halamanTesis,
} from "../../data/akademik/panduanTesisData";

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

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const tabVariants = {
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

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const ALUR = {
  judul: {
    id: "Alur Penyelesaian Tesis",
    en: "The Thesis Pathway",
  },
  keterangan: {
    id:
      "Delapan tahap sejak pengajuan judul hingga ujian tesis, ditempuh dalam waktu dua " +
      "semester.",
    en:
      "Eight stages from submitting the title to the thesis examination, completed over " +
      "two semesters.",
  },
};

const TIGA = {
  judul: {
    id: "Tiga Ujian dalam Penyelesaian Tesis",
    en: "Three Examinations Along the Thesis Pathway",
  },
  keterangan: {
    id:
      "Seluruh pembimbing tesis bergelar Doktor, dan setiap ujian memiliki ketentuannya " +
      "sendiri.",
    en:
      "Every thesis supervisor holds a doctorate, and each examination has its own rules.",
  },
};

const subTab = [
  {
    path: "pra-proposal",
    label: halamanTesis.tab.praProposal,
  },
  {
    path: "proposal",
    label: halamanTesis.tab.proposal,
  },
  {
    path: "ujian-tesis",
    label: halamanTesis.tab.tesis,
  },
];

/**
 * Induk Panduan Ujian Tesis.
 *
 * Bagian yang berlaku untuk ketiga ujian — angka kunci, alur delapan tahap, dan
 * gambaran ketiga ujian — ditampilkan di sini. Ketentuan khusus tiap ujian
 * berada di tab masing-masing.
 */
export default function Tesis() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halamanTesis.meta.title)}</title>
        <meta
          name="description"
          content={t(halamanTesis.meta.description)}
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14">
        {/* Angka kunci */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <KartuSorot butir={sorotTesis} />
        </motion.div>

        {/* Alur delapan tahap */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-6"
        >
          <motion.div
            variants={headerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <JudulSeksi
              judul={ALUR.judul}
              keterangan={ALUR.keterangan}
            />
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <AlurTahap tahap={alurTahap} />
          </motion.div>
        </motion.section>

        {/* Tiga jenis ujian */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <motion.div
            variants={headerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <JudulSeksi
              judul={TIGA.judul}
              keterangan={TIGA.keterangan}
            />
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <KartuRingkas
              butir={tigaUjian}
              kolom={3}
            />
          </motion.div>
        </motion.section>

        {/* Ketentuan khusus tiap ujian */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-7 pt-1"
        >
          <motion.nav
            variants={sectionVariants}
            className="flex gap-2 border-b border-gray-200 overflow-x-auto scrollbar-none"
            aria-label="Jenis Ujian Tesis"
          >
            {subTab.map((item) => (
              <motion.div
                key={item.path}
                variants={tabVariants}
                whileHover={{
                  y: -2,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `shrink-0 whitespace-nowrap inline-block px-4 py-3 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase transition-colors border-b-2 ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-body hover:text-heading hover:border-gray-300"
                    }`
                  }
                >
                  {t(item.label)}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            variants={contentVariants}
            className="min-w-0"
          >
            <Outlet />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}