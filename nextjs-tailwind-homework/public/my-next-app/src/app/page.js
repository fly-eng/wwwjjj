import Hello from '../../components/Hello'  // 修正相对路径层级
export default function Page() {
    return (
        <div>
            <h1 style={{ color: 'red' }}>这是来自函数的内容</h1>
            <Hello />
        </div>
    )
}

