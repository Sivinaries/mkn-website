import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useUi } from "../../i18n/useUi";
import {
  KartuSorot,
  JudulSeksi,
  KartuRingkas,
  DaftarSyarat,
  AlurTahap,
  CatatanDokumen,
} from "../../components/Akademik/panduan/PanduanSorot";
import {
  TabelPanduan,
  Klausul,
} from "../../components/Akademik/panduan/PanduanBagian";
import {
  sorotEvaluasi,
  prinsipPenilaian,
  bobotKolom,
  bobotBaris,
  bobotCatatan,
  skalaKolom,
  skalaBaris,
  batasKelulusan,
  langkahKetercapaian,
  catatanKetercapaian,
  kategoriKolom,
  kategoriBaris,
  remidiasi,
  syaratKelulusan,
  predikatKolom,
  predikatBaris,
  siklusKolom,
  siklusBaris,
  ekuivalensiKolom,
  ekuivalensiBaris,
  ekuivalensiCatatan,
} from "../../data/akademik/panduanEvaluasiData";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
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

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

export default function PanduanEvaluasi() {
  const ui = useUi();

  return (
    <>
      <Helmet>
        <title>
          Panduan Evaluasi Pembelajaran | MKn UNISSULA
        </title>

        <meta
          name="description"
          content="Panduan Evaluasi Pembelajaran Program Studi Magister Kenotariatan UNISSULA — bobot komponen penilaian, skala nilai, ketercapaian CPL, remidiasi, dan predikat kelulusan."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14">
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
            Panduan Evaluasi Pembelajaran
          </motion.h1>

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
              duration: 0.9,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={viewportSettings}
            className="w-full h-[2px] bg-primary mt-4 mb-5"
          />
        </motion.div>

        {/* Sorotan Evaluasi */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <KartuSorot butir={sorotEvaluasi} />
        </motion.div>

        {/* Sifat Penilaian */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi judul="Sifat Penilaian" />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <KartuRingkas
              butir={prinsipPenilaian}
              kolom={3}
            />
          </motion.div>
        </motion.section>

        {/* Teknik dan Instrumental Penilaian */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi
            judul="Teknik dan Instrumental Penilaian Tiap Mata Kuliah"
          />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <TabelPanduan
              kolom={bobotKolom}
              baris={bobotBaris}
            />
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <Klausul butir={bobotCatatan} />
          </motion.div>
        </motion.section>

        {/* Skala Nilai */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi judul="Skala Nilai dan Batas Kelulusan" />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <TabelPanduan
              kolom={skalaKolom}
              baris={skalaBaris}
            />
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <Klausul butir={batasKelulusan} />
          </motion.div>
        </motion.section>

        {/* Perhitungan Ketercapaian */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi
            judul="Perhitungan Ketercapaian"
            keterangan="Perhitungan dilakukan berjenjang dari butir penilaian sampai tingkat program studi."
          />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <AlurTahap tahap={langkahKetercapaian} />
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <Klausul butir={catatanKetercapaian} />
          </motion.div>
        </motion.section>

        {/* Kategori Ketercapaian */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi
            judul="Kategori Ketercapaian dan Tindak Lanjut"
          />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <TabelPanduan
              kolom={kategoriKolom}
              baris={kategoriBaris}
            />
          </motion.div>
        </motion.section>

        {/* Remidiasi */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi judul="Remidiasi dan Perbaikan Nilai" />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <Klausul butir={remidiasi} />
          </motion.div>
        </motion.section>

        {/* Syarat Kelulusan */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi
            judul="Syarat Kelulusan dan Predikat"
            keterangan="Mahasiswa berhak menyandang gelar Magister Kenotariatan (M.Kn.) apabila memenuhi seluruh syarat berikut."
          />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <DaftarSyarat butir={syaratKelulusan} />
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <TabelPanduan
              kolom={predikatKolom}
              baris={predikatBaris}
            />
          </motion.div>
        </motion.section>

        {/* Siklus Evaluasi */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi
            judul="Siklus Evaluasi dan Perbaikan Berkelanjutan"
          />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <TabelPanduan
              kolom={siklusKolom}
              baris={siklusBaris}
            />
          </motion.div>
        </motion.section>

        {/* Ekuivalensi Kurikulum */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          <JudulSeksi
            judul="Ekuivalensi Kurikulum 2021 ke Kurikulum OBE 2026"
            keterangan="Berlaku bagi mahasiswa angkatan Kurikulum 2021 (36 sks) yang belum menyelesaikan studi. Mata kuliah yang dinyatakan setara diakui tanpa perlu ditempuh kembali; selisih beban studi dipenuhi dengan menempuh mata kuliah yang belum berpadanan."
          />

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <TabelPanduan
              kolom={ekuivalensiKolom}
              baris={ekuivalensiBaris}
            />
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <Klausul butir={ekuivalensiCatatan} />
          </motion.div>
        </motion.section>

        {/* Catatan Dokumen */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
        >
          <CatatanDokumen
            nama="Panduan Evaluasi Pembelajaran"
          />
        </motion.div>
      </div>
    </>
  );
}