'use client'

import { Container, Header, InputContent, InputTitle, InputWrapper, Submit, Title, ToggleButton, Wrapper } from "./style";
import { currentTheme, toggleTheme } from "@/lib/lilydb-theme-manager";
import { useEffect, useState } from "react";
import { createMemo } from "./server/memo";
import { useRouter } from "next/navigation";

export default function Home() {

  const [theme, setTheme] = useState(null)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(null)

  const router = useRouter()

  useEffect(() => {
    async function fetchTheme() {
      const current = await currentTheme()
      setTheme(current)
    }

    fetchTheme()
  }, [])

  const handleSubmit = async () => {
    if (!loading) {
      setLoading(true)

      const { memo, id, isError } = await createMemo(title, description)

      if (isError) {
        setError(isError)
        setLoading(false)
        return
      }

      router.push(`/${id}`)
    }
  }

  return (
    <>
      <Header>
        <Title>Text Share</Title>
        <div style={{flex: "1"}} />
        { theme && (
          <ToggleButton
            onClick={async () => {
              await toggleTheme()
              window.location.reload()
            }}
          >
            { theme === "dark" ? "🌙 다크 모드" : "☀️ 라이트 모드"}
          </ToggleButton>
        )}
      </Header>
      <InputWrapper>
        { error && "에러가 발생하였습니다." }
        <InputTitle type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
        <InputContent name="content" placeholder="내용" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
          <div style={{flex: "1"}} />
          <Submit onClick={handleSubmit} disabled={loading ? true : (!(title.length >= 2 && description.length >= 4))}>제출</Submit>
        </div>
      </InputWrapper>
    </>
  );
}
