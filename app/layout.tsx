import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "./components/layout/AppShell";
import { SearchProvider } from "./components/layout/SearchContext";

export const metadata: Metadata = {
  title: "JSP — JavaScript Practice",
  description: "Learn JavaScript by practicing one question at a time.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <AppShell>{children}</AppShell>
        </SearchProvider>
      </body>
    </html>
  );
}
