import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Начало", href: "/" },
  { label: "Партии", href: "/parties" },
  { label: "Тест", href: "/quiz" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-cyan-900/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 md:py-5">
        <Link className="flex items-center gap-3 md:gap-4" href="/">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-1 shadow-sm md:h-16 md:w-16 md:p-1.5">
            <Image
              src="/kochina-raccoon-logo.png"
              alt="Лого на Кочина"
              width={64}
              height={64}
              className="h-10 w-10 object-contain md:h-14 md:w-14"
              priority
            />
          </span>
          <span>
            <span className="block text-base font-bold md:text-3xl">
              Кочина
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Главна">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-cyan-50 hover:text-cyan-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="md:hidden">
          <Link href="/parties">Към партиите</Link>
        </Button>
      </div>
    </header>
  );
}
