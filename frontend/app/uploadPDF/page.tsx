"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import { uploadPDF } from '../api/upload_api';

function UploadPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    const storedFile = sessionStorage.getItem('uploadedPDF');
    if (storedFile) {
      setFile(JSON.parse(storedFile));
    }
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      sessionStorage.setItem('uploadedPDF', JSON.stringify(uploadedFile));
    }
  };

  const handleUploadFile = async () => {
    if (!file) return;

    try {
      await uploadPDF(file);
      setUploadSuccess(true);
      setTimeout(() => {
      }, 3000);
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };

  const handleReplaceFile = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      sessionStorage.setItem('uploadedPDF', JSON.stringify(uploadedFile));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {!file ? (
        <div className="p-1 rounded-lg shadow-md">
          <label htmlFor="pdf-upload" className="cursor-pointer bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-500 hover:animate-pulse">
            Upload PDF
          </label>
          <input id="pdf-upload" type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
        </div>
      ) : (
        <div className="p-2 bg-white rounded-lg shadow-md">
          {file && file instanceof File && (
            <div>
              <object data={URL.createObjectURL(file)} type="application/pdf" width="500" height="600">
                <p>PDF cannot be displayed</p>
              </object>
            </div>
          )}

          <div className="flex mt-4">
            <div className="p-1 rounded-lg shadow-md">
              <label htmlFor="replace-pdf" className="cursor-pointer bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-500 hover:animate-pulse">
                Replace PDF
              </label>
              <input id="replace-pdf" type="file" accept=".pdf" className="hidden" onChange={handleReplaceFile} />
            </div>
            <div className="p-1 rounded-lg shadow-md">
              <label htmlFor="upload-this-pdf" className="cursor-pointer bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-500 hover:animate-pulse">
                Upload This PDF
              </label>
              <input id="upload-this-pdf" type="submit" className="hidden" onClick={handleUploadFile} />
            </div>
          </div>
          {uploadSuccess && (
            <div className="text-center mt-4 text-green-600">
              File uploaded successfully! 
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UploadPDF;
