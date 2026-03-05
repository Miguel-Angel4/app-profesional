"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, List, FileText, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/listado", label: "Listado", icon: List },
    { href: "/informe", label: "Informe", icon: FileText },
    { href: "/ayuda", label: "Ayuda", icon: HelpCircle },
];

export function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 pb-safe backdrop-blur-lg md:hidden">
            <div className="flex items-center justify-around p-2">
                {nav.map((item) => {
                    const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center gap-1 p-2 transition-all duration-300",
                                active ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            <div className={cn(
                                "rounded-full p-1.5 transition-all duration-300",
                                active ? "bg-primary/20 scale-110" : "bg-transparent"
                            )}>
                                <Icon className="size-5" />
                            </div>
                            <span className="text-[10px] font-medium tracking-tight uppercase">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
