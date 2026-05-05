"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  async function handleSubmit() {
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      window.location.href = redirect;
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center my-auto pb-50 gap-4">
      <p className="text-gray-500">Enter the password to continue</p>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSubmit()}
        className="border border-gray-300 px-4 py-2 w-64"
        placeholder="Password"
      />
      {error && <p className="text-red-500 text-sm">Incorrect password</p>}
      <button onClick={handleSubmit} className="bg-black text-white px-6 py-2 text-sm">
        Enter
      </button>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
