import Navbar from "@/components/Navbar";
import ExerciseCard from "@/components/ExerciseCard"; // 导入练习卡片组件
import exercises from "@/data/exercises.json"; // 从 JSON 文件导入练习数据

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="text-center mb-12 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">
            《Web前端开发》课程练习
          </h1>
          <p className="text-lg text-gray-600 px-4">
            欢迎来到课程练习展示平台，这里汇集了各个阶段的学习成果。
          </p>
        </header>

        {/* 练习卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              title={exercise.title}
              description={exercise.description}
              imageUrl={exercise.imageUrl}
              link={exercise.link}
              tags={exercise.tags}
            />
          ))}
        </div>
        <div className="container">
          <script
            src="https://ai.youdao.com/saas/qanything/js/agent-iframe-min.js"
            id="qanything-iframe"
            data-agent-src="https://ai.youdao.com/saas/qanything/#/bots/8B75F756E27949A6/share"
            data-default-open="false"
            data-drag="false"
            data-open-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
            data-close-icon="https://download.ydstatic.com/ead/icon-qanything-close.png"
            defer
          />
        </div>
      </main>
      {/* Footer 组件将在 layout.js 中添加 */}
    </div>
  );
}
