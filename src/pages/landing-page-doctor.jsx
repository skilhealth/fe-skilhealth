import listSvg from "/src/assets/list-janji.svg"
import TotalSvg from "/src/assets/total-pasien.svg"
import FooterLanding from "../components/footer"
import ForumCard from "../components/forum-card"
import { Link } from "react-router-dom"
import PasienLanding from "../components/pasien-landing"
import { useContext } from "react"
import { userContext } from "../context/user-provider"
import { forumContext } from "../context/forum-provider"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import moment from "moment/moment"
import 'moment/locale/id'
import Loading from "../components/loading"

function LandingPageDoctor({ role }) {
    moment.locale('id')
    const { user } = useContext(userContext)
    const { forum } = useContext(forumContext)
    const [listJanji, setList] = useState(null)
    const id = localStorage.getItem("userid")
    const token = localStorage.getItem("token")
    const janji = async (id) => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/bookings/doctor?user=${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.message)
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        const fetchData = async (id) => {
            const listbooking = await janji(id);
            setList(listbooking)
        }
        fetchData(id)
    }, [])
    if (!user || !forum || !listJanji) {
        return (
            <Loading/>
        )
    }
    const JanjiHariIni = () => {
        if (listJanji) {
            const today = moment();
            const todayList = listJanji.filter(item => moment(item.Jadwal.date).isSame(today, 'day'));
            const totalToday = todayList.length;
            return totalToday;
        }
        return 0;
    };
    return (
        <div className=" bg-slate-100">
            <div className="p-4 lg:px-24">
                <div className="w-full flex flex-col lg:flex-row gap-2">
                    <Link to="profile" className="flex w-full p-4 bg-red-700 rounded-lg items-center gap-2 lg:gap-4 h-32 lg:h-60 grow">
                        <div className="rounded-full">
                            <img src={user.images} alt="" className="rounded-full h-20 lg:h-32 aspect-square" />
                        </div>
                        <div className="text-white">
                            <p className="text-sm lg:text-lg">Halo!,</p>
                            <h3 className="text-xl font-bold lg:text-4xl">{user.nama}</h3>
                        </div>
                    </Link>
                    <div className="flex gap-2 lg:flex-col w-full lg:max-w-sm">
                        <Link to="/janjipasien" className="h-full max-h-20 lg:max-h-max p-4 w-full rounded-lg bg-red-700 flex gap-2 items-center">
                            <img src={listSvg} alt="" className="h-10" />
                            <div className="text-white">
                                <h3 className="text-2xl lg:text-3xl font-bold">{JanjiHariIni()}</h3>
                                <p className="text-xs lg:text-base">Janji temu hari Ini</p>
                            </div>
                        </Link>
                        <Link to="/janjipasien" className="h-full max-h-20 lg:max-h-max  p-4 w-full rounded-lg bg-red-700 flex gap-2 items-center">
                            <img src={TotalSvg} alt="" className="h-10" />
                            <div className="text-white">
                                <h3 className="text-2xl lg:text-3xl font-bold">{listJanji.length}</h3>
                                <p className="text-xs lg:text-base">Total Pasien</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex mt-4 gap-3 flex-col lg:flex-row">
                    <div className="flex-1 lg:p-4 p-2 rounded-2xl border-black bg-white">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold lg:text-2xl mb-2">Janji Temu Hari ini</h3>
                            <Link to="/janjipasien" className="font-semibold underline text-base text-red-700">Jadwal Lainnya</Link>
                        </div>
                        <div>
                            {listJanji.map((item,index) => {
                                if (moment(item.Jadwal.date).isSame(moment(), 'day')) {
                                   return <PasienLanding key={index} pasien={item} />

                                }
                            })}

                        </div>
                    </div>
                    <div className="flex-1 p-2 lg:p-4 rounded-2xl border-black bg-white">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold lg:text-2xl mb-2">Forum Belum Terjawab</h3>
                            <Link to="/forum" className="font-semibold underline text-base text-red-700">Forum Lainnya</Link>
                        </div>
                        <div className="flex flex-col border-none lg:flex-row flex-wrap border justify-center">
                            {
                                forum.slice(0, 3).map((item,index) => (
                                    <ForumCard key={index} data={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
            <FooterLanding role={user.role} />

        </div>
    )
}
export default LandingPageDoctor