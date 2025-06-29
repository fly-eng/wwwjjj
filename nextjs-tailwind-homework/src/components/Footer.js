"use client"; 
import { useEffect, useState } from 'react';

export default function Footer() {
  const [codingTime, setCodingTime] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodingTime = async () => {
      try {
        const apiKey = process.env.WAKATIME_API_KEY;
        const username = process.env.NEXT_PUBLIC_WAKATIME_USERNAME || 'current';
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
          {/* 新增课程标题和技术栈 */}
          <h1 className="text-xl font-bold text-slate-100">《Web前端开发》课程练习平台</h1>
          <h2 className="text-sm text-gray-400">使用 Next.js 和 Tailwind CSS 构建</h2>
          
          {/* 原有wakatime显示 */}
          <p className="text-sm text-gray-400">
            wakatime总时长: {error || codingTime || '加载中...'}
          </p>
        </div>
      </div>
    </div>
  );
}