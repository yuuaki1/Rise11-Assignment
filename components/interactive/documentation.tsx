'use client'

import Image from "next/image";
import { useState, useRef } from "react";

export default function Documentation() {
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
        <div className="-ml-8">
            <div className="flex flex-row gap-x-3 items-center py-4">
                <Image src="/additional.svg" alt="location" width={40} height={40} /> 
                <h1 className="text-xl font-bold text-neutral-600">Additional Documentation</h1>
            </div>
            <div className="ml-14 flex flex-row space-x-3">
                    <div className="">
                        <button onClick={handleButtonClick} className="gap-y-2 w-40 h-48 justify-center items-center flex flex-col bg-neutral-100 border-dotted border-blue-500 border-2 text-white px-2 py-1 rounded cursor-pointer">
                            <Image src="/upload.svg" alt="upload" width={40} height={20} />
                            <h1 className="text-black text-sm">Upload the Contract</h1>
                            <p className="text-xs text-blue-500">MAX 2MB, PDF</p>
                        </button>
                            <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                    <div className="px-10 py-16">
                        <Image src='/add.svg' alt="add" width={50} height={40} onClick={handleButtonClick} />
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