import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar, CustomTrigger } from "@/components/layout/app-sidebar"

export const metadata: Metadata = {
  title: "Winch4.ai",
  description: "Créé par Winch4.ai",
};

export default async function RootLayout({
  children,
}: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="fr">
      <body className="h-screen flex flex-col">
        <SidebarProvider>
          <AppSidebar />
            <main className="w-full flex flex-col">
            <CustomTrigger />
            <div className="flex-grow flex flex-col justify-center">
              {children}
              {/* Footer */}
            </div>
            <footer className="flex-shrink-0 text-center py-4">
              <p className="text-sm text-gray-600">© 2024 Winch4.ai - Winchy peut faire des erreurs, pensez à vérifier l'information.</p>
            </footer>
            </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
