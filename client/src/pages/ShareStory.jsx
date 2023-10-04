import React from "react";
import Navbar from "../components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import process from "dotenv";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ShareStory() {
  const addStory = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Navbar
      page={
        <>
          <div className="p-8 bg-blue-100 min-h-screen">
            <h1 className="text-center text-3xl font-bold text-gray-700">
              Share your story!
            </h1>
            <div className="form-control my-4">
              <label className="label">
                <span className="label-text font-medium text-lg text-gray-700">
                  Title
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 resize-none"
                placeholder="Title of your story"
              ></textarea>
            </div>
            <div className="form-control my-4">
              <label className="label">
                <span className="label-text font-medium text-lg text-gray-700">
                  Title
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 resize-none"
                placeholder="Title of your story"
              ></textarea>
            </div>
            <div className="form-control my-4">
              <label className="label">
                <span className="label-text font-medium text-lg text-gray-700">
                  Title
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 resize-none"
                placeholder="Title of your story"
              ></textarea>
            </div>
          </div>
        </>
      }
    />
  );
}