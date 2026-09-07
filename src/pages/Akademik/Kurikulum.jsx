import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import {
  KartuSorot,
  JudulSeksi,
} from "../../components/Akademik/panduan/PanduanSorot";
import TabelSemester from "../../components/Akademik/TabelSemester";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import {
  sorotKurikulum,
  kolomMataKuliah,
  semester,
  totalSks,
  halaman,
} from "../../data/akademik/kurikulumData";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const totalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Kurikulum() {
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

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        {/* Kepala */}
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
            {t(halaman.judul)}
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={viewportSettings}
            className="h-[2px] bg-primary mt-4 mb-5"
          />
        </motion.div>

        {/* Sorotan Kurikulum */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
        >
          <KartuSorot butir={sorotKurikulum} />
        </motion.div>

        {/* Tebaran mata kuliah */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi
            judul={halaman.judulTebaran}
            keterangan={halaman.keteranganTebaran}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-6"
          >
            {semester.map((s) => (
              <motion.div
                key={s.nama}
                variants={cardVariants}
                whileHover={{
                  y: -2,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >
                <TabelSemester
                  nama={s.nama}
                  jumlahSks={s.jumlahSks}
                  kolom={kolomMataKuliah}
                  baris={s.baris}
                  pilihan={s.pilihan}
                  labelJumlahSks={halaman.labelJumlahSks}
                  labelSks={halaman.labelSks}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Total keseluruhan */}
          <motion.div
            variants={totalVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex items-baseline justify-between gap-4 border-2 border-primary bg-primary/5 px-5 sm:px-6 py-4 rounded-xs"
          >
            <span className="font-heading font-bold text-base sm:text-lg text-heading">
              {t(halaman.totalProdi)}
            </span>

            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
              viewport={viewportSettings}
              className="font-heading font-bold text-2xl sm:text-3xl text-primary tabular-nums"
            >
              {totalSks}
            </motion.span>
          </motion.div>
        </motion.section>

        {/* Rujukan silang ke tabel ekuivalensi */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
          className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-5 sm:p-6 rounded-xs"
        >
          <p className="text-sm text-body leading-relaxed">
            {t(halaman.ekuivalensiCatatan)}
          </p>

          <Link
            to="/akademik/pembelajaran/panduan-evaluasi"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            {t(halaman.ekuivalensiTautan)}

            <motion.span
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <FiArrowRight className="text-sm" />
            </motion.span>
          </Link>
        </motion.div>

        {/* Dokumen kurikulum */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi judul={halaman.judulDokumen} />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            viewport={viewportSettings}
            className="border border-dashed border-gray-300 bg-white p-10 sm:p-14 text-center rounded-xs"
          >
            <p className="text-sm font-medium text-gray-500">
              {t(halaman.dokumenKosong)}
            </p>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}