import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import mindlyai from "../assets/mindlyai.png";
import feature1 from "../assets/featured-story.png";
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore"

const Home = () => {
  const navigate = useNavigate()
  const [story,setStory] = React.useState([]);
  const storyCollectionRef = collection(db, "stories");
  useEffect(()=> {
    const getStory = async () => {
      try {
        const data = await getDocs(storyCollectionRef);
        const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id,
        }));
        console.log(filteredData);
        console.log("a");
      } catch(err) {
        console.log(err);
      }
    };
    getStory();
  })
  return (
    <>
      <Navbar
        page={(
          <div className="bg-blue-100 min-h-screen">
            <div
              className="
                  h-96 bg-no-repeat bg-cover 
                  bg-[url('https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')]
                "
            >
              <div
                className="bg-black bg-opacity-50 p-12
                    text-center h-full flex 
                    flex-col items-center justify-center"
              >
                <img src={mindlyai} className="w-36"/>
                {/* <h1 className="text-4xl font-bold mb-4 text-white">mindly.ai</h1> */}
                <p className="text-lg text-gray-300 font-medium mb-8">
                  Sharing Stories 📖 &#183; Building Communities 🫶 
                </p>
                <button className="btn btn-wide btn-primary" onClick={() => navigate('/share')}>
                  Share your story
                </button>
              </div>
            </div>
            <div className="mt-8 flex-col flex items-center pb-12">
              <h2 className="text-3xl uppercase font-bold text-gray-700 mb-4">
                Featured Stories
              </h2>
              <div className="card bg-base-100 shadow-xl pt-4">
                <figure>
                  <img
                    src={'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/0-69bb90b8-1811-4e35-a1dd-f94f3bc7e72b.png'}
                    alt="Shoes"
                    className="w-80"
                  />
                </figure>
                <hr className="w-3/4 mx-auto my-4"/>
                <div className="card-body -mt-8">
                  <h2 className="card-title">Coping with depression</h2>
                  <p>How do I overcome it? What are some tips?</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Home;
