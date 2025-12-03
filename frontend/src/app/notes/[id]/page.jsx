"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const backend = process.env.NEXT_PUBLIC_API_URL || "https://test-fkc55.ondigitalocean.app";

export default function NoteDetailsPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${backend}/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setNote(data))
      .catch(() => console.log("Failed to load note"));
  }, [id]);

  if (!note) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{note.title}</h1>
      <p className="mt-4">{note.content}</p>
    </div>
  );
}
