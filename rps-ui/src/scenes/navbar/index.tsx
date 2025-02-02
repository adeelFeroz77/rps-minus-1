import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Gamepad2, Trophy, BookOpen, LogIn } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <header className="fixed w-full top-0 p-4 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-md" />
          <Link
            to="/"
            className="text-xl font-bold text-slate-800 hover:text-blue-600 transition"
          >
            RPS²
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/lobby"
            className="flex items-center gap-1.5 hover:text-blue-600 transition px-3 py-2 rounded-lg hover:bg-slate-50"
          >
            <Gamepad2 className="w-5 h-5" />
            Play
          </Link>
          <Link
            to="/leaderboard"
            className="flex items-center gap-1.5 hover:text-blue-600 transition px-3 py-2 rounded-lg hover:bg-slate-50"
          >
            <Trophy className="w-5 h-5" />
            Leaderboard
          </Link>
          <Link
            to="/instructions"
            className="flex items-center gap-1.5 hover:text-blue-600 transition px-3 py-2 rounded-lg hover:bg-slate-50"
          >
            <BookOpen className="w-5 h-5" />
            How to Play
          </Link>
          <Link
            to="/auth"
            className="flex items-center gap-1.5 hover:text-blue-600 transition px-3 py-2 rounded-lg hover:bg-slate-50"
          >
            <LogIn className="w-5 h-5" />
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <Bars3Icon className="w-6 h-6 text-slate-800" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] ${
          isMobileMenuOpen
            ? "visible bg-black/30 backdrop-blur-sm"
            : "invisible opacity-0"
        } transition-all duration-300`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-2 p-0 bg-white h-svh">
            {/* Mobile Menu Header with Single Close Button */}
            <div className="flex items-center justify-between p-4 mb-4 border-b border-slate-200">
              <span className="text-lg font-bold text-slate-800">Menu</span>
              <button
                className="p-2 rounded-lg hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <XMarkIcon className="w-6 h-6 text-slate-800" />
              </button>
            </div>

            <Link
              to="/lobby"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Gamepad2 className="w-5 h-5" />
              <span className="font-medium">Play</span>
            </Link>

            <Link
              to="/leaderboard"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Trophy className="w-5 h-5" />
              <span className="font-medium">Leaderboard</span>
            </Link>

            <Link
              to="/instructions"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">How to Play</span>
            </Link>

            <Link
              to="/auth"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogIn className="w-5 h-5" />
              <span className="font-medium">Login</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
    {/* Add this to ensure content isn't hidden behind the header */}
    <div className="h-16 md:h-20"></div> {/* This div gives space equal to header's height */}
    </>
  );
}
