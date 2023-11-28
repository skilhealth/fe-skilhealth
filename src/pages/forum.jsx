import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../components/backbutton";
import ForumCard from "../components/forum-card";
import Pagination from "../components/pagination";

function Forum() {
  const navigate = useNavigate();
  const role = "dokte"

  const toBuatPertanyaan = () => {
    navigate("add");
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
      id:1,
      status: "Sudah Terjawab",
      judul: "Susah Tidur di Malam Hari",
      user: "Fulan",
      dokter: "Dr. Mira Iskandar",
      spesialis: "Dokter Umum",
      pertanyaan:
        "Dok, saya punya masalah soal tidur. Setiap malam, ntah kenapa walaupun saya ngantuk dan berusaha mau tidur, walaupun udah baring berjam-jam ga tidur-tidur dok. Apakah ada solusi?",
      jawaban:
        "Masalah tidur malam dapat disebabkan oleh berbagai faktor, dan solusinya dapat bervariasi tergantung pada penyebab spesifiknya. Cobalah untuk menjaga jadwal tidur yang tetap, bahkan pada akhir pekan. Hal ini membantu mengatur jam biologis tubuh dan meningkatkan kualitas tidur.",
    },
    {
      id:2,
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "",
      spesialis: "",
      pertanyaan: "Bertanya",
      jawaban: "",
    },
    {
      id:3,
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "",
      spesialis: "",
      pertanyaan: "Bertanya",
      jawaban: "",
    },
    {
      id:4,
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "",
      spesialis: "",
      pertanyaan: "Bertanya",
      jawaban: "",
    },
    {
      id:5,
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "",
      spesialis: "",
      pertanyaan: "Bertanya",
      jawaban: "",
    },
    {
      id:6,
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "",
      spesialis: "",
      pertanyaan: "Bertanya",
      jawaban: "",
    },
    {
      id:7,
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "",
      spesialis: "",
      pertanyaan: "Bertanya",
      jawaban: "",
    },
    {
      id:8,
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "",
      spesialis: "",
      pertanyaan: "Bertanya",
      jawaban: "",
    },
    {
      id:9,
      status: "Belum Terjawab",
      judul: "Merasa Lelah di Pagi Hari",
      user: "Werner",
      dokter: "",
      spesialis: "",
      pertanyaan: "Bertanya",
      jawaban: "",
    },
    {
      id:10,
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      spesialis: "Dokter Umum",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab",
    },
    {
      id:11,
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      pertanyaan: "Bertanya",
      spesialis: "Dokter Umum",
      jawaban: "Dijawab",
    },
    {
      id:12,
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      spesialis: "Dokter Umum",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab",
    },
    {
      id:13,
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      spesialis: "Dokter Umum",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab",
    },
    {
      id:14,
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      spesialis: "Dokter Umum",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab",
    },
    {
      id:15,
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      spesialis: "Dokter Umum",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab",
    },
    {
      id:16,
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      spesialis: "Dokter Umum",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab",
    },
    {
      id:17,
      status: "Sudah Terjawab",
      judul: "Sering Mual saat Sikat Gigi",
      user: "Kai",
      dokter: "Dr. Havertz",
      spesialis: "Dokter Umum",
      pertanyaan: "Bertanya",
      jawaban: "Dijawab",
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
    <main className="p-4 lg:px-24">
      <Backbutton nama="Forum Chat" />
      <button
        className={`bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2 my-4 ${role === "dokter"?"hidden":""}`}
        onClick={toBuatPertanyaan}
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
      <div className={`flex ${role === "dokter"? "flex-col-reverse":"flex-col"}`}>
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
