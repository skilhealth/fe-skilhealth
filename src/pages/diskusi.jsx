import Backbutton from "../components/back-button";
import Jawaban from "../components/jawaban";
import Pertanyaan from "../components/pertanyaan";
import { useLocation } from "react-router-dom";

function Diskusi() {
  const location = useLocation();
  const data = location.state && location.state.data;
  return (
    <main className="p-4">
      <Backbutton nama="Diskusi" />
      {data && <Pertanyaan data={data} />}
      {data && <Jawaban data={data} />}
    </main>
  );
}

export default Diskusi;
