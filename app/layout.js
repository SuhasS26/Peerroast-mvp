import "./globals.css";
import { ProjectProvider } from "@/context/ProjectContext";
import Navbar from "@/components/Navbar";
import SubmitModal from "@/components/SubmitModal";

export const metadata = {
  title: "PeerRoast - Candid Feedback for Early Stage MVPs",
  description: "Test, critique, and improve indie hacker products before launch day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 flex flex-col min-h-screen">
        <ProjectProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <SubmitModal />
          <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4">
              <p>PeerRoast MVP • Built with Next.js & React Context • Milestone-1</p>
            </div>
          </footer>
        </ProjectProvider>
      </body>
    </html>
  );
}
