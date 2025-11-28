import { Suspense } from "react";
import InviteForm from "./InviteForm";

export const dynamic = "force-dynamic";

export default function InvitePage() {
  return (
    <Suspense fallback={<div className="p-6">Loading invitation…</div>}>
      <InviteForm />
    </Suspense>
  );
}
