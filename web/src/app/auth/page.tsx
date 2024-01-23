import Link from "next/link";
import { LoginForm } from "./_components/LoginForm";

export default function Login() {
  return (
    <>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        You don't have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Register here.
        </Link>
      </p>
      <LoginForm />
    </>
  );
}
