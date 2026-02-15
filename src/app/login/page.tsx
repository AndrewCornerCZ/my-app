"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn }  from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error || "Chyba při přihlášení. Zkuste to znovu!");
      } else if (result?.ok) {
        router.push("/");
      }
    } catch (err) {
      console.error("Chyba při přihlášení:", err);
      setError("Chyba při přihlášení. Zkuste to znovu!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Přihlášení</h1>
            <p className="text-gray-600">Vítejte zpět!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="tvůj@email.cz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Heslo
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:from-teal-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 transform hover:scale-105"
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Přihlašuji...</span>
                </span>
              ) : (
                "Přihlásit se"
              )}
            </button>
          </form>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Nemáš účet?{" "}
              <a
                href="../register"
                className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline transition"
              >
                Zaregistruj se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}