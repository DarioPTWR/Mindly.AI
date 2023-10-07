import React from "react";
import Navbar from "../components/Navbar";
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore"
import ReCAPTCHA from "react-google-recaptcha";
import process from "dotenv";
import mindly from "../assets/mindlyai.png"

export default function Images() {
  return (
    <Navbar
      page={
        <>
          <div className="p-8 bg-blue-100 min-h-screen">
            <h1 className="text-center text-gray-900 text-4xl uppercase mb-8 font-bold">Verify Generated Images</h1>
            <div className="card bg-base-100 shadow-xl pt-4 text-center">
                <div className="font-bold uppercase text-2xl underline">Title</div>
                <div className="flex justify-center">
                  <img src={mindly} className="w-1/5"/>
                  <img src={mindly} className="w-1/5"/>
                  <img src={mindly} className="w-1/5"/>
                  <img src={mindly} className="w-1/5"/>
                </div>
                <div className="font-bold uppercase text-2xl underline ">Story</div>
                <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </>
      }
    />
  );
}
