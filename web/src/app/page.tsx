import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Implementing Session-Based Authentication with NestJS, Next.js 14, Firebase, and MongoDB
        </h2>
      </div>
      <Link href="/auth">
        <button
          type="button"
          className="rounded-md bg-indigo-600 mt-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </button>
      </Link>
    </main>
  );
}
