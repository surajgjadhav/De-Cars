import GetCounter from "@/components/GetCounter";
import IncrementCounterBtn from "@/components/IncrementCounterBtn";
import SetCounterForm from "@/components/SetCounterForm";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center justify-between gap-4 w-full">
          <h1 className="text-lg font-semibold">Counter App</h1>
          <ConnectButton />
        </div>
        <GetCounter className="text-center w-full" />
        <div className="flex w-full justify-center">
          <IncrementCounterBtn />
        </div>
        <div className="w-full">
          <SetCounterForm />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Made with ❤️ By Suraj
      </footer>
    </div>
  );
}
