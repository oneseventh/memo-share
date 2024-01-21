import { toggleTheme } from "@/lib/lilydb-theme-manager";
import { getMemoById } from "../server/memo";
import { Header, MemoContent, Title, ToggleButton } from "../style";

export default async function MemoPage({ params }) {
    const { memo, isError } = await getMemoById(Math.floor(params.id))

    if (isError) {
        return <span>메모를 찾을 수 없습니다.</span>
    }

    return (
        <>
            <Header>
                <Title>{memo.title}</Title>
            </Header> 
            <MemoContent>
                {memo.content}
            </MemoContent>
        </>
    )
}