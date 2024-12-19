'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import * as z from 'zod';

export default function Language() {
    const [text, setText] = useState("");
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");

    const MAX_FILE_SIZE = 2 * 1024 * 1024; 
    const ALLOWED_FILE_TYPES = ['application/pdf'];

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    const validateFile = (file) => {
        if (!file) return false;
        
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
          alert('Please upload a PDF file');
          setFile(null);
          return false
        }
        
        if (file.size > MAX_FILE_SIZE) {
          alert('File size must be less than 2MB');
          setFile(null);
          return false
        }

        return true
      };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleFileChange = (e) => {
        try {
          const newFile = e.target.files[0];
          if (!newFile) return;
          
          if (validateFile(newFile)) {
            setFile(newFile);
            setText("");
            setError("");
          };
        } catch (err) {
          setError(err.message);
          e.target.value = '';
        }
      };
    return (
        <div>
            <div className="flex flex-row gap-x-3 items-center py-4">
                <Image src="/statement.svg" alt="location" width={40} height={40} /> 
                <h1 className="text-xl font-bold text-neutral-600">Statement</h1>
            </div>

    <div className="relative w-full max-w-md ml-10 flex flex-col justify-center items-center">
        <input
            type="text"
            value={text}
            onChange={handleTextChange}
            className="w-72 p-2 pb-40 bg-neutral-100 pr-20 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        />

      {!text && !file && (
        <div
          className="absolute cursor-pointer flex flex-col items-center justify-center">
            <div>
            {!text && !file && (
                <div className=" flex flex-col gap-y-1 pt-5 items-center justify-center">
                    <h1 className="text-sm text-neutral-400">Write your statement</h1>
                    <p className="text-sm text-neutral-400">or</p>
                <button onClick={handleButtonClick} className="flex flex-row bg-transparent text-neutral-400 gap-x-2 px-2 py-1 rounded cursor-pointer">
                    <Image src="/upload.svg" alt="upload" width={20} height={20} />
                    <h1 className="text-blue-500">Upload a PDF</h1>
                </button>
                    <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />
        </div>
      )}
            </div>
          </div>
      )}

      

      {file && (
        <p className="mt-2 text-sm text-gray-600">
          File uploaded: {file.name}
        </p>
      )}
    </div>
        </div>
    )
}