import { ReactNode } from "react"
import { PageContainer, PageContent } from "./styles"

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({children}: DefaultLayoutProps) {
  return(
    <PageContainer>
      <PageContent>
      {children}
      </PageContent>
    </PageContainer>
      
  )
}