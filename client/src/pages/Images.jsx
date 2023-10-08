import React from "react";
import Navbar from "../components/Navbar";
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore"
import ReCAPTCHA from "react-google-recaptcha";
import process from "dotenv";
import mindly from "../assets/mindlyai.png"
import { useLocation } from "react-router-dom";

const backupImages = [
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/0-69bb90b8-1811-4e35-a1dd-f94f3bc7e72b.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/0-4505dd04-2c4b-46a9-a607-f3eda132e00a.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/0-38d034ec-cc94-4dd3-a1d1-6d13f3dc7cac.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/0-9d2f1e8e-9806-4a06-9e7d-876f93649060.png"
]

export default function Images() {
  const { state } = useLocation();
  console.log(state)

  return (
    <Navbar
      page={
        <>
          <div className="p-8 bg-blue-100 min-h-screen">
            <h1 className="text-center text-gray-900 text-4xl uppercase mb-8 font-bold">Verify Generated Images</h1>
            <div className="card bg-base-100 shadow-xl pt-4 text-center">
              <div className="font-bold uppercase text-2xl underline">{state.title}</div>
              <div className="flex justify-center">
                {
                  state.images.map((image, index) => {
                    return <img src={image} key={index} className="w-1/5"/>
                  })
                }
              </div>
              <div className="font-bold uppercase text-2xl underline ">Story</div>
              <p className="text-lg mb-8">{state.story}</p>
            </div>
          </div>
        </>
      }
    />
  );
}
