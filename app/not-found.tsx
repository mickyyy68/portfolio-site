import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 sm:px-8 lg:px-16">
        <div className="space-y-6">
          <div className="text-sm font-mono tracking-wider text-muted-foreground">
            404
          </div>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="max-w-md text-muted-foreground">
            This page does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex text-sm text-foreground transition-colors duration-300 hover:text-muted-foreground"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
