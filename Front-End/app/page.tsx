"use client";
import Link from "next/link";

export default function Home() {
    const CallApi = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/healthz"
                // Add any necessary options here
                , {
                    method: "GET",
                    credentials: "include",
                }
            );
            const data = await response.json();
            console.log(data);
            alert("Check Response In console");
        } catch (error) {
            alert("Error fetching protected data: " + error);
        }
    };
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">In Public Page</h1>
        <Link
          href="/ProtectedPage"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to a Protected Page
        </Link>
        <br />
        <button
              onClick={() => CallApi()}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
            Call Public Route
        </button>
      </div>
    </div>
  );
}
