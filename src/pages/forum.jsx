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

  const [currentPage, setCurrentPage] = useState(1);
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
    }
  ];

  const totalPages = Math.ceil(forum.length / forumsPerPage);
  const indexOfLastForum = currentPage * forumsPerPage;
  const indexOfFirstForum = indexOfLastForum - forumsPerPage;
  const currentForums = forum.slice(indexOfFirstForum, indexOfLastForum);

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="p-4">
      <Backbutton nama="Forum Chat" />
      <button
        className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2 my-4"
        onClick={toPertanyaan}
      >
        Buat Pertanyaan
      </button>

      {/*input cari forum */}
      <input
        type="text"
        className="bg-white h-11 w-full mb-8 border-2 border-black rounded-xl px-4 text-base text"
        placeholder="Cari Forum"
      />

<div>
        <label className="text-2xl font-bold">Sudah Terjawab</label>
        {currentForums
          .filter((item) => item.status === "Sudah Terjawab")
          .map((item, index) => (
            <ForumCard key={index} data={item} />
          ))}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>

      <div className="mt-4">
        <span className="text-2xl mt-4 font-bold">Belum Terjawab</span>
        {forum
          .filter((item) => item.status === "Belum Terjawab")
          .map((item, index) => (
            <ForumCard key={index} data={item} />
          ))}
        <Pagination />
      </div>
    </main>
  );
}
export default Forum;
