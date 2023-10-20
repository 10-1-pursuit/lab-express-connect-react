import React from "react";

function NewPage() {
  return (
    <>
      <div className="edit">
        <h2>New</h2>
        <form className="form">
          <div className="form-input">
            <label>Captain's Name</label>
            <input type="text" />
          </div>
          <div className="form-input">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="form-input">
            <label>Post:</label>
            <input type="text" />
          </div>
          <div className="form-input">
            <label>Days since Last Crisis</label>
            <input type="number" />
          </div>
          <div className="form-input">
            <label>Mistakes were made today</label>
            <input type="checkbox" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default NewPage;
