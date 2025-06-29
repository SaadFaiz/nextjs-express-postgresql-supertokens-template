"use client";
import React from "react";
import { SessionAuthForNextJS } from "../components/sessionAuthForNextJS";

const Page = () => {
    const CallApi = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user"
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
    <SessionAuthForNextJS>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h1 className="text-3xl font-bold text-gray-800">Protected Page</h1>
            <p className="mt-2 text-gray-600">
              You need sFrontToken Cookie to view this Page.
            </p>
            <button
              onClick={() => CallApi()}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
            Call Protected Route
            </button>
            <p className="mt-2 text-gray-600">
              You need sAccessToken Cookie to Call Protected Route.
            </p>
          </div>
        </div>
    </SessionAuthForNextJS>
  );
};

export default Page;
