import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../components/back-button";
import ForumCard from "../components/forum-card";
import Pagination from "../components/pagination";

function Forum() {
  const navigate = useNavigate();

  const toPertanyaan = () => {
    navigate("/pertanyaan");
  };

  const [currentSudahTerjawabPage, setCurrentSudahTerjawabPage] = useState(1);
  const [currentBelumTerjawabPage, setCurrentBelumTerjawabPage] = useState(1);
  const forumsPerPage = 5;

  const forum = [
    {
      status: "Sudah Terjawab",
      judul: "Susah Tidur di Malam Hari",
      user: "Fulan",
      dokter: "Dr. Mira Iskandar",
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
    },
  ];
  //sudah terjawab
  const totalSudahTerjawabPages = Math.ceil(
    forum.filter((item) => item.status === "Sudah Terjawab").length /
      forumsPerPage
  );
  const indexOfLastSudahTerjawabForum =
    currentSudahTerjawabPage * forumsPerPage;
  const indexOfFirstSudahTerjawabForum =
    indexOfLastSudahTerjawabForum - forumsPerPage;
  const currentSudahTerjawabForumsSlice = forum
    .filter((item) => item.status === "Sudah Terjawab")
    .slice(indexOfFirstSudahTerjawabForum, indexOfLastSudahTerjawabForum);

  //Belum terjawab
  const totalBelumTerjawabPages = Math.ceil(
    forum.filter((item) => item.status === "Belum Terjawab").length /
      forumsPerPage
  );
  const indexOfLastBelumTerjawabForum =
    currentBelumTerjawabPage * forumsPerPage;
  const indexOfFirstBelumTerjawabForum =
    indexOfLastBelumTerjawabForum - forumsPerPage;
  const currentBelumTerjawabForumsSlice = forum
    .filter((item) => item.status === "Belum Terjawab")
    .slice(indexOfFirstBelumTerjawabForum, indexOfLastBelumTerjawabForum);

    const onSudahTerjawabPageChange = (pageNumber) => setCurrentSudahTerjawabPage(pageNumber);
  const onBelumTerjawabPageChange = (pageNumber) =>
    setCurrentBelumTerjawabPage(pageNumber);

  return (
    <main className="p-4">
      <Backbutton nama="Forum Chat" />
      <button
        className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2 my-4"
        onClick={toPertanyaan}
      >
        Buat Pertanyaan
      </button>

      <input
        type="text"
        className="bg-white h-11 w-full mb-8 border-2 border-black rounded-xl px-4 text-base text"
        placeholder="Cari Forum"
      />

      <div>
        <label className="text-2xl font-bold">Sudah Terjawab</label>
        {currentSudahTerjawabForumsSlice.map((item, index) => (
          <ForumCard key={index} data={item} />
        ))}
        <Pagination
          currentPage={currentSudahTerjawabPage}
          totalPages={totalSudahTerjawabPages}
          onPageChange={onSudahTerjawabPageChange}
        />
      </div>

      <div className="mt-4">
        <span className="text-2xl mt-4 font-bold">Belum Terjawab</span>
        {currentBelumTerjawabForumsSlice.map((item, index) => (
          <ForumCard key={index} data={item} />
        ))}
        <Pagination
          currentPage={currentBelumTerjawabPage}
          totalPages={totalBelumTerjawabPages}
          onPageChange={onBelumTerjawabPageChange}
        />
      </div>
    </main>
  );
}
export default Forum;
