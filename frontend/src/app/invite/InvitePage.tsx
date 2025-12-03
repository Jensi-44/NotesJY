"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import InviteForm from "./InviteForm";

const backend = process.env.NEXT_PUBLIC_API_URL || "https://test-fkc55.ondigitalocean.app";

export default function InvitePage() {
  const params = useSearchParams();
  const router = useRouter();

  const email = params.get("email");
  const noteId = params.get("note");

  const [userExists, setUserExists] = useState<boolean | null>(null);

  useEffect(() => {
    if (!email || !noteId) return;

    localStorage.setItem("pendingNote", noteId);

    fetch(`${backend}/auth/check-user?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.exists) {
          setUserExists(true);
          router.push("/login");
        } else {
          setUserExists(false);
        }
      })
      .catch(() => setUserExists(false));
  }, [email, noteId]);

  if (userExists === null) {
    return <div className="p-6">Checking invitation…</div>;
  }

  if (userExists === true) return null;

  return <InviteForm />;
}
