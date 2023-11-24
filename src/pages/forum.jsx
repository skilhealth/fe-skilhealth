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

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const forum = [
    {
      status: "Sudah Terjawab",
      judul: "Susah Tidur di Malam Hari",
      user: "Fulan",
      dokter: "Dr. Mira Iskandar",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab"
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
      pertanyaan: "Bertanya",
      jawaban: ""
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
      pertanyaan: "Bertanya",
      jawaban: ""
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
      pertanyaan: "Bertanya",
      jawaban: ""
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
      pertanyaan: "Bertanya",
      jawaban: ""
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
      pertanyaan: "Bertanya",
      jawaban: ""
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
      pertanyaan: "Bertanya",
      jawaban: ""
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
      pertanyaan: "Bertanya",
      jawaban: ""
    },
    {
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "Dr. Alexandria",
      pertanyaan: "Bertanya",
      jawaban: ""
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab"
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab"
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab"
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab"
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab"
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab"
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab"
    },
    {
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab"
    },
  ];

  //sudah terjawab
  const totalSudahTerjawabPages = Math.ceil(
    forum.filter(
      (item) =>
        item.status === "Sudah Terjawab" &&
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
        item.status === "Sudah Terjawab" &&
        item.judul.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstSudahTerjawabForum, indexOfLastSudahTerjawabForum);

  //Belum terjawab
  const totalBelumTerjawabPages = Math.ceil(
    forum.filter(
      (item) =>
        item.status === "Belum Terjawab" &&
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
        item.status === "Belum Terjawab" &&
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
        value={searchTerm}
        onChange={handleSearchChange}
      />

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
    </main>
  );
}
export default Forum;
