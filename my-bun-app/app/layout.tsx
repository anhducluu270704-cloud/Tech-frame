import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b">
          <div className="mx-auto flex max-w-6xl gap-6 p-4">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/blog" className="font-semibold">
              Blog
            </Link>
          </div>
        </nav>

        <main className="mx-auto max-w-6xl p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
