import { Suspense } from "react";
import HomeClient from "./HomeClient";
import InvitePage from "./invite/page";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <HomeClient />
      <InvitePage/>
    </Suspense>
  );
}
