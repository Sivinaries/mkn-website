import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import { visi, halaman } from "../../data/profil/visiData";

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

// Standard content animation
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

// Special animation for the main vision statement
const visionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export default function VisiMisi() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="py-4 sm:py-10 lg:py-16"
      >
        {/* Eyebrow */}
        <motion.span
          variants={itemVariants}
          className="text-xl font-semibold tracking-wider text-primary uppercase block"
        >
          {t(halaman.eyebrow)}
        </motion.span>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="mt-2 font-heading font-normal text-2xl sm:text-3xl text-heading/60 tracking-normal"
        >
          {t(halaman.judul)}
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-full h-[2px] bg-primary mt-4"
        />

        {/* Main Vision */}
        <blockquote className="mt-10 sm:mt-14 lg:mt-16 w-full">
          <motion.p
            variants={visionVariants}
            className="
              font-heading
              font-normal
              text-heading
              text-[26px]
              sm:text-4xl
              lg:text-[46px]
              leading-[1.35]
              tracking-normal
              text-justify
              text-balance
            "
          >
            <RichText>{t(visi)}</RichText>
          </motion.p>
        </blockquote>

        {/* Attribution */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-14"
        >
          {/* Small Divider */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 56,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={viewportSettings}
            className="h-[2px] bg-primary"
          />

          {/* Attribution Text */}
          <motion.footer
            variants={containerVariants}
            className="mt-4 space-y-0.5"
          >
            {halaman.atribusi.map((baris, idx) => (
              <motion.p
                key={idx}
                variants={itemVariants}
                className={`text-sm sm:text-[15px] leading-relaxed ${
                  idx === 0
                    ? "font-semibold text-heading"
                    : "text-body"
                }`}
              >
                {t(baris)}
              </motion.p>
            ))}
          </motion.footer>
        </motion.div>
      </motion.section>
    </>
  );
}
