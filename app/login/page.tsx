"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/button";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  async function handleSubmit() {
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push(redirect);
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <p className="text-black-500">Enter the password to continue</p>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSubmit()}
        className="border border-gray-300 px-4 py-2 w-64"
        placeholder="Password"
      />
      {error && <p className="text-red-500 text-sm">Incorrect password</p>}
      <Button
        href="#"
        onClick={handleSubmit}
        variant="primary"
        label="Enter"
      />
    </div>
  );
}
