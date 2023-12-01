import Backbutton from "../components/backbutton"

function NotFound() {
    return (
        <div className="p-4 lg:px-24 flex flex-col w-full items-center">
            <Backbutton />
            <div className="text-center text:lg lg:text-4xl font-semibold text-slate-400 absolute top-1/2 -translate-y-1/2">
                404 Not Found
            </div>
        </div>
    )
}
export default NotFound