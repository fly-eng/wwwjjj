// src/app/github-stats/layout.js
import Navbar from "@/components/Navbar";

export default function GitHubStatsLayout({ children }) {
  return (
<>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
    <div className="min-h-screen flex flex-col">
      {/* 这里保持与现有项目一致的导航栏组件 */}
      {children}
    </div>
</>
  );
}

