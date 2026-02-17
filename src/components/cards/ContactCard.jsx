export default function ContactCard({ icon, title, username, desc, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-start gap-4 p-6 rounded-2xl border border-border
                 bg-surface hover:shadow-md transition"
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl
                   bg-primary/10 text-primary group-hover:bg-primary
                   group-hover:text-white transition"
      >
        {icon}
      </div>

      <div>
        <p className="font-medium">
          {title}
          {username && (
            <span className="block text-sm text-text-muted">
              {username}
            </span>
          )}
        </p>
        <p className="text-sm text-text-body mt-1">
          {desc}
        </p>
      </div>
    </a>
  );
}
