import type { Metadata } from "next";
import Link from "next/link";
import SectionProfile from "./sectionProfile";

export const metadata: Metadata = {
  title: "settings",
};

export default function settings() {
  const Item = () => (
    <p className="p-3  bg-blue-900 text-white rounded-md my-12 mx-2 transition-all hover:bg-gray-400 ">
      Settings
    </p>
  );
  return (
    <main className="flex min-h-screen">
      <div className=" rounded-lg border-dashed border-4  border-blue-900 bg-transparent my-auto mx-auto">
        <div className="flex">
          {Item()}
          {Item()}
          {Item()}
          {Item()}
        </div>
      </div>
    </main>
  );
}
