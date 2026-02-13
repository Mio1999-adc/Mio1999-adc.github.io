import { Card } from "@/components/ui/card";

interface Publication {
  title: string;
  venue: string;
  link?: {
    label: string;
    href: string;
  };
}

interface PublicationsProps {
  publications?: Publication[];
}

export function Publications({ publications }: PublicationsProps) {
  if (!publications || publications.length === 0) {
    return null;
  }

  return (
    <section className="print-force-new-page scroll-mt-16" id="publications">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Publications</h2>
        <div className="space-y-4">
          {publications.map((pub, id) => (
            <Card key={id} className="p-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold leading-tight">
                  {pub.link ? (
                    <a
                      href={pub.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">{pub.venue}</p>
                {pub.link && (
                  <a
                    href={pub.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:underline"
                  >
                    {pub.link.label} →
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
