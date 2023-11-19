import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Diskusi from "./pages/diskusi"

// import ListForum from "./pages/list-forum"
// import Pertanyaan from "./pages/pertanyaan"


function App() {
  return (
    <>
      <Navbar />
      {/* <ListForum/> */}
      {/* <Pertanyaan /> */}
      <Diskusi />
    </>
  )
}

export default App
