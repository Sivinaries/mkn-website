import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { useT } from "../../i18n/languageContext";

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

const navItemVariants = {
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

const subMenus = [
  {
    path: "uts-uas",
    label: { id: "UTS / UAS", en: "Midterm / Final" },
  },
  {
    path: "tesis",
    label: { id: "Tesis", en: "Thesis" },
  },
];

const halaman = {
  meta: {
    title: {
      id: "Panduan Ujian & Evaluasi | MKn UNISSULA",
      en: "Examination & Assessment Guidelines | MKn UNISSULA",
    },
    description: {
      id:
        "Panduan resmi ujian UTS/UAS serta ujian pra proposal, proposal, dan tesis " +
        "Program Studi Magister Kenotariatan UNISSULA.",
      en:
        "Official guidelines for midterm and final examinations and for the " +
        "pre-proposal, proposal, and thesis examinations at the UNISSULA Master of " +
        "Notarial Law Study Programme.",
    },
  },
  label: {
    id: "AKADEMIK",
    en: "ACADEMIC",
  },
  judul: {
    id: "Panduan Ujian",
    en: "Examination Guidelines",
  },
  intro: {
    id:
      "Panduan resmi pelaksanaan ujian di Program Magister Kenotariatan UNISSULA, " +
      "mencakup prosedur UTS/UAS serta rangkaian ujian pra proposal, usulan proposal, " +
      "dan tesis.",
    en:
      "The official guidelines for examinations in the UNISSULA Master of Notarial Law " +
      "programme, covering midterm and final examination procedures and the sequence of " +
      "pre-proposal, proposal, and thesis examinations.",
  },
};

export default function PanduanUjian() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta
          name="description"
          content={t(halaman.meta.description)}
        />
      </Helmet>

      <div className="space-y-6">
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
            {t(halaman.label)}
          </motion.span>

          <motion.h1
            variants={headerItemVariants}
            className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            {t(halaman.judul)}
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.15,
            }}
            viewport={viewportSettings}
            className="h-[2px] bg-primary mt-4"
          />
        </motion.div>

        {/* Sub-navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex gap-2 border-b border-gray-200 pb-0 overflow-x-auto scrollbar-none"
        >
          {subMenus.map((item) => (
            <motion.div
              key={item.path}
              variants={navItemVariants}
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
                  `shrink-0 whitespace-nowrap inline-block px-4 py-3 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase transition-colors border-b-2 -mb-px ${
                    isActive
                      ? "text-primary border-primary"
                      : "text-body border-transparent hover:text-heading hover:border-gray-300"
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>

        {/* Sub-page content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={contentVariants}
          viewport={viewportSettings}
          className="pt-2"
        >
          <Outlet />
        </motion.div>
      </div>
    </>
  );
}