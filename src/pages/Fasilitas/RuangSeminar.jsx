import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import {
  ruangSeminarLantai3Data,
  ruangSeminarLantai1Data,
} from "../../data/fasilitasData";

/**
 * Satu tab, dua ruangan. Aula lantai 3 dan ruang seminar lantai 1 punya
 * peruntukan dan daftar fasilitas yang berbeda, jadi keduanya ditampilkan
 * berurutan sebagai bagian tersendiri, bukan digabung jadi satu daftar.
 */
export default function RuangSeminar() {
  return (
    <>
      <Helmet>
        <title>Ruang Seminar | MKn UNISSULA</title>
        <meta
          name="description"
          content="Ruang seminar Fakultas Hukum UNISSULA: aula lantai 3 bergaya auditorium untuk seminar dan konferensi, serta ruang seminar lantai 1 untuk ujian tesis, rapat akademik, dan diskusi ilmiah."
        />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        <FacilityContent data={ruangSeminarLantai3Data} />

        <hr className="border-gray-200" />

        <FacilityContent data={ruangSeminarLantai1Data} />
      </div>
    </>
  );
}
