import Image from "next/image";
import QRCodeGenerator from "./qrcode";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="items-center justify-center flex flex-col gap-8 row-start-2 sm:items-start">

        {/* QR Code Generator Component */}
        <QRCodeGenerator />
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-center text-sm">
          Powered by{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Next.js
          </a>
        </p>
      </footer>
    </div>
  );
}