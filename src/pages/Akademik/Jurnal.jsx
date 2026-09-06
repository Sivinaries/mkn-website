import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import { FiBookOpen, FiExternalLink } from "react-icons/fi";

import {
  halaman,
} from "../../data/akademik/capaianPembelajaranData";

const jurnalData = [
  {
    id: 1,
    title: {
      id: "SANLaR",
      en: "SANLaR",
    },
    description: {
      id: "Jurnal ilmiah kenotariatan dan pertanahan.",
      en: "Academic journal on notarial and land law studies.",
    },
    link: "http://jurnal.unissula.ac.id/index.php/SANLaR",
  },
  {
    id: 2,
    title: {
      id: "Jurnal Akta",
      en: "Akta Journal",
    },
    description: {
      id: "Jurnal ilmiah yang membahas kajian hukum dan kenotariatan.",
      en: "Academic journal covering legal and notarial studies.",
    },
    link: "http://jurnal.unissula.ac.id/index.php/akta",
  },
  {
    id: 3,
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
  {
    id: 4,
    title: {
      id: "Jurnal Konstatering",
      en: "Konstatering Journal",
    },
    description: {
      id: "Jurnal ilmiah yang memuat kajian hukum dan kenotariatan.",
      en: "Academic journal featuring legal and notarial studies.",
    },
    link: "https://jurnal.unissula.ac.id/index.php/jk",
  },
];

function KartuJurnal({ item }) {
  const t = useT();

  return (
    <div className="bg-white border border-gray-200 rounded-xs p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-12 hover:border-gray-300 transition-all duration-200 shadow-2xs group">
      {/* Sisi Kiri */}
      <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
        <div className="text-primary text-2xl sm:text-3xl mt-0.5 shrink-0">
          <FiBookOpen />
        </div>

        <div className="flex-1 min-w-0 max-w-3xl">
          <h2 className="font-heading font-bold text-base sm:text-[18px] text-heading leading-snug group-hover:text-primary transition-colors">
            {t(item.title)}
          </h2>

          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            {t(item.description)}
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="shrink-0 flex items-center self-start sm:self-center pl-10 sm:pl-0">
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-primary bg-primary text-white hover:bg-primary/90 rounded-xs text-xs sm:text-sm font-semibold transition-colors"
          >
            <FiExternalLink className="text-base" />

            <span>
              {t({
                id: "Buka Jurnal",
                en: "Open Journal",
              })}
            </span>
          </a>
        ) : (
          <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-dashed border-gray-300 bg-gray-50 text-gray-400 rounded-xs text-xs sm:text-sm font-semibold cursor-not-allowed select-none">
            {t(halaman.belumTersedia)}
          </span>
        )}
      </div>
    </div>
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
        <div>
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block">
            {ui("sectionAcademic")}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            E-Jurnal
          </h1>

          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
        </div>

        {/* List Jurnal */}
        <div className="space-y-4">
          {jurnalData.map((item) => (
            <Fragment key={item.id}>
              <KartuJurnal item={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
