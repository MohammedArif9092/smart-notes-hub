import { db } from "../firebase";
import { useState, useEffect } from "react";
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc,
  deleteDoc  
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../redux/notesSlice";
function Notes() {
    const dispatch = useDispatch();
const notes = useSelector((state) => state.notes.notesList);
    const [editId, setEditId] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addNote = async () => {
  if (title === "" || description === "") return;

  try {
    if (editId !== null) {
      // 🔥 UPDATE NOTE
      const noteRef = doc(db, "notes", editId);

      await updateDoc(noteRef, {
        title: title,
        description: description,
      });

      setEditId(null);
    } else {
      // ➕ ADD NOTE
      await addDoc(collection(db, "notes"), {
        title: title,
        description: description,
      });
    }

    setTitle("");
    setDescription("");

    fetchNotes(); // refresh data
  } catch (error) {
    console.error("Error: ", error);
  }
};

const fetchNotes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "notes"));

    const notesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch(setNotes(notesData)); // 🔥 Redux update
  } catch (error) {
    console.error("Error fetching notes: ", error);
  }
};

useEffect(() => {
    fetchNotes();
}, []);

    const deleteNote = async (id) => {
  try {
    const noteRef = doc(db, "notes", id);

    await deleteDoc(noteRef);

    fetchNotes(); // refresh UI
  } catch (error) {
    console.error("Error deleting note: ", error);
  }
};

    const editNote = (note) => {
  setTitle(note.title);
  setDescription(note.description);
  setEditId(note.id); // Firebase doc id
};

    return (
        <div className="container mt-5">

            {/* Page Heading */}
            <div className="text-center mb-4">
                <h2 className="fw-bold">Your Notes</h2>
                <p className="text-muted">Manage your notes easily</p>
            </div>

            {/* Add Note Button */}
            <div className="text-end mb-4">
                <button className="btn btn-success" onClick={addNote}>
                    <i className="fa-solid fa-plus me-2"></i>
                    Add Note
                </button>
            </div>

            {/* Add Note Form */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">

                    <h5 className="mb-3">Add New Note</h5>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter note title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter note description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <button className="btn btn-success" onClick={addNote}>
                        <i className="fa-solid fa-plus me-2"></i>
                        {editId ? "Update Note" : "Add Note"}
                    </button>

                </div>
            </div>

            {/* Notes Cards (Static for now) */}
            <div className="row">
                {notes.map((note) => (
                    <div className="col-md-4 mb-4" key={note.id}>
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{note.title}</h5>
                                <p className="card-text">{note.description}</p>

                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => editNote(note)}
                                >
                                    <i className="fa-solid fa-pen"></i>
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteNote(note.id)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>


    );
}

export default Notes;