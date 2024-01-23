import { getSession } from "@/lib/api/auth";
import { getLessor } from "@/lib/api/lessor";
import { SignOut } from "./_components/SignOut";

export default async function Dashboard() {
  const user = await getSession();
  const lessor = await getLessor();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Dashboard of {user?.uid}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          {lessor?.email}
        </p>
      </div>
      <SignOut />
    </main>
  );
}
