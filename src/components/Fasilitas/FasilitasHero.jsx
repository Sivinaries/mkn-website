import {
  ruangKelasData,
  ruangSeminarLantai3Data,
  laboratoriumAktaData,
  laboratoriumManajemenKantorData,
  podcastData,
  perpustakaanData,
} from "../../data/fasilitasData";
import HeroSlideshow from "../ui/HeroSlideshow";

/**
 * Satu foto mewakili satu fasilitas, jadi hero-nya mengelilingi semuanya.
 * Urutannya mengikuti urutan tab. Pusat Riset Mahasiswa belum menyerahkan
 * foto, sehingga otomatis tersaring keluar.
 */
const fotoLatar = [
  ruangKelasData,
  ruangSeminarLantai3Data,
  laboratoriumAktaData,
  laboratoriumManajemenKantorData,
  podcastData,
  perpustakaanData,
]
  .map((fasilitas) => fasilitas.galeri?.[0])
  .filter(Boolean);

export default function FasilitasHero() {
  return (
    <HeroSlideshow
      fotoLatar={fotoLatar}
      eyebrow="Fasilitas"
      judul="Ruang untuk Belajar dan Meneliti"
      deskripsi="Tujuh kelompok fasilitas menopang penyelenggaraan pendidikan Magister Kenotariatan, dari ruang kelas, ruang seminar, dan laboratorium hingga pusat riset mahasiswa, ruang podcast, dan perpustakaan hukum."
    />
  );
}
