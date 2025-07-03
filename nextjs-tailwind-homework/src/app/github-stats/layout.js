// src/app/github-stats/layout.js
import Navbar from "@/components/Navbar";

export default function GitHubStatsLayout({ children }) {
  return (
<>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>

</>
  );
}

