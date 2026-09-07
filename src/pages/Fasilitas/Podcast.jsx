import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { podcastData } from "../../data/fasilitasData";

export default function Podcast() {
  return (
    <>
      <Helmet>
        <title>Ruang Podcast Kenotariatan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Ruang Podcast Magister Kenotariatan UNISSULA: studio produksi konten edukatif, wawancara pakar dan praktisi, serta diseminasi hasil penelitian dan pengabdian kepada masyarakat."
        />
      </Helmet>

      <FacilityContent data={podcastData} />
    </>
  );
}
