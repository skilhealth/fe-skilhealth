import Backbutton from "../components/back-button";
import JawabanDokter from "../components/jawaban-dokter";

import Pertanyaan from "../components/pertanyaan";
import { useLocation } from "react-router-dom";

function DiskusiDokter() {
  const location = useLocation();
  const data = location.state && location.state.data;
  return (
    <main className="p-4">
      <Backbutton nama="Diskusi" />
      {data && <Pertanyaan data={data} />}
      {data && <JawabanDokter data={data} />}
    </main>
  );
}

export default DiskusiDokter;
