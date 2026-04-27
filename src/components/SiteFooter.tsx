export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border/50 px-6 md:px-12 py-10 mt-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="display text-3xl md:text-5xl text-bone leading-none">
          Tanmay <span className="italic text-gold">Wagh</span>
        </div>
        <div className="flex flex-col md:items-end gap-1">
          <p className="label">© 2026 — All structure, no noise</p>
          <p className="mono text-[0.7rem] text-muted-foreground tracking-widest uppercase">
            Mumbai · India · Available worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
