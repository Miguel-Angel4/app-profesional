import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AyudaPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Centro de ayuda"
        description="Manual HTML + ayuda por secciones (contextual)."
        helpKey="ayuda"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Manual (HTML)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Accede a la documentación completa del sistema.</p>
            <a className="inline-flex items-center gap-2 text-primary hover:underline font-medium" href="/ayuda/manual">
              Abrir manual de usuario
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ayuda contextual</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Usa el botón “?” en cada pantalla para abrir ayuda específica.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}