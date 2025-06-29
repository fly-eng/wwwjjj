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
            🚀 Web前端技术课程练习
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-emerald-400"
            >
              🏠 课程首页
            </Link>
            <Link
              href="/exercises"
              className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-emerald-400"
            >
              💻 实战练习
            </Link>
            <Link
              href="/github-stats"
              className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-emerald-400"
            >
              📈 学习记录
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}