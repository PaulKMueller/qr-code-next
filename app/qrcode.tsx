"use client";

import React, { useState } from "react";
import QRCode from "qrcode";

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleGenerateQRCode = async () => {
    if (!inputValue) {
      alert("Please enter a value to generate the QR code!");
      return;
    }

    try {
      const qrCode = await QRCode.toDataURL(inputValue);
      setQrCodeUrl(qrCode); // Set the QR code image URL
    } catch (error) {
      console.error("Error generating QR Code:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="text"
        className="w-full sm:w-[500px] h-10 sm:h-12 px-4 sm:px-5 mb-4 border border-solid border-black/[.08] dark:border-white/[.145] rounded-full focus:ring-2 focus:ring-primary focus:outline-none text-black"
        placeholder="Enter text or URL"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        onClick={handleGenerateQRCode}
      >
        Generate QR Code
      </button>
      {qrCodeUrl && (
        <div className="mt-6">
          <img src={qrCodeUrl} alt="Generated QR Code" />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;