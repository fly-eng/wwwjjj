import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            href="/" 
            className="text-2xl font-extrabold tracking-tight hover:text-emerald-300 transition-colors duration-300 transform hover:scale-105"
          >
             Web前端技术课程练习
          </Link>
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-4 items-center">
              <li>
                <Link href="/" className="px-3 py-2 hover:text-emerald-400 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/exercises" className="px-3 py-2 hover:text-emerald-400 transition-colors">
                  练习
                </Link>
              </li>
              <li>
                <Link href="/github-stats" className="px-3 py-2 hover:text-emerald-400 transition-colors">
                  GitHub统计
                </Link>
              </li>
            </ul>
            <Link
              href="https://ai.youdao.com/saas/qanything/#/bots/8B75F756E27949A6/share"
              className="px-3 py-2 hover:text-emerald-400 transition-colors"
              target="_blank"
            >
              AI知识库
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}