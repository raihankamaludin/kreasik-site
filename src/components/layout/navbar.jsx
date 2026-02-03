export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center gap-10 px-6 py-4">
        <div className="text-xl font-bold">LOGO</div>

        <ul className="flex gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:underline">Stories</li>
          <li className="cursor-pointer hover:underline">Jobs</li>
          <li className="cursor-pointer hover:underline">Newsroom</li>
          <li className="cursor-pointer hover:underline">Our business</li>
        </ul>
      </div>
    </nav>
  );
}
