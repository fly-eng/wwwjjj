import "./globals.css";
import Footer from "@/components/Footer"; // 导入 Footer 组件

export const metadata = {
  title: "Web前端开发练习平台", // 更新标题
  description: "《Web前端开发》课程练习成果展示", // 更新描述
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">{/* 移除所有内部换行 */}
      <head>{/* 保持标签紧凑 */}
        <style>{`
          :root {
            --font-sans: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
            --font-mono: 'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;
          }
        `}</style>
      </head>
      <body className="antialiased bg-slate-50 flex flex-col min-h-screen">
        <div className="flex-grow">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
