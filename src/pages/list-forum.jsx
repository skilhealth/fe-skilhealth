import Backbutton from "../components/back-button"
import ForumCard from "../components/forum-card"
import Paginations from "../components/pagination"


function ListForum(){
    return(
        <main className="p-4">
            <Backbutton nama="Forum Chat"/>
            <button className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2 my-4">Buat Pertanyaan</button>
            <input type="text" className="bg-white h-11 w-full mb-4 border-2 border-black rounded-xl my-4 mt-2 px-4 text-base text" placeholder="Cari Forum" />

            <span className="text-3xl my-4 font-bold">Sudah Terjawab</span>
            <section className="flex flex-col gap-2 mt-4">
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
            </section>
            < Paginations/>

            <span className="text-3xl my-4 font-bold">Belum Terjawab</span>
            <section className="flex flex-col gap-2 mt-4">
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
            </section>
            < Paginations/>
        </main>
    )
}
export default ListForum