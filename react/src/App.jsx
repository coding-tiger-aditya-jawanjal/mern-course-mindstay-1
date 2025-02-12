import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [change, setChange] = useState(true);
  const [note, setNote] = useState("");
  const [id, setId] = useState(null);

  const fetchAllNotes = async () => {
    const data = await fetch(`http://localhost:4000/api/note`);
    const res = await data.json();
    setNotes(res.data);
  };

  const addNote = async () => {
    const data = await fetch(`http://localhost:4000/api/note`, {
      method: "POST",
      body: JSON.stringify({
        title: note,
        description: "From frontend",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    if (res?.ok) {
      setChange((pre) => !pre);
      setNote("");
      toast.success(res?.msg);
    }
  };

  const deleteNote = async (id) => {
    const data = await fetch(`http://localhost:4000/api/note/${id}`, {
      method: "DELETE",
    });
    const res = await data.json();
    if (res?.ok) {
      setChange((pre) => !pre);
      toast.warn(res?.msg);
    }
  };

  const handleEdit = (e) => {
    setId(e._id);
    setNote(e.title);
  };

  const updateNote = async () => {
    const data = await fetch(`http://localhost:4000/api/note/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: note,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    if (res?.ok) {
      setNote("");
      setId(null);
      setChange((pre) => !pre);
      toast.success(res?.msg);
    }
  };

  useEffect(() => {
    fetchAllNotes();
  }, [change]);

  return (
    <main>
      <div className="container">
        <div className="input_box">
          <input
            type="text"
            placeholder="Write note here..."
            onChange={(e) => setNote(e.target.value)}
            value={note ? note : ""}
          />
          <button onClick={id ? updateNote : addNote}>
            {id ? "Update" : "Add Note"}
          </button>
        </div>
        <div className="notes">
          <h2>All Notes</h2>
          {notes.length > 0 ? (
            notes.map((e) => {
              return (
                <div key={e._id} className="single_note">
                  <p className="note">{e.title}</p>
                  <p className="icons">
                    <span onClick={() => handleEdit(e)}>
                      <FiEdit className="edit" />
                    </span>
                    <span onClick={() => deleteNote(e._id)}>
                      <MdDelete className="delete" />
                    </span>
                  </p>
                </div>
              );
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
