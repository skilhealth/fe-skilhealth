import Backbutton from "../components/backbutton";
import Jawaban from "../components/jawaban";
import JawabanDokter from "../components/jawaban-dokter";

import Pertanyaan from "../components/pertanyaan";
import { useLocation } from "react-router-dom";

function Diskusi() {
  const role = "dokter"
  const location = useLocation();
  const data = location.state && location.state.data;
  return (
    <main className="p-4 lg:px-24 flex flex-col items-center">
      <Backbutton nama="Diskusi" />
      {data && <Pertanyaan data={data} />}
      {(() => {
        if (role == "dokter") {
          if (data.jawaban === "" || data.jawaban === null || data.jawaban === undefined) {
            console.log("dokter tapi blom dijawab")
            return (data && <JawabanDokter data={data} />)
          }
          console.log("dokter tapi udah dijawab")
          return (data && <Jawaban data={data} />)
        }
        console.log("bukan dokter")
        return (data && <Jawaban data={data} />)
      })()}
    </main>
  );
}

export default Diskusi;
