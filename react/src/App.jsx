import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async () => {
    const data = await fetch(`http://localhost:4000/api/note`);
    const res = await data.json();
    setNotes(res.data);
  };

  const addNote = async () => {
    const data = await fetch(`http://localhost:4000/api/note`, {
      method: "POST",
      body: JSON.stringify({
        title: "From frontend",
        description: "From frontend",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json()
    console.log(res);
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <main>
      <div className="container">
        <div className="input_box">
          <input type="text" placeholder="Write note here..." />
          <button onClick={addNote}>Add Note</button>
        </div>
        <div className="notes">
          <h2>All Notes</h2>
          {notes.length > 0 ? (
            notes.map((e) => {
              return <SingleNote key={e._id} e={e} />;
            })
          ) : (
            <p>No Notes Available !</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;

const SingleNote = ({ e }) => {
  return (
    <div className="single_note">
      <p className="note">{e.title}</p>
      <p className="icons">
        <span>
          <FiEdit className="edit" />
        </span>
        <span>
          <MdDelete className="delete" />
        </span>
      </p>
    </div>
  );
};
