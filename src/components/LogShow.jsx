import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import ConfirmModal from "./Confirm.jsx";

const deleteLog = async (id) => {
  try {
    const response = await fetch(`http://localhost:4040/logs/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.error("Error deleting log");
    } else {
      console.error("Log deletion completed:", response.status);
    }
  } catch (err) {
    console.error("Error while deleting log:", err);
  }
};

export default function LogShow() {
  const [log, setLog] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const res = await fetch(`http://localhost:4040/logs/${id}`);
        const log = await res.json();
        setLog(log);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLog();
  }, [id]);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    await deleteLog(id);
    setShowConfirm(false);
    navigate("/logs");
  };

  return (
    <>
      <div>
        {log && (
          <div>
            <h1>Show</h1>
            <Card className="border-5">
              <Card.Body className="text-center p-3">
                <h3>
                  {log.title} - By {log.captainName}
                </h3>
                <p>{log.post}</p>
                <p>Days Since Incident: {log.daysSinceLastCrisis}</p>
                <button onClick={() => navigate("/logs")}>Back</button>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={() => navigate(`/logs/${id}/edit`)}>
                  Edit
                </button>
              </Card.Body>
            </Card>
            {showConfirm && (
              <ConfirmModal
                onConfirm={confirmDelete}
                onCancel={() => setShowConfirm(false)}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
