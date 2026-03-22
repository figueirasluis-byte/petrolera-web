"use client";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-50">
      <h1 className="font-bold text-xl">
        CAPACITACIÓN PETROLERA
      </h1>

      <a
        href="https://wa.me/529933979863"
        target="_blank"
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        WhatsApp
      </a>
    </header>
  );
}