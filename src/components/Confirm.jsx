import { Card } from "react-bootstrap";

export default function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <>
      <Card className="border">
        <Card.Body>
          <p style={{ fontWeight: "bold" }}>
            Warning unlike video games, you cannot go back from deleting this
            log, do you dare continue?
          </p>
          <button onClick={onConfirm}>Yes, delete</button>
          <button onClick={onCancel}>No, cancel</button>
        </Card.Body>
      </Card>
    </>
  );
}
