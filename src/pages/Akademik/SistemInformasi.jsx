import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import { FiBookOpen, FiExternalLink } from "react-icons/fi";

import { halaman } from "../../data/akademik/capaianPembelajaranData";

const linkSistem = [
  {
    id: 1,
    title: {
      id: "Sistem Informasi UNISSULA",
      en: "UNISSULA Information System",
    },
    link: "https://example.com",
  },
];

/** Satu kartu sistem beserta tautan menuju sistem. */
function KartuPedoman({ item }) {
  const t = useT();

  return (
    <div className="bg-white border border-gray-200 rounded-xs p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-12 hover:border-gray-300 transition-all duration-200 shadow-2xs group">
      {/* Sisi Kiri: Ikon Buku + Judul */}
      <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
        <div className="text-primary text-2xl sm:text-3xl mt-0.5 shrink-0">
          <FiBookOpen />
        </div>

        <div className="flex-1 min-w-0 max-w-2xl">
          <h2 className="font-heading font-bold text-base sm:text-[18px] text-heading leading-snug group-hover:text-primary transition-colors">
            {t(item.title)}
          </h2>
        </div>
      </div>

      {/* Sisi Kanan: Button menuju sistem */}
      <div className="shrink-0 flex items-center self-start sm:self-center pl-10 sm:pl-0">
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-primary bg-primary text-white hover:bg-primary/90 rounded-xs text-xs sm:text-sm font-semibold transition-colors"
          >
            <FiExternalLink className="text-base" />
            <span>Buka Sistem</span>
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

export default function SistemInformasi() {
  const t = useT();
  const ui = useUi();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-10">
        {/* Header Title Section */}
        <div>
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block">
            {ui("sectionAcademic")}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Sistem Informasi
          </h1>

          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
        </div>

        {/* List Sistem Informasi */}
        <div className="space-y-4">
          {linkSistem.map((item) => (
            <Fragment key={item.id}>
              <KartuPedoman item={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
