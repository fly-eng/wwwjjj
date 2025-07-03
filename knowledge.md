
# 前端开发知识点

## 前端框架
### Next.js
#### 配置
##### `next.config.mjs`
- 使用 JSDoc 类型提示确保配置对象正确性
- 定义配置对象并导出
- 示例结构：
  ```javascript
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    // 配置选项
  };
  
  export default nextConfig;
  ```

## CSS
### CSS 基本语法
#### 选择器
##### 元素选择器
- `h1` - 选择所有h1标题元素

#### 注释
- `/* 注释 */` - CSS中的注释写法

### CSS 属性
#### 文本属性
- `text-align: center;` - 设置文本居中对齐
- `font-size: 32px;` - 设置字体大小为32像素

#### 颜色属性
- `color: rgba(184, 108, 108, 0.856);` - 使用RGBA颜色值设置文本颜色，带透明度

### CSS 变量
#### 自定义属性
- `--gray-rgb: 0, 0, 0;` - 定义RGB颜色值变量
- `--gray-alpha-200: rgba(var(--gray-rgb), 0.08);` - 使用变量创建带透明度的颜色
- `--button-primary-hover: #383838;` - 定义按钮悬停颜色

### CSS 布局
#### Flexbox布局
- `display: flex;` - 使用弹性盒子布局
- `flex-direction: column;` - 设置主轴方向为垂直方向
- `gap: 32px;` - 设置flex项目之间的间距

#### Grid布局
- `display: grid;` - 使用网格布局
- `grid-template-rows: 20px 1fr 20px;` - 定义网格行的大小
- `grid-row-start: 2;` - 指定元素从第二行开始

### CSS 盒模型
- `padding: 80px;` - 设置内边距
- `margin-bottom: 8px;` - 设置下外边距
- `border: 1px solid transparent;` - 设置边框
- `border-radius: 128px;` - 设置边框圆角

### CSS 响应式设计
#### 媒体查询
- `@media (max-width: 600px) { ... }` - 当视口宽度小于600px时应用样式
- `@media (prefers-color-scheme: dark) { ... }` - 根据用户颜色主题偏好应用样式
- `@media (hover: hover) and (pointer: fine) { ... }` - 针对支持悬停的非触摸设备应用样式

### CSS 交互效果
#### 过渡与动画
- `transition: background 0.2s, color 0.2s, border-color 0.2s;` - 设置多个属性的过渡效果

#### 伪类
- `:hover` - 鼠标悬停状态
- `:not(:last-of-type)` - 选择非最后一个同类型元素
