import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div style={{ marginTop: -50 }} className="flex  items-center ">
          <Image
            className="dark:invert"
            src="/splash-icon-light.png"
            alt="SurDrop logo"
            width={180}
            height={38}
            priority
          />
          <div>
            <h1 className="text-[48px] font-bold">SurDrop</h1>
            <h5>Proof of Delivery, Powered by Sui</h5>
          </div>
        </div>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] ml-[180px]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by downloading{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              Expo Go
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Click &quot;Preview&quot; and scan the QR code with your phone.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row ml-[180px]">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/anhvy/surdrop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Github
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://expo.dev/preview/update?message=feat%3A%20get%20metadata&updateRuntimeVersion=1.0.0&createdAt=2025-06-01T09%3A05%3A01.687Z&slug=exp&projectId=5c514f4b-2a64-45d9-89e6-7283002a0fe6&group=02cc6424-a754-4c03-b944-0faeee2cc954"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
        </div>
      </main>
    </div>
  );
}
