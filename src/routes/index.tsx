            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              aria-label="Email"
              className="grid place-items-center w-9 h-9 rounded-lg border border-border bg-secondary/40 hover:border-primary/60 hover:text-primary transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Explore</div>
          <div className="mt-4 grid grid-cols-2 gap-y-2">
            <a href="#about" className="text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground">
              Services
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground">
              Process
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground">
              Clients
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <button
              type="button"
              onClick={onOpenLeadForm}
              className="text-left text-muted-foreground hover:text-foreground"
            >
              Lead Form
            </button>
          </div>
        </div>

        <div className="text-sm">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Support</div>
          <div className="mt-4 space-y-2">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-4 h-4 text-primary" /> {SUPPORT_EMAIL}
            </a>
            <a
              href={SUPPORT_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Phone className="w-4 h-4 text-primary" /> +91 63885 07400
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BadgeCheck className="w-4 h-4 text-primary" /> Fast & reliable response
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 mt-10 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} PNX IT Solutions. All rights reserved.</div>
        <div>Your Trusted IT & Cloud Partner</div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */
function LeadTextField({
  label,
  name,
  type = "text",
  autoComplete,
  inputMode,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  inputMode?: "tel";
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium">
      {label} {required && <span className="text-primary">*</span>}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function LeadCheckbox({
  label,
  name,
  value,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-secondary/40 px-3 py-3 text-sm transition hover:border-primary/50 hover:bg-secondary">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-[var(--primary)]"
      />
      <span>{label}</span>
    </label>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.25em] text-primary/80">{eyebrow}</div>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 text-muted-foreground">{desc}</p>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="card-glow rounded-2xl p-6 group">
      <div className="grid place-items-center w-11 h-11 rounded-xl bg-secondary text-primary shadow-[0_0_24px_-8px_var(--glow)]">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
