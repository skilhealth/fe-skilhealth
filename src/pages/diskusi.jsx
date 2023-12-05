import Backbutton from "../components/backbutton";
import Jawaban from "../components/jawaban";
import JawabanDokter from "../components/jawaban-dokter";

import Pertanyaan from "../components/pertanyaan";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { forumContext } from "../context/forum-provider";

function Diskusi() {
  const { forum, role } = useContext(forumContext)
  const location = useLocation();
  const data = location.state && location.state.data;
  return (
    <main className="p-4 lg:px-24 flex flex-col items-center border-4 ">
      <Backbutton nama="Diskusi" />
      <div className="max-w-4xl w-full">
        {data && <Pertanyaan data={data} />}
        {(() => {
          if (data.jawaban === "" || data.jawaban === null || data.jawaban === undefined) {
            if (role == "dokter") {
              return (data && <JawabanDokter data={data} />)
            }
          } else {
            return (data && <Jawaban data={data} />)
          }
        })()}
      </div>
    </main>
  );
}

export default Diskusi;
