"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    console.log(res);
    let data;
      data = await res.json();
        console.log(data);

    if (!res.ok) {
      setError(data.error || "Chyba při registraci. Zkuste to znovu!");
    } else {
      alert("User created");
      setError("");
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input
        className="border border-gray-300 p-2 m-2"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
        Register
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}