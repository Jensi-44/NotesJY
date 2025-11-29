import { Suspense } from "react";
import InviteForm from "./InviteForm";

export const dynamic = "force-dynamic";

export default function InvitePage() {
<<<<<<< HEAD
=======
  const params = useSearchParams();
  const router = useRouter();

  const email = params.get("email");
  const noteId = params.get("note");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  async function acceptInvitation() {
    if (!email || !noteId) return;

    if (password.length < 6) {
      setStatusMsg("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${backend}/auth/accept-invite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          noteId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusMsg(data.message || "Something went wrong.");
        setLoading(false);
        return;
      }

      setStatusMsg("Account created! Redirecting...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err) {
      setStatusMsg("Server error. Try again.");
    }

    setLoading(false);
  }
  

>>>>>>> e9e06d7 (invitation)
  return (
    <Suspense fallback={<div className="p-6">Loading invitation…</div>}>
      <InviteForm />
    </Suspense>
  );
}
