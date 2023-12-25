import Image from "next/image";
import { Inter } from "next/font/google";
import teddy from "@/public/pusss.gif";
import happypuss from "@/public/happypuss.gif";
import { RandomButton } from "@/Components/RandomButton";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [switchPuss, setSwitchPuss] = useState(teddy);
  const [switchText, setSwitchText] = useState(
    "Please will you go out with me?"
  );
  const changePuss = () => {
    setSwitchText("Yeeesss!! You are best ever!!! Prrrrr ");
    setSwitchPuss(happypuss);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-5 p-5 md:p-24 ${inter.className}`}
    >
      <h1 className="font-bold text-xl md:text-3xl">{switchText}</h1>
      <div className="flex md:w-[25rem]">
        <Image
          className="w-full bg-contain"
          src={switchPuss}
          alt="teddy bear"
          priority
        />
      </div>
      <div className="flex gap-5 w-full md:w-[25rem]">
        <button
          onClick={changePuss}
          className="px-3 w-[10em] shadow-2xl  hover:shadow-md bg-red-600 text-white py-5"
        >
          Yes
        </button>
        <RandomButton />
      </div>
      <p>created by @prof | @nird</p>
      <p>built with reactjs | tailwind</p>
    </main>
  );
}
