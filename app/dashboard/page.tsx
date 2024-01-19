import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ini dashboard ya",
};
export default function dashboard() {
  return (
    <main className="flex h-screen">
      <div className="w-80 h-36 bg-blue-500 item-center">
        <div className="flex">
          <p className="w-20 h-10 bg-red-500 rounded-md m-2 transition-colors hover:bg-gray-400">
            dashboard
          </p>
          <p className="w-20 h-10 bg-red-500 rounded-md m-2 transition-colors hover:bg-gray-400">
            dashboard
          </p>
          <p className="w-20 h-10 bg-red-500 rounded-md m-2 transition-colors hover:bg-gray-400">
            dashboard
          </p>
          <p className="w-20 h-10 bg-red-500 rounded-md m-2 transition-colors hover:bg-gray-400">
            dashboard
          </p>
        </div>
      </div>
    </main>
  );
}
