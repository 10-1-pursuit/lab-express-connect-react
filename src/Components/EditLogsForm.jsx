import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const API = import.meta.env.VITE_API_URL


function EditLogsForm() {
    let { index } = useParams();
    const navigate = useNavigate();

    const [editLog, setEditLog] = useState({})
    const [option, setOption] = useState("");
    const [value, setValue] = useState("")

    const EditLog = () => {

        const API = import.meta.env.VITE_API_URL

        fetch(`${API}/logs`, {
            method: "PUT",
            body: JSON.stringify(editLog),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                navigate(`/logs`);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleOption = (event) => {
        setOption(event.target.value)
    }
    const handleValue = (event) => {
        setValue(event.target.value)
    };

    function handleEditSumbit(event) {
        event.preventDefault();

        let valid = (
            (option === "captainName" && typeof value === "string")
                (option === "title" && typeof value === "string")
                (option === "post" && typeof value === "string")
                (option === "mistakesWereMadeToday" && typeof value === "boolean")
                (option === "daysSinceLastCrisis" && typeof value === "number")
        );

        const log = { option: value }

        if (log === valid) {
            setEditLog(log)
            editLog();
        } else {
           
            alert("You must enter a valid key and value type Captain")

        }

    };


    return (
        <div className="Edit">
            <form onSubmit={handleEditSumbit}>
                <label htmlFor="option">Option:</label>
                <input
                    id="option"
                    value={option}
                    type="text"
                    onChange={handleOption}
                    placeholder="Choose the Key"
                    required
                />

                <label htmlFor="value">Changes:</label>
                <input
                    id="value"
                    type="text"
                    onChange={handleValue}
                    placeholder="Make edits here"
                    required
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <Link to={`/logs`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    );


}

// let vaild =  (
//     (req.body.hasOwnProperty( "captainName") && typeof req.body.captainName === "string") || 
//     (req.body.hasOwnProperty( "title") && typeof req.body.title === "string")  || 
//     (req.body.hasOwnProperty( "post") && typeof req.body.post === "string") || 
//     (req.body.hasOwnProperty( "mistakesWereMadeToday") && typeof req.body.mistakesWereMadeToday === "boolean" ) || 
//     (req.body.hasOwnProperty( "daysSinceLastCrisis") && typeof req.body.daysSinceLastCrisis === "number"  )
//   );