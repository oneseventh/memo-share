import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { Container, Wrapper } from "./style";

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "LilyDB Text Share",
  description: "Simple Text Share Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" data-theme={(cookies().get("lilydb.theme"))?.value || "dark"}>
      <body className={notoSansKR.className}>
        <StyledComponentsRegistry>
          <main>
            <Wrapper>
              <Container>
                {children}
              </Container>
            </Wrapper>
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
