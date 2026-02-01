import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome 👋</h1>
      <p className="text-muted-foreground">
        Đây là workshop Next.js + Bun
      </p>

      <Link href="/blog">
        <Button size="lg">Go to Blog</Button>
      </Link>
    </section>
  );
}
