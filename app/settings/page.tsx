import type { Metadata } from "next";
import Link from "next/link";
import SectionProfile from "./sectionProfile";

export const metadata: Metadata = {
  title: "ini setting ya",
};

export default function settings() {
  return (
    <main className="h-screen">
      <div className="w-80 h-36 bg-blue-500 item-center">
        <div className="flex">
          {" "}
          <p className="w-20 h-10 bg-red-500 rounded-md m-2 transition-colors hover:bg-gray-400">
            settings
          </p>
          <p className="w-20 h-10 bg-red-500 rounded-md m-2 transition-colors hover:bg-gray-400">
            settings
          </p>
          <p className="w-20 h-10 bg-red-500 rounded-md m-2 transition-colors hover:bg-gray-400">
            settings
          </p>
          <p className="w-20 h-10 bg-red-500 rounded-md m-2 transition-colors hover:bg-gray-400">
            settings
          </p>
        </div>
        <SectionProfile />
      </div>
    </main>
  );
}
