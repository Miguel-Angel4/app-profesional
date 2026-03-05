import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { BottomNav } from "@/components/bottom-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Topbar />
          <main className="mx-auto max-w-6xl p-4 pb-24 md:p-6">{children}</main>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}