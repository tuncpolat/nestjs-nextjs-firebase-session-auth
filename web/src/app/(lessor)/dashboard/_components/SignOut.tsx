"use client";

import { useRouter } from "next/navigation";
import { signOutWithFirebase } from "@/services/firebase/auth";
import { removeSession } from "@/services/auth";

export function SignOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOutWithFirebase();
    const { status } = await removeSession();
    if (status === "success") {
      router.push("/auth");
    }
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="rounded-md bg-indigo-600 mt-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Sign Out
    </button>
  );
}
