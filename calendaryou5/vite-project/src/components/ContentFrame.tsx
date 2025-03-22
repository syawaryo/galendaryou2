import React, { FC, useContext } from 'react'
import { StyledContentFrame } from '../styled'
import { ContentProvider } from './ContentContext'
import { CriteriaContext } from './CriteriaContext'

type ContentFrameProps = {
  children?: React.ReactNode
}

export const ContentFrame: FC<ContentFrameProps> = ({ children }) => {
  const criteriaContext = useContext(CriteriaContext)
  if (!criteriaContext) {
    throw new Error(
      'CriteriaContext is not provided. Did you forget to wrap the component with CriteriaContext.Provider?',
    )
  }

  return (
    <ContentProvider>
      <StyledContentFrame>{children}</StyledContentFrame>
    </ContentProvider>
  )
}
