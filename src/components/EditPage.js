import React from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";





function EditPage() {

  /// use to manipulate the data in the form
  const [captainName, setCaptainName] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [days,setDays] = useState(0);
  const [mistakes, setMistakes] = useState(false);

  const { id } = useParams;
  const API = process.env.REACT_APP_API;
  const navigate = useNavigate();

  useEffect(() => {
    editLog();
}, []);

async function editLog() {
  try {
    let result = await axios.get(`${API}/logs/${id}`);
     // console.log(result.data);
      //console.log(result);
     setCaptainName(result.data.captainName);
     setTitle(result.data.title);
     setPost(result.data.post);
     setDays(result.data.daysSinceLastCrisis);
     setMistakes(result.data.mistakesWereMadeToday);
  } catch(error){
     console.log(error);
  }
}



  /// so this  does not refresh eveytime you submit something
async function submitButton(e){
  e.preventDefault();


// try to get the data. If not it throws an error
try{
  let result = await axios.put(`${API}/logs/${id}`, {
    
   // 1. is labels 2. is the varialbe
   captainName: captainName,
   title: title,
   post: post,
   daysSinceLastCrisis: days,
   mistakesWereMadeToday: mistakes,
});
   /// bring you to the logs page
   navigate("logs/")
} catch(error) {
  console.log(error);
}

}

  return (
    <>
      <div className="edit">
        <h2>Edit</h2>
        <form className="form" onSubmit={submitButton}>
          <div className="form-input">
            <label>Captain's Name</label>
            <input type="text" value={captainName} onChange={(e) => setCaptainName(e.target.value)} />
          </div>
          <div className="form-input">
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            {/* we will use onChange becaue the value will change with each user */}
          </div>
          <div className="form-input">
            <label>Post:</label>
            <input type="text" value={post} onChange={(e) => setPost(e.target.value)} />
          </div>
          <div className="form-input">
            <label>Days since Last Crisis</label>
            <input type="number" value={days} onChange={(e) => setDays(e.target.value)}/>
          </div>
          <div className="form-input">
            <label>Mistakes were made today</label>
            <input type="checkbox" checked={mistakes} onChange={(e) => setMistakes(e.target.checked) }/>
          </div>
          <button  type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default EditPage;
