import Link from "next/link";
import { RegisterForm } from "./_components/RegisterForm";

export default function Register() {
  return (
    <>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Sign up for an account
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        You already have an account?{" "}
        <Link
          href="/auth"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in here.
        </Link>
      </p>
      <RegisterForm />
    </>
  );
}
