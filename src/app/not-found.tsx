import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h2 className="text-6xl font-bold mb-4 text-text">404</h2>
      <p className="text-xl text-text-secondary mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-brand text-white font-medium hover:opacity-80 transition-opacity"
      >
        Go home
      </Link>
    </div>
  );
}
