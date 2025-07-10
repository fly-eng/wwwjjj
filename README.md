# Web前端开发练习平台项目文档作品说明

## 一、项目简介
本项目是一个《Web前端开发》课程练习成果展示平台，基于Next.js和Tailwind CSS构建。平台提供了多个前端技术练习的展示，涵盖HTML、CSS、JavaScript、React、Next.js等方面。同时，集成了GitHub统计数据展示功能，方便查看指定仓库的提交记录和详情。此外，还引入了QAnything AI知识库和WakaTime编码时长统计功能，提升用户体验和学习数据可视化。

## 二、QAnything集成路径与实现细节

### 选择的路径
在`src/app/page.js`文件中通过`<script>`标签直接嵌入QAnything的JavaScript文件实现集成。

### 原因
- **简单便捷**：通过直接嵌入JavaScript文件，无需复杂的配置和开发，能够快速实现QAnything的集成。
- **灵活性高**：可以通过设置不同的属性（如`data-agent-src`、`data-default-open`等）来定制QAnything的显示和行为。

### 实现代码
```html
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
```

### QAnything运行截图
嵌入版截图：

![QAnything运行截图](.\public\QAnything运行截图（嵌入版）.png)

链接网页版截图：

![QAnything运行截图](.\public\QAnything运行截图（链接网页版）.png)

## 三、WakaTime API集成方法

### 集成步骤
1. **设置环境变量**：在项目的`.env`文件中设置`WAKATIME_API_KEY`和`NEXT_PUBLIC_WAKATIME_USERNAME`。
2. **创建API路由**：在`src/app/api/wakatime/route.js`中创建一个API路由，用于调用WakaTime API获取编码时长数据。
3. **前端调用API**：在`src/components/Footer.js`中使用`fetch`函数调用上述API，并将结果显示在页面上。

### 实现代码

#### API路由（`src/app/api/wakatime/route.js`）
```javascript
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;
    const username = process.env.NEXT_PUBLIC_WAKATIME_USERNAME || 'current';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'WAKATIME_API_KEY is not set in environment variables' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://wakatime.com/api/v1/users/${username}/stats/all_time`,
      {
        headers: {
          'Authorization': `Basic ${btoa(`${apiKey}:`)}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: 'Failed to fetch WakaTime data', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('WakaTime API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
```

#### 前端调用（`src/components/Footer.js`）
```javascript
import { useEffect, useState } from 'react';

export default function Footer() {
  const [codingTime, setCodingTime] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodingTime = async () => {
      try {
        const response = await fetch('/api/wakatime');

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch coding time');
        }

        const data = await response.json();
        const totalSeconds = data.data.total_seconds;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        setCodingTime(`${hours}h ${minutes}m`);
      } catch (err) {
        setError('无法获取编码时长数据');
        console.error('WakaTime API error:', err);
      }
    };

    fetchCodingTime();
  }, []);

  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-xl font-bold text-slate-100">《Web前端开发》课程练习平台</h1>
          <h2 className="text-sm text-gray-400">使用 Next.js 和 Tailwind CSS 构建</h2>
          <p className="text-sm text-gray-400">
            wakatime总时长: {error || codingTime || '加载中...'}
          </p>
        </div>
      </div>
    </div>
  );
}
```

### WakaTime API集成与展示截图
![WakaTime API集成与展示截图](.\public\WakaTime API集成与展示截图.png)

## 四、Next.js项目结构
```
├── nextjs-tailwind-homework/
    ├── public/
    │   ├── exercises/                # 旧作业页面
    │   │   ├── 03-css-01.html
    │   │   ├── 04-css-02.html
    │   │   ├── 05-news-02.html
    │   │   ├── 06-css-02.html
    │   │   ├── 07-news-02.html
    │   │   ├── season.html
    ├── src/
    │   ├── app/
    │   │   ├── globals.css           # 全局样式文件
    │   │   ├── layout.js             # 根布局文件
    │   │   ├── page.js               # 首页文件
    │   │   ├── github-stats/         # GitHub统计数据相关页面
    │   │   │   ├── layout.js         # GitHub统计数据页面布局
    │   │   │   ├── page.js           # GitHub统计数据首页
    │   │   │   ├── error.js          # GitHub统计数据页面错误处理
    │   │   │   ├── loading.js        # GitHub统计数据加载中提示
    │   │   │   └── commits/          # 提交详情页面
    │   │   │       └── [commitId]/
    │   │   │           └── page.js   # 单个提交详情页面
    │   │   └── api/
    │   │       └── wakatime/
    │   │           └── route.js      # WakaTime API路由
    │   ├── components/
    │   │   ├── ExerciseCard.js      # 练习卡片组件
    │   │   ├── Footer.js            # 页脚组件
    │   │   ├── Header.js            # 页眉组件
    │   │   └── Loading.js           # 加载中提示组件
    │   ├── data/
    │   │   └── exercises.json       # 旧作业练习数据文件
    │   ├── pages/
    │   │   ├── api/
    │   │   │   └── github-stats/
    │   │   │       └── [username]/
    │   │   │           └── [repo]/
 
```

## 五、旧作业整合方式
旧作业通过`src/data/exercises.json`文件进行整合，每个练习项包含标题、描述、图片链接、练习链接和标签等信息。在`src/app/page.js`中，通过循环遍历`exercises.json`文件中的数据，使用`ExerciseCard`组件将每个练习以卡片的形式展示在页面上。

### 实现代码
```javascript
import ExerciseCard from "@/components/ExerciseCard";
import exercises from "@/data/exercises.json";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* ... */}
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
      {/* ... */}
    </div>
  );
}
```

### Next.js组织课程练习作业的运行截图
#### 练习导航页
![练习导航页截图](.\public\练习导航页截图.png)


#### github提交作业截图
![github提交作业截图](.\public\github提交作业截图.png)


#### 某个具体练习的运行界面
第二周作业截图

![具体练习运行界面截图](.\public\第二周作业截图.png)

第三周作业截图

![具体练习运行界面截图](.\public\第三周作业截图.png)

第四周作业截图

![具体练习运行界面截图](.\public\第四周作业截图.png)


第五周作业截图

![具体练习运行界面截图](.\public\第五周作业截图.png)

第六周作业截图

![具体练习运行界面截图](.\public\第六周作业截图.png)

第七周作业截图

![具体练习运行界面截图](.\public\第七周作业截图.png)

season截图

![具体练习运行界面截图](.\public\season截图.png)


## 六、项目运行指南

### 1. 克隆项目
```bash
git clone https://github.com/fly-eng/wwwjjj.git
cd nextjs-tailwind-homework
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量
在项目根目录下创建`.env.local`文件，并添加以下内容：
```plaintext
WAKATIME_API_KEY=<你的WakaTime API密钥>
NEXT_PUBLIC_WAKATIME_USERNAME=<你的WakaTime用户名>
```

### 4. 运行项目
```bash
npm run dev
```

### 5. 访问项目
打开浏览器，访问`http://localhost:3000`即可查看项目运行效果。
