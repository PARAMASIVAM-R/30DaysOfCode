import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

interface Node {
  id: string;
  content: string;
}

function NodeList() {
  const [notes, setNotes] = useState<Node[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
      const notesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Node[];

      setNotes(notesData);
    });

    return () => unsubscribe();
  }, []);

  function handleDelete(noteId: string) {
    const noteRef = doc(db, "notes", noteId);
    deleteDoc(noteRef)
      .then(() => {
        console.log(`Note ${noteId} deleted`);
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Notes</h2>
      <ul className="space-y-3">
        {notes.map((note) => (
          <li
            key={note.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200
             hover:shadow-lg transition flex justify-between items-center"
          >
            <span className="text-gray-700">{note.content}</span>
            <button
              onClick={() => handleDelete(note.id)}
              className="ml-4 px-3 py-1 text-sm bg-red-500 text-white rounded
               hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NodeList;
