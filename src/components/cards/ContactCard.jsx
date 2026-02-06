export default function ContactCard({ icon, title, username, desc, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-4 p-5 rounded-xl border bg-white
                 shadow-sm hover:shadow-md transition"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg border">
        {icon}
      </div>

      <div>
        <p className="font-medium">
          {title}{" "}
          <span className="text-gray-500">{username}</span>
        </p>
        <p className="text-sm text-gray-600">
          {desc}
        </p>
      </div>
    </a>
  );
}
