import { css } from '@emotion/react'
import { useContext } from 'react'
import { CriteriaContext } from './CriteriaContext'

const inputFieldStyle = css`
  display: flex;
  width: 705px;
  height: 26.1px;
  text-align: left;
  flex-shrink: 0;
  border-top: 1.5px solid #e2e8f0;
  border-bottom: 1.5px solid #e2e8f0;
  border-left: none;
  border-right: none;
  position: relative;
  padding: 1px 0px 1px 5px;
  margin-right: 0px;
  &:focus {
    outline: none;
  }
`

export const SearchInputField = () => {
  const criteriaContext = useContext(CriteriaContext)
  if (!criteriaContext) {
    throw new Error(
      'CriteriaContext is not provided. Did you forget to wrap the component with CriteriaContext.Provider?',
    )
  }
  const { updateStatus } = criteriaContext

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateStatus({ inputWord: e.target.value })
  }

  return (
    <div css={{ height: '31px' }}>
      <input type="text" css={inputFieldStyle} onChange={handleInputChange} />
    </div>
  )
}
