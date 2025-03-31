import React from 'react'
import { AppContainer } from '../styled'
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
