import { SearchBarWrapper } from '../styled'
import { FC } from 'react'
import { ComponentProps } from '../styled'
import { css } from '@emotion/react'
import { useContext } from 'react'
import { CriteriaContext } from './CriteriaContext'

const alartStyle = css`
  color: rgba(255, 0, 0, 0.56);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  display: flex;
  width: 243px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
`

export const SearchBar: FC<ComponentProps> = ({ children }) => {
  const criteriaContext = useContext(CriteriaContext)
  if (!criteriaContext) {
    throw new Error(
      'CriteriaContext is not provided. Did you forget to wrap the component with CriteriaContext.Provider?',
    )
  }
  const { errortype } = criteriaContext
  return (
    <SearchBarWrapper>
      {children}
      {!errortype.inputworderror && <div css={alartStyle}>※入力してください</div>}
    </SearchBarWrapper>
  )
}
