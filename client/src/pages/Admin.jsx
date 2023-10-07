import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import mindlyai from "../assets/mindlyai.png";
import feature1 from "../assets/featured-story.png";
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore"
import axios from 'axios'

const Admin = () => {
    const storyCollectionRef = collection(db, "stories");
    const [filteredData, setFilteredData] = React.useState([]);
  
    useEffect(()=> {
        const getStory = async () => {
            try {
                const data = await getDocs(storyCollectionRef);
                const dataFilter = data.docs.map((doc)=>({...doc.data(), id:doc.id}));
                setFilteredData(dataFilter)
            } catch(err) {
                console.log(err);
            }
        };
        getStory();
    }, [])

    const handleApprove = (story) => {
      console.log(story)
      axios.post('/storySegmenting', {content: story})
        .then(res => {
          const segments = JSON.parse(res.data.choices[0].message.content)
          const requests = Object.values(segments).map(segment => {
            return axios.post('/generateImage', {prompt: segment})
          })
          console.log(requests)
          axios.all(requests)
            .then(res => {
              res.forEach(response => {
                console.log(response.data)
              })
            })
            .catch(err => {
              err.forEach(error => {
                console.log(error)
              })
            })
        })
        .catch(err => {
          console.log(err)
        })
    }
    
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
                <p className="text-lg text-gray-300 font-medium mb-8">
                  Sharing Stories 📖 &#183; Building Communities 🫶 
                </p>
              </div>
            </div>
            <div className="mt-8 flex-col flex items-center pb-12">
              <h2 className="text-3xl uppercase font-extrabold text-gray-700 mb-4">
                ADMIN PAGE
              </h2>
            </div>
            <table className="text-black mx-auto table w-3/4 mb-36">
                <thead className="text-xl text-black">
                    <tr className="text-center">
                        <th className="">
                            ID
                        </th>
                        <th className="">
                            Name
                        </th>
                        <th>
                            Handle
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Story
                        </th>
                        <th>
                            Approve
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    filteredData.map((obj, key) => {
                        return (
                        <tr key={key}>
                            <td className="text-black">{obj.id}</td>
                            <td className="text-black">{obj.name}</td>
                            <td className="text-black">{obj.handle}</td>
                            <td className="text-black">{obj.title}</td>
                            <td className="text-black">{obj.story}</td>
                            <td><button
                              className="text-center w-full bg-green-500 rounded border-2 border-white"
                              onClick={() => handleApprove(obj.story)}
                            >&#10003;</button></td>
                        </tr>
                        );
                    })
                }
                </tbody>
            </table>
          </div>
        )}
      />
    </>
    )
}

export default Admin;