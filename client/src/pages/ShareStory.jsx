import React from "react";
import Navbar from "../components/Navbar";
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore"
import ReCAPTCHA from "react-google-recaptcha";
import process from "dotenv";

export default function ShareStory() {
  const storyCollectionRef = collection(db, "stories")
  const [message,setMessage] = React.useState("");
  const [formData, setFormData] = React.useState({
    "name":"",
    "handle":"",
    "title":"",
    "story":""
  });
  const handleChange = (e) => {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [e.target.name]: e.target.value
        }
      })
  };
  const onSubmitForm = async () => {
    try {
      await addDoc(storyCollectionRef, {name: formData.name, handle: formData.handle, title: formData.title, story: formData.story});
      setMessage("Story Submitted.");
    } catch(err) {
      setMessage("Error occurred.");
    }
  }
  return (
    <Navbar
      page={
        <>
          <div className="p-8 bg-blue-100 min-h-screen">
            <h1 className="text-center text-3xl font-extrabold uppercase text-gray-700">
              Share your story
            </h1>
            <p className="mx-auto text-center mt-2 text-gray-600 text-lg w-1/2">Here is where you share your stories, which will be posted on our Instagram page, @mind.ly.ai. Your Name and Instagram Handle are optional if you want to stay anonymous.</p>
              <div className="form-control my-4 mx-auto min-w-500">
                <label className="label mx-auto">
                  <span className="label-text font-medium text-lg text-gray-700">
                    Name [Optional]
                  </span>
                </label>
                <input className="rounded textarea w-1/2 mx-auto" placeholder="Input your name" onChange={handleChange} name="name" value={formData.name}></input>
              </div>
              <div className="form-control my-4 mx-auto min-w-500">
                <label className="label mx-auto">
                  <span className="label-text font-medium text-lg text-gray-700">
                    Instagram Handle [Optional]
                  </span>
                </label>
                <input className="rounded textarea w-1/2 mx-auto" placeholder="Your Instagram Handle" name="handle" onChange={handleChange} value={formData.handle}></input>
            </div>
            <div className="form-control my-4">
              <label className="label mx-auto">
                <span className="label-text font-medium text-lg text-gray-700">
                  Title
                </span>
              </label>
              <input className="rounded textarea w-1/2 mx-auto" placeholder="Title of your story" name="title" onChange={handleChange} value={formData.title}></input>
            </div>
            <div className="form-control my-4">
              <label className="label">
                <span className="label-text font-medium text-lg text-gray-700">
                  Story
                </span>
              </label>
              <input className="rounded textarea h-24 w-full mx-auto" placeholder="Tell us your story" name="story" onChange={handleChange} value={formData.story}></input>
              <a className="mt-2 text-gray-500">Need help?</a>
              <p className="mx-auto text-black">
                {message}
              </p>
              <button className="btn btn-primary my-8 w-48 mx-auto" onClick={()=>{onSubmitForm()}}>Submit</button>
            </div>
          </div>
        </>
      }
    />
  );
}
