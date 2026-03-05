import { HelpButton } from "@/components/help-button";

export function PageHeader({
  title,
  description,
  helpKey,
}: {
  title: string;
  description?: string;
  helpKey: string;
}) {
  return (
    <div className="relative mb-8 pb-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-[600px] text-base text-muted-foreground/80 leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex-shrink-0 pt-2">
          <HelpButton helpKey={helpKey} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-24 bg-gradient-to-r from-primary to-transparent opacity-50" />
    </div>
  );
}