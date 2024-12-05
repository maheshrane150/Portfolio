import React from "react";

function Home(){

    return(
        <>
        <div>
            <div className="flex justify-center">
                <div className="w-1/2 h-1/2 my-16">
                    <img src="https://wallpaperaccess.com/full/3147142.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className="text-center text-3xl font-bold">
                    Mahesh A. Rane
                </h1>
                <div className="flex justify-center gap-5 text-lg">
                    <li>+91 7720888030</li>
                    <li>maheshrane150@gmail.com</li>
                    <li>Pune India</li>
                </div>
                <hr className="mb-16 mt-8"></hr>
                <div className="w-full flex justify-center mb-16">
                    <p className="w-2/3"> 
                        Aspiring Software Engineer with a strong academic foundation. Adept at using modern technologies to
                        create efficient and scalable solutions. Eager to contribute skills in software development and problemsolving to a dynamic team. To obtain challenging and responsible position in dynamic company, utilize my
                        professional qualification for the progress and succusses of the organization.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;