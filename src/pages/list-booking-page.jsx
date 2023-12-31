import axios from "axios";
import moment from "moment/moment";
import Cekjadwal from "/src/assets/cek-jadwal.png";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../components/backbutton";
import BookingCard from "../components/booking-card";
import Loading from "../components/loading";  // Gantilah path sesuai struktur projek Anda
import { userContext } from "../context/user-provider";

function ListBooking() {
  const { isLogin } = useContext(userContext);
  const navigate = useNavigate();
  const [listJanji, setList] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  const id = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const booking = async (id) => {
    try {
      const response = await axios.get(
        `https://be-skilhealth.up.railway.app/bookings?user=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.message);
      return response.data.data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchData = async (id) => {
      const timeout = setTimeout(async () => {
        const listbooking = await booking(id);
        setList(listbooking);
        setShowLoading(false);
      }, 300);

      return () => clearTimeout(timeout); 
    };

    fetchData(id);
  }, [id]);

  if (showLoading) {
    return <Loading />;
  }

  if (!listJanji) {
    return (
      <div className="p-4 lg:px-24">
        <Backbutton nama="Janji pasien " />
        <div className="flex flex-col gap-2">
          <div className="w-full h-full flex justify-center items-center">
            <div className="text-lg font-semibold text-center text-black  opacity-40 absolute top-1/2 -translate-y-1/2">
              <div className="w-80">
                <img src={Cekjadwal} alt="" />
              </div>
              Kamu belum membuat jadwal
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 lg:px-24 flex flex-col items-center w-full">
      <Backbutton nama="Jadwal Janji Temu" />
      <div className="flex flex-col gap-2 max-w-5xl w-full mt-2">
        {listJanji.map((item, index) => (
          <BookingCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ListBooking;
