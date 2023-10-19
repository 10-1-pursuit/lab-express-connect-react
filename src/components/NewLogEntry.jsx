import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NewLogEntry() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      mistakesWereMadeToday: !formData.mistakesWereMadeToday,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4040/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/logs");
      } else {
        console.error("Log entry creation failed:", response.status);
      }
    } catch (error) {
      console.error("Error while creating log entry:", error);
    }
  };

  return (
    <div className="NewLog">
      <h3>New</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={formData.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain's Name"
          required
        />
        <br />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={formData.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title"
          required
        />
        <br />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          value={formData.post}
          type="text"
          onChange={handleTextChange}
          placeholder="Post"
          required
        />
        <br />
        <label htmlFor="mistakesWereMadeToday">Mistakes made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={formData.mistakesWereMadeToday}
        />
        <br />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          value={formData.daysSinceLastCrisis}
          type="number"
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to="/logs">
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}
