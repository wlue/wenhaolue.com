"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-bg-header">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/img/face.jpg"
              alt="Wen-Hao Lue"
              width={80}
              height={80}
              className="rounded-full"
              priority
            />
          </Link>
          <div>
            <Link href="/" className="no-underline hover:no-underline">
              <h1 className="text-2xl font-bold text-text-header">
                Wen-Hao Lue
              </h1>
            </Link>
            <p className="text-sm text-text-header/70 font-light italic">
              Engineer, jazz musician, foodie.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
