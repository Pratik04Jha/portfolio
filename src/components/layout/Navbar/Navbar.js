import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import ToggleGridDropdown from "./ToggleGridDropdown";

const linkData = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Programming", href: "/" },
  { name: "Chess", href: "/chess" },
  { name: "Rubik's cube", href: "/" },
  { name: "Art gallery", href: "/" },
  { name: "Blogs", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-100 flex justify-between items-center py-2 px-4 bg-transparent  backdrop-blur-xl">
      <div className="flex justify-start items-center gap-10 ">
        <div className="font-semibold">Pratik Jha</div>
        <div className="flex justify-center items-center gap-1">
          {linkData.map((items, index) => (
            <Link
              key={index}
              href={items.href}
              className="hover:bg-zinc-900 px-4 py-1 rounded-lg"
            >
              {items.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <ToggleGridDropdown />
        <ThemeToggle />
        <Link href="/Links/SignIn">
          <button className="bg-black rounded-lg py-1 px-4 text-white border cursor-pointer border-white/20  text-sm">
            Sign in
          </button>
        </Link>
        <Link href="/Links/SignUp">
          <button className="bg-white rounded-lg py-1 px-4 text-black  text-sm cursor-pointer">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
}
