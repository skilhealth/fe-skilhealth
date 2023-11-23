import React from "react";
import Backbutton from '../components/backbutton';

function MenuProfileDokter () {
    return(
        <div>
            <Backbutton nama="Profile Saya"></Backbutton>
            <div className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-3 border-b border-black">
                    <img className="w-10 h-10" src="{imgplus}"></img>

                </div>
            </div>
        </div>
    )
}
