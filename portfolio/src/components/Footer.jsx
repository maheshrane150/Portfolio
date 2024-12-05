import React from "react";

function Footer(){

    return(
        <>
        <hr></hr>
        <div className=" bg-gray-100 text-gray-700 pt-10">
        <p className="text-center text-orange-700">Thank you for visiting our website</p>
            <div className="flex justify-center pt-8">
                <div className="">
                    <div className="flex gap-3">
                        <img src="https://img.icons8.com/?size=100&id=85149&format=png&color=000000" className="h-6 w-6"></img>
                        <p>Ranavde Patil Hieghts, Manaji Nagar Narhe, Pune 411041. </p>
                    </div>
                    <div className="flex gap-3 mt-1">
                        <img src="https://img.icons8.com/?size=100&id=jShwZ2RCyPSO&format=png&color=000000" className="h-5 w-5"></img>
                        <p>+91 7720888030</p>
                    </div>
                    <div className="flex gap-3 mt-1 mb-20">
                        <img src="https://img.icons8.com/?size=100&id=38158&format=png&color=000000" className="h-5 w-5"></img>
                        <p>maheshrane150@gmail.com</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-orange-800 pb-2">Copyrighted by Mahesh A. Rane </p>
            </div>
        </div>
        </>
    )
}

export default Footer;