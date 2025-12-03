import { Suspense } from "react";
import InvitePage from "./InvitePage";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <InvitePage />
    </Suspense>
  );
}
