import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex h-screen">
      
      <div className="w-64 bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">Nav bar</h1>

        <div className="flex flex-col space-y-4">
          <Link
            to="/dsh"
            className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Nav Bar
          </Link>

          <Link
            to="/Ashif"
            className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Ashif
          </Link>

          <Link
            to="/Hanshin"
            className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Hanshin
          </Link>

          <Link
            to="/Riswan"
            className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Riswan
          </Link>
          <link
            to="/Thensih"
            className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Thensih
          </link>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 p-10">
        <h1 className="text-3xl font-bold">Welcome</h1>
      </div>
    </div>
  );
}