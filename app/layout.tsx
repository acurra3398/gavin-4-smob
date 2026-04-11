import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gavin Falcón for SMOB — Finalist",
  description: "Official campaign site for Gavin Falcón, finalist for Student Member of the Board.",
};

// Runs before React hydrates so there's no light→dark flash on load.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : systemDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased transition-colors">
        {children}
      </body>
    </html>
  );
}
