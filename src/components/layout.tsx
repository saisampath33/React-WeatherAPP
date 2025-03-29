import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
        <div className="container mx-auto px-4 text-center text-gray-200 flex items-center justify-center gap-3">
          <img
            src="/Sampath.jpg"
            alt="Sampath"
            className="h-8 w-8 rounded-full border-2 border-gray-600 shadow-md"
          />

          <p className="text-sm font-medium">
            Made by Sampath |{" "}
            <a
              href="https://github.com/sampath33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
