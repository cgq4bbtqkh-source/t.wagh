import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 grain">
      <div className="max-w-md text-center">
        <p className="label mb-6">Error / 404</p>
        <h1 className="display text-7xl text-bone">Off-script.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This page isn't part of the sequence.
        </p>
        <div className="mt-8">
          <Link to="/" className="mono text-[0.7rem] tracking-[0.3em] uppercase text-gold link-underline">
            ← Return to opening scene
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tanmay Wagh — Strategic Creative Operator" },
      { name: "description", content: "Independent artist manager turned strategic creative operator. Positioning, campaign architecture, live experience design." },
      { name: "author", content: "Tanmay Wagh" },
      { property: "og:title", content: "Tanmay Wagh — Strategic Creative Operator" },
      { property: "og:description", content: "Independent artist manager turned strategic creative operator. Positioning, campaign architecture, live experience design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tanmay Wagh — Strategic Creative Operator" },
      { name: "twitter:description", content: "Independent artist manager turned strategic creative operator. Positioning, campaign architecture, live experience design." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/01db3603-3199-4736-8a82-c77b3b3bf83f" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/01db3603-3199-4736-8a82-c77b3b3bf83f" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="grain">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteNav />
      <main className="relative">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
