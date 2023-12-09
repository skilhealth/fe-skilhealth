import janjiSvg from "/src/assets/janji-temu.svg";
import forumPng from "/src/assets/forum.png";
import Ambulan from "/src/assets/ambulan.png";
import Ujilab from "/src/assets/uji-lab.png";
import Cekjadwal from "/src/assets/cek-jadwal.png";
import BannerImg from "/src/assets/bannerskilhealth.png";
import BannerRS from "/src/assets/hospital-banner.png";
import FooterLanding from "../components/footer";
import { Link } from "react-router-dom";
import ForumCard from "../components/forum-card";
import { useContext } from "react";
import { forumContext } from "../context/forum-provider";
import { userContext } from "../context/user-provider";
import Loading from "../components/loading";

function LandingPage({ role }) {
  const { user } = useContext(userContext);
  const { forum } = useContext(forumContext);
  const id = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  if (!forum) {
    return (
      <Loading />
    );
  }

  if (!user) {
    return (
      <div className="">
        <div className="p-4 lg:px-24 lg:py-7">
          <div className="flex w-full pl-4 bg-red-700 rounded-lg items-center  h-60 lg:pl-20 lg:h-80 justify-between overflow-hidden">
            <div className="text-white w-full max-w-[168px] lg:max-w-lg flex flex-col gap-4">
              <p className="text-lg font-semibold lg:text-4xl lg:leading-relaxed">
                Atur Janji Temu Dokter Skilvul Hospital di SkilHealth
              </p>
              <div>
                <Link to="/doctor/search">
                  <button className="bg-white hover:opacity-70 transition duration-200 text-red-700 rounded-lg p-2 font-semibold mt-auto lg:text-xl lg:p-3">
                    Cari Dokter
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-full">
              <img src={BannerImg} alt="" className=" object-cover h-full" />
            </div>
          </div>
          <div className="my-4 lg:my-7">
            <h3 className="text-xl font-bold mb-4 lg:text-2xl text-center">
              Apa yang Kamu Butuhkan?
            </h3>
            <div className="flex flex-wrap justify-center gap-4 ">
              <Link
                to="/doctor/search"
                className="flex flex-col items-center hover:opacity-70 transition duration-200"
              >
                <div className="p-3  bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                  <img src={janjiSvg} alt="" className="h-full" />
                </div>
                <div className="w-20 text-center font-semibold mt-2">
                  Buat Janji Temu
                </div>
              </Link>
              <Link
                to="/ujilab"
                className="flex flex-col items-center hover:opacity-70 transition duration-200"
              >
                <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square justify-center flex h-20">
                  <img src={Ujilab} alt="" />
                </div>
                <div className="w-20 text-center text-[14.4px] font-semibold mt-2">
                  Hasil Rekam Medis
                </div>
              </Link>
              <Link
                to="/ambulan"
                className="flex flex-col items-center hover:opacity-70 transition duration-200"
              >
                <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                  <img src={Ambulan} alt="" />
                </div>
                <div className="w-20 text-center font-semibold mt-2">
                  Panggil Ambulan
                </div>
              </Link>
              <Link
                to="/forum"
                className="flex flex-col items-center hover:opacity-70 transition duration-200"
              >
                <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                  <img src={forumPng} alt="" />
                </div>
                <div className="w-20 text-center font-semibold mt-2">Forum</div>
              </Link>
              <Link
                to="/booking"
                className="flex flex-col items-center hover:opacity-70 transition duration-200"
              >
                <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                  <img src={Cekjadwal} alt="" />
                </div>
                <div className="w-20 text-center font-semibold mt-2">
                  Cek Jadwal
                </div>
              </Link>
            </div>
          </div>
          <div className="flex w-full pl-4 bg-red-700 rounded-lg items-center h-48 lg:pl-20 lg:px-4 lg:h-80 justify-between overflow-hidden">
            <div className="text-white w-full max-w-[168px] lg:max-w-lg flex flex-col gap-10 justify-between">
              <p className="text-lg font-semibold lg:text-4xl lg:leading-relaxed">
                Skilvul Hospital Tersebar diseluruh indonesia
              </p>
              <Link to="/rumahsakit ">
                <button className="bg-white hover:opacity-70 transition duration-200 text-red-700 rounded-lg p-2 font-semibold mt-auto lg:text-xl lg:p-3">
                  Cek Rumah Sakit
                </button>
              </Link>
            </div>
            <div className="h-full flex items-center p-2">
              <img
                src={BannerRS}
                alt=""
                className=" object-cover h-32 lg:h-64"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold lg:text-center lg:text-2xl mb-2">
              Topik Baru Baru Ini
            </h3>
            <div className="flex flex-col border-none lg:flex-row gap-1 flex-wrap border justify-center">
              {forum.slice(0, 3).map((item, index) => {
                return <ForumCard key={index} data={item} />;
              })}
            </div>
          </div>
        </div>
        <FooterLanding role={role} />
      </div>
    );
  }

  return (
    <div className="">
      <div className="p-4 lg:px-24 lg:py-7">
        <div className="flex w-full pl-4 bg-red-700 rounded-lg items-center  h-60 lg:pl-20 lg:h-80 justify-between overflow-hidden">
          <div className="text-white w-full max-w-[168px] lg:max-w-lg flex flex-col gap-4">
            <div className="text-white flex gap-2 items-end">
              <p className="text-lg font-bold lg:text-4xl align-text-bottom">
                Halo
              </p>
              <h3 className="text-lg font-bold lg:text-4xl">{user.nama} !</h3>
            </div>
            <p className="text-lg font-semibold lg:text-4xl lg:leading-relaxed">
              Atur Janji Temu Dokter Skilvul Hospital di SkilHealth
            </p>
            <div>
              <Link to="/doctor/search">
                <button className="bg-white hover:opacity-70 transition duration-200 text-red-700 rounded-lg p-2 font-semibold mt-auto lg:text-xl lg:p-3">
                  Cari Dokter
                </button>
              </Link>
            </div>
          </div>
          <div className="h-full">
            <img src={BannerImg} alt="" className=" object-cover h-full" />
          </div>
        </div>
        <div className="my-4 lg:my-7">
          <h3 className="text-xl font-bold mb-4 lg:text-2xl text-center">
            Apa yang Kamu Butuhkan?
          </h3>
          <div className="flex flex-wrap justify-center gap-4 ">
            <Link
              to="/doctor/search"
              className="flex flex-col items-center hover:opacity-70 transition duration-200"
            >
              <div className="p-3  bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                <img src={janjiSvg} alt="" className="h-full" />
              </div>
              <div className="w-20 text-center font-semibold mt-2">
                Buat Janji Temu
              </div>
            </Link>
            <Link
              to="/ujilab"
              className="flex flex-col items-center hover:opacity-70 transition duration-200"
            >
              <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square justify-center flex h-20">
                <img src={Ujilab} alt="" />
              </div>
              <div className="w-20 text-center text-[14.4px] font-semibold mt-2">
                Hasil Rekam Medis
              </div>
            </Link>
            <Link
              to="/ambulan"
              className="flex flex-col items-center hover:opacity-70 transition duration-200"
            >
              <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                <img src={Ambulan} alt="" />
              </div>
              <div className="w-20 text-center font-semibold mt-2">
                Panggil Ambulan
              </div>
            </Link>
            <Link
              to="/forum"
              className="flex flex-col items-center hover:opacity-70 transition duration-200"
            >
              <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                <img src={forumPng} alt="" />
              </div>
              <div className="w-20 text-center font-semibold mt-2">Forum</div>
            </Link>
            <Link
              to="/booking"
              className="flex flex-col items-center hover:opacity-70 transition duration-200"
            >
              <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                <img src={Cekjadwal} alt="" />
              </div>
              <div className="w-20 text-center font-semibold mt-2">
                Cek Jadwal
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-full pl-4 bg-red-700 rounded-lg items-center h-48 lg:pl-20 lg:px-4 lg:h-80 justify-between overflow-hidden">
          <div className="text-white w-full max-w-[168px] lg:max-w-lg flex flex-col gap-10 justify-between">
            <p className="text-lg font-semibold lg:text-4xl lg:leading-relaxed">
              Skilvul Hospital Tersebar diseluruh indonesia
            </p>
            <Link to="/rumahsakit ">
              <button className="bg-white hover:opacity-70 transition duration-200 text-red-700 rounded-lg p-2 font-semibold mt-auto lg:text-xl lg:p-3">
                Cek Rumah Sakit
              </button>
            </Link>
          </div>
          <div className="h-full flex items-center p-2">
            <img src={BannerRS} alt="" className=" object-cover h-32 lg:h-64" />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold lg:text-center lg:text-2xl mb-2">
            Topik Baru Baru Ini
          </h3>
          <div className="flex flex-col border-none lg:flex-row gap-1 flex-wrap border justify-center">
            {forum.slice(0, 3).map((item, index) => {
              return <ForumCard key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
      <FooterLanding role={role} />
    </div>
  );
}
export default LandingPage;
