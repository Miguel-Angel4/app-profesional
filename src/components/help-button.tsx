"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const HELP: Record<string, { title: string; body: string }> = {
  home: {
    title: "Ayuda: Inicio",
    body: "Desde aquí navegas a Listado, Informe y Ayuda. La topbar agrupa acciones globales.",
  },
  listado: {
    title: "Ayuda: Listado",
    body: "La lista muestra registros. Acción principal: abrir detalle. Añade botones coherentes si procede (editar, cerrar, etc.).",
  },
  detalle: {
    title: "Ayuda: Detalle",
    body: "Vista de un registro. Mantén acciones secundarias como botones (por ejemplo: 'Cambiar estado').",
  },
  informe: {
    title: "Ayuda: Informe",
    body: "Aplica filtros, revisa KPIs y gráfico. Debe verse claro y consistente con el theme.",
  },
  ayuda: {
    title: "Ayuda: Centro de ayuda",
    body: "Aquí enlazas manual HTML/PDF y documentas instalación/configuración.",
  },
};

export function HelpButton({ helpKey }: { helpKey: string }) {
  const content = HELP[helpKey] ?? { title: "Ayuda", body: "No hay ayuda definida para esta pantalla." };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon-sm" className="rounded-full border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground whitespace-pre-wrap">{content.body}</div>
      </DialogContent>
    </Dialog>
  );
}