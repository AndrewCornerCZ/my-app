"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn}  from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error("Chyba při parsování JSON:", error);
      setError("Chyba při přihlášení. Zkuste to znovu!");
      return;
    }

    if (!res.ok) {
      setError(data.error || "Chyba při přihlášení. Zkuste to znovu!");
    } else {
      const id = data.user.id;
      alert("Uživatel úspěšně přihlášen!");
      setError("");
      await signIn("credentials", {
        email,
        id,
        password,
        redirect: false,
      });
      router.push("/"); 
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input
        className="border border-gray-300 p-2 m-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border border-gray-300 p-2 m-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-indigo-500 text-white p-2 m-2" type="submit">
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}