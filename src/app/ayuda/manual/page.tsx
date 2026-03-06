import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Monitor, PlayCircle, Download, Settings, ChevronRight, CheckCircle2 } from "lucide-react";

export default function ManualPage() {
  return (
    <div className="space-y-12 pb-12">
      <PageHeader
        title="Manual de Usuario"
        description="Guía completa para el uso eficiente de la aplicación App Profesional."
        helpKey="ayuda"
      />

      {/* 1. Descripción de pantallas */}
      <section id="descripcion" className="scroll-mt-20">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Monitor className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Descripción de pantallas</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="overflow-hidden border-primary/5 bg-secondary/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-primary">Inicio</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                El panel de control principal. Aquí encontrarás widgets con información en tiempo real, KPIs destacados y accesos directos a tus tareas más frecuentes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-primary/5 bg-secondary/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-primary">Listado</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La central de datos. Permite visualizar todos los registros en una tabla interactiva con capacidades de filtrado dinámico, búsqueda y ordenación personalizada.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-primary/5 bg-secondary/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-primary">Informe</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Módulo analítico avanzado. Visualiza gráficos comparativos, tendencias temporales y exporta los datos en formato CSV o PDF para su presentación externa.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-primary/5 bg-secondary/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-primary">Ayuda</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Espacio de soporte que incluye este manual interactivo y descripciones de la configuración técnica necesaria para el despliegue de la app.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. Flujo de uso */}
      <section id="flujo" className="scroll-mt-20">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <PlayCircle className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Flujo de uso</h2>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-primary/20 before:to-transparent">
          {[
            {
              step: "01",
              title: "Monitorización",
              desc: "Comienza revisando el Dashboard de Inicio para identificar alertas o tareas pendientes del día."
            },
            {
              step: "02",
              title: "Operación",
              desc: "Accede al Listado para gestionar registros. Utiliza el botón de 'Acciones' para crear nuevos elementos o modificar los existentes."
            },
            {
              step: "03",
              title: "Análisis",
              desc: "Utiliza el módulo de Informe para verificar que los KPIs se mantienen dentro de los rangos óptimos y detecta desviaciones."
            }
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-background text-primary font-bold shadow-sm z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {item.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-xl border border-primary/10 bg-secondary/10 p-5 shadow-sm ml-4 md:ml-0">
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Instalación Android */}
      <section id="instalacion" className="scroll-mt-20">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Download className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Instalación Android</h2>
        </div>

        <Card className="border-primary/10 bg-secondary/5">
          <CardContent className="p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border shadow-inner">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h4 className="font-semibold">Habilitar APK</h4>
                <p className="text-xs text-muted-foreground">Activa 'Orígenes desconocidos' en Ajustes &gt; Seguridad.</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border shadow-inner">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h4 className="font-semibold">Transferir</h4>
                <p className="text-xs text-muted-foreground">Copia app-profesional.apk a la memoria del móvil.</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border shadow-inner">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h4 className="font-semibold">Ejecutar</h4>
                <p className="text-xs text-muted-foreground">Abre el APK desde el explorador y pulsa 'Instalar'.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. Configuración básica */}
      <section id="configuracion" className="scroll-mt-20">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Settings className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Configuración básica</h2>
        </div>

        <div className="space-y-4">
          {[
            "Vincular cuenta de usuario en la primera apertura para sincronizar datos.",
            "Configurar las notificaciones push para recibir alertas de cambios en el Listado.",
            "Explorar el modo de Ayuda Contextual pulsando el icono '?' en cada pantalla.",
            "Verificar conexión a internet estable para la generación de Informes."
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/90">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
