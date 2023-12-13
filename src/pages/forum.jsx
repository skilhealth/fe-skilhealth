import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../components/backbutton";
import ForumCard from "../components/forum-card";
import Pagination from "../components/pagination";
import { forumContext } from "../context/forum-provider";
import Loading from "../components/loading";
import forumPng from "/src/assets/forum.png";

function Forum() {
  const { role, forum } = useContext(forumContext);
  const navigate = useNavigate();

  const toBuatPertanyaan = () => {
    navigate("tanya");
  };

  const [currentSudahTerjawabPage, setCurrentSudahTerjawabPage] = useState(1);
  const [currentBelumTerjawabPage, setCurrentBelumTerjawabPage] = useState(1);
  const forumsPerPage = 5;

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout); 
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!forum||!role) {
    return (
      <div className="p-4 lg:px-24">
        <Backbutton nama="Janji pasien " />
        <div className="flex flex-col gap-2">
          <div className="w-full h-full flex justify-center items-center">
            <div className="text-lg font-semibold text-center text-black  opacity-40 absolute top-1/2 -translate-y-1/2">
              <div className="w-80">
                <img src={forumPng} alt="" />
              </div>
              Tidak menemukan forum
            </div>
          </div>
        </div>
      </div>
    );
  }

  const totalSudahTerjawabPages = Math.ceil(
    forum.filter(
      (item) =>
        item.status === true &&
        item.judul.toLowerCase().includes(searchTerm.toLowerCase())
    ).length / forumsPerPage
  );
  const indexOfLastSudahTerjawabForum =
    currentSudahTerjawabPage * forumsPerPage;
  const indexOfFirstSudahTerjawabForum =
    indexOfLastSudahTerjawabForum - forumsPerPage;
  const currentSudahTerjawabForumsSlice = forum
    .filter(
      (item) =>
        item.status === true &&
        item.judul.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstSudahTerjawabForum, indexOfLastSudahTerjawabForum);

  // Belum terjawab
  const totalBelumTerjawabPages = Math.ceil(
    forum.filter(
      (item) =>
        item.status === false &&
        item.judul.toLowerCase().includes(searchTerm.toLowerCase())
    ).length / forumsPerPage
  );
  const indexOfLastBelumTerjawabForum =
    currentBelumTerjawabPage * forumsPerPage;
  const indexOfFirstBelumTerjawabForum =
    indexOfLastBelumTerjawabForum - forumsPerPage;
  const currentBelumTerjawabForumsSlice = forum
    .filter(
      (item) =>
        item.status === false &&
        item.judul.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstBelumTerjawabForum, indexOfLastBelumTerjawabForum);

  const sudahTerjawabContent =
    currentSudahTerjawabForumsSlice.length > 0 ? (
      currentSudahTerjawabForumsSlice.map((item, index) => (
        <ForumCard key={index} data={item} />
      ))
    ) : (
      <p>Tidak Menemukan Topik yang Sesuai</p>
    );

  const belumTerjawabContent =
    currentBelumTerjawabForumsSlice.length > 0 ? (
      currentBelumTerjawabForumsSlice.map((item, index) => (
        <ForumCard key={index} data={item} />
      ))
    ) : (
      <p>Tidak Menemukan Topik yang Sesuai</p>
    );

  const onSudahTerjawabPageChange = (pageNumber) =>
    setCurrentSudahTerjawabPage(pageNumber);
  const onBelumTerjawabPageChange = (pageNumber) =>
    setCurrentBelumTerjawabPage(pageNumber);

  return (
    <main className="p-4 lg:px-24 flex flex-col items-center w-full">
      <Backbutton nama="Forum Chat" />
      <button
        className={`bg-red-700 rounded-xl font-medium w-full max-w-3xl text-lg text-white p-2 my-4 hover:opacity-70 transition duration-200 ${role === "dokter" ? "hidden" : ""}`}
        onClick={toBuatPertanyaan}
      >
        Buat Pertanyaan
      </button>

      <input
        type="text"
        className="bg-white h-11 w-full mb-8 border-2 border-black rounded-xl px-4 text-base max-w-3xl"
        placeholder="Cari Forum"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className={`flex w-full max-w-3xl ${role === "dokter" ? "flex-col-reverse" : "flex-col"}`}>
        <div>
          <label className="text-2xl font-bold">Sudah Terjawab</label>
          {sudahTerjawabContent}
          <Pagination
            currentPage={currentSudahTerjawabPage}
            totalPages={totalSudahTerjawabPages}
            onPageChange={onSudahTerjawabPageChange}
          />
        </div>

        <div className="mt-4">
          <span className="text-2xl mt-4 font-bold">Belum Terjawab</span>
          {belumTerjawabContent}
          <Pagination
            currentPage={currentBelumTerjawabPage}
            totalPages={totalBelumTerjawabPages}
            onPageChange={onBelumTerjawabPageChange}
          />
        </div>
      </div>
    </main>
  );
}

export default Forum;
