import React from 'react'
import { AppContainer } from '../styled.tsx'
import { CriteriaProvider } from './CriteriaContext'

type DesktopProps = {
  children?: React.ReactNode
}

export const DesktopLayout: React.FC<DesktopProps> = ({ children }) => {
  return (
    <CriteriaProvider>
      <AppContainer>{children}</AppContainer>
    </CriteriaProvider>
  )
}
