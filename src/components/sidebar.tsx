"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/listado", label: "Listado" },
  { href: "/informe", label: "Informe" },
  { href: "/ayuda", label: "Ayuda" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:gap-4 md:border-r md:bg-card/30 md:p-6">
      <div className="flex items-center gap-2 px-2 text-lg font-bold tracking-tight text-primary">
        <div className="size-2 rounded-full bg-primary animate-pulse" />
        App Profesional
      </div>
      <Separator className="opacity-50" />
      <nav className="flex flex-col gap-2">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "group relative flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              ].join(" ")}
            >
              {item.label}
              {active && (
                <div className="absolute right-3 size-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto px-2 text-[10px] font-medium tracking-widest uppercase text-muted-foreground/50">
        v1.0 · Executive Presence
      </div>
    </aside>
  );
}