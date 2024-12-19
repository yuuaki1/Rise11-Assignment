'use client'

import Image from "next/image";
import { useState, useRef } from "react";

export default function Agreement() {
    const MAX_FILE_SIZE = 2 * 1024 * 1024;
    const ALLOWED_FILE_TYPES = ['application/pdf'];

    const [file, setFile] = useState(null);
    const [error, setError] = useState("");

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    const validateFile = (file) => {
        if (!file) return;
        
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
          throw new Error('Please upload a PDF file');
        }
        
        if (file.size > MAX_FILE_SIZE) {
          throw new Error('File size must be less than 2MB');
        }
      }

      const handleFileChange = (e) => {
        try {
          const newFile = e.target.files[0];
          if (!newFile) return;
          
          validateFile(newFile);
          setFile(newFile);;
          setError("");
        } catch (err) {
          setError(err.message);
          e.target.value = '';
        }
      }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-x-3 items-center py-4">
                <Image src="/dispute.svg" alt="location" width={40} height={40} /> 
                <h1 className="text-xl font-bold text-neutral-600">Agreement Under Disputes</h1>
            </div>
            <div className="flex flex-row ml-14 text-sm gap-x-2">
                <div>
                    <button onClick={handleButtonClick} className="gap-y-2 w-36 h-48 flex flex-col justify-center items-center px-2 py-1 rounded cursor-pointer border-dotted border-2 border-blue-500 bg-neutral-100">
                        <Image src="/upload.svg" alt="upload" width={40} height={20} />
                        <h1 className="text-black">Upload the Contract</h1>
                        <p className="text-xs text-blue-500">MAX 2MB, PDF</p>
                    </button>
                        <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>
                <div>
                    <button onClick={handleButtonClick} className="gap-y-2 w-36 h-48 justify-center items-center flex flex-col bg-neutral-100 border-dotted border-blue-500 border-2 text-white px-2 py-1 rounded cursor-pointer">
                        <Image src="/upload.svg" alt="upload" width={40} height={20} />
                        <h1 className="text-black">Arbitration Agreement</h1>
                        <p className="text-xs text-blue-500">MAX 2MB, PDF</p>
                    </button>
                        <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>
            </div>
        </div>
    )
}