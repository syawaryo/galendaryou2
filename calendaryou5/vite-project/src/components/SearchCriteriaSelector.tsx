import { StyledSearchCriteriaSelector } from '../styled'
import { useState, useContext, useEffect } from 'react'
import { Searchcriteria, SearchcriteriaButton } from '../styled'
import { css } from '@emotion/react'
import { CriteriaButtonGroup } from '../styled'
import { CriteriaContext } from './CriteriaContext'

const errorMessageStyle = css`
  color: rgba(255, 0, 0, 0.56);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  width: 243px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
  margin-left: 1px;
`

export const SearchCriteriaSelector = () => {
  const [selectedCriteria, setSelectedCriteria] = useState(['a', 'a'])
  // const [selectedCriteria, setSelectedCriteria] = useState(["a", "a", "a"]);

  const criteriaContext = useContext(CriteriaContext)
  if (!criteriaContext) throw new Error('CriteriaContext is undefined')
  const { updateStatus, errortype } = criteriaContext

  useEffect(() => {
    const selectedIndex = selectedCriteria.indexOf('b')
    const criteriaOptions = ['chname', 'title']
    // const criteriaOptions = ['chname', 'title', 'hashtag']
    updateStatus({
      inputSearchcriteria: selectedIndex === -1 ? '' : criteriaOptions[selectedIndex],
    })
  }, [selectedCriteria])

  const toggleCriteriaSelection = (index: number) => {
    setSelectedCriteria((prevSelections) => {
      const newSelections = [...prevSelections]
      newSelections[index] = 'b'
      newSelections.forEach((value, index) => {
        newSelections[index] = prevSelections[index] !== value ? 'b' : 'a'
      })
      console.log(newSelections)
      return newSelections
    })
  }

  return (
    <StyledSearchCriteriaSelector>
      <Searchcriteria>ワード検索条件</Searchcriteria>
      <CriteriaButtonGroup>
        <SearchcriteriaButton
          isClickedSearch={selectedCriteria[0] === 'b'}
          onClick={() => toggleCriteriaSelection(0)}
        >
          chName
        </SearchcriteriaButton>
        <SearchcriteriaButton
          isClickedSearch={selectedCriteria[1] === 'b'}
          onClick={() => toggleCriteriaSelection(1)}
        >
          title
        </SearchcriteriaButton>
        {/* <SearchcriteriaButton
          isClickedSearch={selectedCriteria[2] === "b"}
          onClick={() => toggleCriteriaSelection(2)}
        >
          HashTag
        </SearchcriteriaButton> */}
      </CriteriaButtonGroup>
      {!errortype.inputSearchcriteriaerror && <div css={errorMessageStyle}>※選択してください</div>}
    </StyledSearchCriteriaSelector>
  )
}
