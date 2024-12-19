'use client'

import Image from "next/image";
import { useState } from "react";

export default function Location() {
    const [choicea, setChoicea] = useState("Yes")

    const handleChoice = (e) => {
        setChoicea(e.target.value)
    }
    return (
        <div>
            <div className="flex flex-row gap-x-3 items-center py-4">
                <Image src="/location.svg" alt="location" width={40} height={40} /> 
                <h1 className="text-xl font-bold text-neutral-600">Location</h1>
            </div>
            <div className="flex flex-col ml-14">
                <input 
                type="text" 
                placeholder="Select the place for proceedings" 
                className="w-72 px-4 bg-neutral-100 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />

                <h1 className="text-neutral-600 whitespace-normal text-basline mt-4 truncate w-72 leading-tight">Is the place for the proceedings the one mentioned in the agreement?</h1>
                <div className="flex items-center space-x-5 mt-4">
                    <label className="inline-flex items-center cursor-pointer">
                        <input 
                        type="radio" 
                        name="Yes" 
                        className="peer"
                        value={"Yes"}
                        checked = {choicea === "Yes"}
                        onChange={handleChoice}
                         />
                        <span className="ml-2">Yes</span>
                    </label>

                    <label className="inline-flex items-center cursor-pointer">
                        <input 
                        type="radio" 
                        name="No" 
                        className="peer"
                        value={"No"}
                        checked = {choicea === "No"}
                        onChange={handleChoice} 
                        />
                        <span className="ml-2">No</span>
                    </label>
                </div>
                
            </div>
        </div>
    );
}
