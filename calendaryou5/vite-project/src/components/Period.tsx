import React from 'react'
import { PeriodFrame as StyledPeriodFrame } from '../styled'
import { PeriodTitle } from '../styled'
import { css } from '@emotion/react'
import { useContext } from 'react'
import { CriteriaContext } from './CriteriaContext'

const periodTextStyle = css`
  color: #5c6b7e;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 30px */
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const startYearInputStyle = css`
  width: 50px;
  border: none;
  color: #5c6b7e;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-left: 10px;
`

const endYearInputStyle = css`
  width: 50px;
  border: none;
  color: #5c6b7e;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-left: 3px;
`

const monthInputStyle = css`
  width: 34px;
  border: none;
  color: #5c6b7e;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`

const dayInputStyle = css`
  width: 34px;
  border: none;
  color: #5c6b7e;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`

const alertStyle = css`
  color: rgba(255, 0, 0, 0.56);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  display: flex;
  width: 243px;
  height: 31px;
  justify-content: start;
  align-items: center;
  margin-left: 51px;
`

const periodContainerStyle = css`
  height: 43px;
  border-right: 1.5px solid #e2e8f0;
  width: 658.5px;
  display: flex;
  justify-content: start;
  border-top: 1.5px solid #e2e8f0;
  border-bottom: 1.5px solid #e2e8f0;
`

const disabledInputStyle = css`
  background-color: rgba(236, 236, 236, 0.51);
  cursor: not-allowed;
  transition: background-color 0.2s ease-out;
  border: 1px solid rgba(189, 189, 189, 0.88);
`

export const PeriodFrame = () => {
  const [year, setYear] = React.useState('')
  const [month, setMonth] = React.useState('')
  const [day, setDay] = React.useState('')
  const [year2, setYear2] = React.useState('')
  const [month2, setMonth2] = React.useState('')
  const [day2, setDay2] = React.useState('')

  const criteriaContext = useContext(CriteriaContext)
  if (!criteriaContext) throw new Error('criteriaContext is undefined')
  const { searchcriteria, updateStatus, errortype } = criteriaContext

  React.useEffect(() => {
    updateStatus({ inputPeriod: `${year}/${month}/${day}`, inputIndex: 0 })
  }, [year, month, day])
  React.useEffect(() => {
    updateStatus({ inputPeriod: `${year2}/${month2}/${day2}`, inputIndex: 1 })
  }, [year2, month2, day2])
  React.useEffect(() => {
    if (searchcriteria === 'chname') {
      setYear('')
      setMonth('')
      setDay('')
      setYear2('')
      setMonth2('')
      setDay2('')
    }
  }, [searchcriteria])

  return (
    <StyledPeriodFrame>
      <PeriodTitle>期間</PeriodTitle>
      <div css={periodContainerStyle}>
        <div css={periodTextStyle}>
          <input
            css={[startYearInputStyle, searchcriteria === 'chname' && disabledInputStyle]}
            type="text"
            inputMode="numeric"
            value={year}
            onChange={(e) => {
              setYear(e.target.value)
            }}
            placeholder="YYYY"
            maxLength={4}
            disabled={searchcriteria === 'chname'}
          />
          {' / '}
          <input
            css={[monthInputStyle, searchcriteria === 'chname' && disabledInputStyle]}
            type="text"
            inputMode="numeric"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value)
            }}
            placeholder="MM"
            maxLength={2}
            disabled={searchcriteria === 'chname'}
          />
          {' / '}
          <input
            css={[dayInputStyle, searchcriteria === 'chname' && disabledInputStyle]}
            type="text"
            inputMode="numeric"
            value={day}
            onChange={(e) => {
              setDay(e.target.value)
            }}
            placeholder="DD"
            maxLength={2}
            disabled={searchcriteria === 'chname'}
          />
          {'～'}
        </div>
        <div css={periodTextStyle}>
          <input
            css={[endYearInputStyle, searchcriteria === 'chname' && disabledInputStyle]}
            type="text"
            inputMode="numeric"
            value={year2}
            onChange={(e) => {
              setYear2(e.target.value)
            }}
            placeholder="YYYY"
            maxLength={4}
            disabled={searchcriteria === 'chname'}
          />
          {' / '}
          <input
            css={[monthInputStyle, searchcriteria === 'chname' && disabledInputStyle]}
            type="text"
            inputMode="numeric"
            value={month2}
            onChange={(e) => {
              setMonth2(e.target.value)
            }}
            placeholder="MM"
            maxLength={2}
            disabled={searchcriteria === 'chname'}
          />
          {' / '}
          <input
            css={[dayInputStyle, searchcriteria === 'chname' && disabledInputStyle]}
            type="text"
            inputMode="numeric"
            value={day2}
            onChange={(e) => {
              setDay2(e.target.value)
            }}
            placeholder="DD"
            maxLength={2}
            disabled={searchcriteria === 'chname'}
          />
        </div>
      </div>
      {searchcriteria !== 'chname' && (
        <>
          {!errortype.noentryerror && <div css={alertStyle}>※入力してください</div>}
          {!errortype.inputformarterror && (
            <div css={alertStyle}>※半角数字のみで入力してください</div>
          )}
          {!errortype.noexistentdate && <div css={alertStyle}>※存在しない日付です</div>}
        </>
      )}
    </StyledPeriodFrame>
  )
}
