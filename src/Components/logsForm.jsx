//- A user can update a log using a form
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LogForm = () => {
    const navigate = useNavigate()

    const [captainsLog, setCaptainsLog] = useState([])
    const [log, setLog] = useState({})
    const [captainName, setCaptainName] = useState("")
    const [title, setTitle] = useState("")
    const [post, setPost] = useState("")
    const [mistakesMade, setMistakesMade] = useState(false)
    const [crisis, setCrisis] = useState(0)

    const addLog = () => {

        const API = import.meta.env.VITE_API_URL

        fetch(`${API}/logs`, {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                navigate(`/logs`);
            })
            .catch((error) => console.error("catch", error));
    };


    function handleCaptain(event) {
        setCaptainName(event.target.value)
    };
    function handleTitle(event) {
        setTitle(event.target.value)
    };
    function handlePost(event) {
        setPost(event.target.value)
    };
    function handleMistakes(event) {
        setMistakesMade(event.target.value)
    };
    function handleCrisis(event) {
        setCrisis(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();

        const log = {

            captainName: captainName,
            title: title,
            post: post,
            mistakesWereMadeToday: mistakesMade,
            daysSinceLastCrisis: crisis
        }
        setLog(log)
        setCaptainsLog(...captainsLog, log)
        addLog()
        setCaptainName("")
        setTitle("")
        setMistakesMade("")
        setPost("")
        setCrisis("")
        console.log(log)
    };


    return (
        <div className="container">
            <h3 className="header">Captain's Log Form</h3>
            <div className="logForm">
                <form onSumbit={handleSubmit}>
                    <input
                        name="captainName"
                        type="text"
                        value={captainName}
                        onChange={handleCaptain}
                        placeholder="Captain's Name"
                    />
                    <hr></hr>
                    <input
                        name="title"
                        type="text"
                        value={title}
                        onChange={handleTitle}
                        placeholder="Title"
                    />
                    <hr></hr>
                    <input
                        name="post"
                        type="text"
                        value={post}
                        onChange={handlePost}
                        placeholder="Log Here"
                    />
                    <hr></hr>
                    <select
                        name="mistakesMade"
                        onChange={handleMistakes}
                    >
                        <option value={mistakesMade}>true</option>
                        <option value={mistakesMade}>false</option>
                    </select>
                    <hr></hr>
                    <input
                        name="daysSinceLastCrisis"
                        type="number"
                        value={crisis}
                        onChange={handleCrisis}
                    />
                    <hr></hr>
                </form>
                <br />
                <Link to={`/logs`}>
                    <button>Nevermind!</button>
                </Link>
            </div>
            <div>{log}</div>
        </div>

    );

    };

 export default LogForm;







