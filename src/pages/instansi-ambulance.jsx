import refresh from "../assets/refresh.png"
import strobo from "../assets/strobo.png"
import stroboAktif from "../assets/stroboaktif.png"
import lokasi from "../assets/lokasi.svg"
import event from "../assets/event.svg"
import pelapor from "../assets/pelapor.svg"
import { useEffect, useState } from "react"
import axios from "axios"
import Loading from "../components/loading"


function InstansiAmbulance() {
    const [listAmbulance, setList] = useState()
    const [ambulan, setAmbulance] = useState(0)
    const [nama, setnama] = useState(0)
    const [request, setRequest] = useState()
    const id = localStorage.getItem("userid")
    const getAmbulance = async (id) => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/ambulances/rumahsakit?id=${id}`)
            console.log(response)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
    const getRequest = async (id) => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/respon/instansi?id=${id}`)
            console.log(response)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
    const getPasienId = async (id) => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/user/${id}`)
            return response.data.nama
        } catch (err) {
            console.error(err)
        }
    }
    const sendRespon = async (konten) => {
        try {
            const response = await axios.put(`https://be-skilhealth.up.railway.app/respon`, konten)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const ambulance = await getAmbulance(id);
            setList(ambulance.data)
            const takerequest = await getRequest(id)
            console.log(takerequest)
            if (takerequest.message == "Request tidak ditemukan") {
                setRequest("tidak ada")
            } else {
                setRequest(takerequest.data[0])
            }
        }
        fetchData();
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            const getNama = await getPasienId(request.user_id)
            setnama(getNama)
        }
        fetchData()
    }, [request])
    const fetchData = async () => {
        const takerequest = await getRequest(id)
        console.log(takerequest)
        if (takerequest.message == "Request tidak ditemukan") {
            setRequest("tidak ada")
        } else {
            setRequest(takerequest.data[0])
        }
    }
    if (!listAmbulance || !request) return (
        <Loading />
    )

    const handlesubmit = async (e) => {
        e.preventDefault()
        const respon = {
            ambulan_id: ambulan,
            id: request.id
        }
        if (ambulan === 0) {
            alert("Pilih Mobil Ambulancenya dulu")
            return
        }

        const response = await sendRespon(respon)
        fetchData()
        alert(response.message)
    }
    const handleRefresh = (e) => {
        e.preventDefault()
        fetchData()

    }
    const list = [
        {
            id: 1,
            nama: "Skilvul Jakarta 1",
            plat: "3344 KXS",
            spesialis: "Darurat",
            image: "/src/assets/ambulan1.png"
        },
        {
            id: 2,
            nama: "Skilvul Jakarta 2",
            plat: "3544 KXS",
            spesialis: "Gawat Darurat",
            image: "/src/assets/ambulan2.png"

        },
    ]
    console.log(request)
    return (
        <div className="p-4 lg:px-24 lg:flex lg:justify-center">
            <form action="" onSubmit={handlesubmit} className="max-w-4xl w-full">
                <div className="w-full bg-slate-200 rounded-lg p-4 mb-6">
                    {request === "tidak ada" ? (
                        <div className="flex justify-between">
                            <div className="flex space-x-2 items-center">
                                <div className=" font-medium text-lg ">Tidak ada panggilan</div>
                                <div className="w-2 h-2 bg-black rounded-full animate-pulse mt-2"></div>
                                <div className="w-2 h-2 bg-black rounded-full animate-pulse mt-2"></div>
                                <div className="w-2 h-2 bg-black rounded-full animate-pulse mt-2"></div>
                            </div>
                            <div>
                                <button type="submit" className="bg-green-400 text-white text-2xl font-medium w-24 rounded-xl aspect-square box-border p-7 hover:opacity-70 transition duration-200" onClick={handleRefresh}>
                                    <img src={refresh} alt="" className="invert" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="text-2xl font-bold text-red-600">{request.tingkat === "biasa" ? "Darurat" : "Gawat Darurat"}!!!</div>
                            <div className="h-1 bg-slate-300 w-full rounded-full my-3"></div>
                            <div className="flex justify-between">
                                <div className=" space-y-1">
                                    <div className="flex gap-[7px]">
                                        <img src={lokasi} alt="" className="h-7" />
                                        <div className=" font-medium text-lg ">{request.alamat}</div>
                                    </div>
                                    <div className="flex gap-[7px]">
                                        <img src={event} alt="" className="h-7" />
                                        <div className=" font-medium text-lg ">{request.kejadian}</div>
                                    </div>
                                    <div className="flex gap-[7px]">
                                        <img src={pelapor} alt="" className="h-7" />
                                        <div className=" font-medium text-lg ">{nama}</div>
                                    </div>

                                </div>
                                <div>
                                    <button type="submit" className="relative overflow-hidden flex justify-center bg-red-600 text-white text-lg font-medium w-24 rounded-xl aspect-square box-border transition duration-200 ">
                                        <span className="absolute  h-20">
                                            <img
                                                className="w-full h-full object-cover "
                                                src={strobo}
                                                alt="Gambar 1"
                                            />
                                        </span>
                                        <span className=" absolute h-20">
                                            <img
                                                className="w-full h-full object-cover opacity-0 hover:opacity-100 hover:scale-110 active:opacity-100 transition duration-150"
                                                src={stroboAktif}
                                                alt="Gambar 2"
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <div>
                    <div className="text-2xl font-bold mb-4">List Ambulance</div>
                    <div className=" space-y-3">
                        {
                            listAmbulance.map((item, index) => (
                                <label key={index} className={`flex items-center w-full bg-slate-200 rounded-lg p-4 gap-4 ${+ambulan === item.id ? "border-2 border-red-400" : ""}`}>
                                    <input type="radio" className="hidden" name="ambulance" value={item.id} onChange={(e) => setAmbulance(e.target.value)} />
                                    <div className="w-24">
                                        <img src={`${item.image}`} alt="" className="objec" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{item.nama}</h3>
                                        <h3 className="text-lg font-medium">{item.plat}</h3>
                                        <h3 className="text-lg font-medium">{item.tingkat}</h3>
                                    </div>
                                </label>
                            ))
                        }
                    </div>
                </div>
            </form>

        </div>
    )
}
export default InstansiAmbulance