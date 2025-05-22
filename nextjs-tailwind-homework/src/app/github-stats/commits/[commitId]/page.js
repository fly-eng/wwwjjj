// ... existing code ...
export default async function CommitDetailPage({ params }) {
    const { commitId } = params; // ✅ 现在参数名和文件夹名一致
    // ... existing code ...
}

export async function generateMetadata({ params }) {
    const { commitId } = params; // ✅ 现在参数名和文件夹名一致
    return {
        title: `Commit ${commitId.substring(0,7)} - GitHub Stats`,
        description: `Details for commit ${commitId} from yangjh-xbmu/Web-develop`,
    };
}