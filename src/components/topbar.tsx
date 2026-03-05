"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Topbar() {
  const pathname = usePathname();
  const routeName = pathname === "/" ? "Dashboard" : pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <header className="sticky top-0 z-10 border-b bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-2">
          <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">
            Navigation /
          </div>
          <div className="text-sm font-medium text-foreground/80">
            {routeName}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="hidden border border-border/50 bg-secondary/30 hover:bg-secondary/50 sm:flex">
            <Link href="/informe">Ver informe</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="shadow-lg shadow-primary/20">Acciones</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => alert("Acción primaria (placeholder)")}>
                Acción primaria
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Exportar (placeholder)")}>
                Exportar CSV
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Sincronizar (placeholder)")}>
                Sincronizar Datos
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}