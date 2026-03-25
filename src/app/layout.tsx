import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "BeFit",
  description: "Connect, share, and grow together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex min-h-screen">
            {/* Sidebar - Navbar */}
            <aside className="fixed inset-y-0 left-0 z-40">
              <nav className="h-full">
                {/* Navbar komponenta bude zde */}
              </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 w-full lg:ml-60">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}