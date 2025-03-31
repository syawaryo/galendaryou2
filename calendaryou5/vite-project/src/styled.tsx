/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export type ComponentProps = {
  children: React.ReactNode
}

export const AppContainer = styled.div`
  display: inline-flex;
  padding: 46px 321px 124px 0px;
  align-items: center;
  background: #fff;
`

export const StyledContentFrame = styled.div`
  display: flex;
  padding: 0px 51px 299px 51px;
  flex-direction: column;
`

export const SearchBarWrapper = styled.div`
  height: 31px;
  display: flex;
  background: #fff;
  align-items: flex-end;
  align-self: stretch;
`

export const SearchIconWrapper = styled.div`
  display: flex;
  min-width: 33px;
  height: 31px;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0px 0px 0px;
  background: #e2e8f0;
`

export const Searchhoso = styled.div`
  background: url('../public/search_hoso.svg') #e2e8f0 50% / cover no-repeat;
  width: 21px;
  height: 16px;
  flex-shrink: 0;
`

const hoverAnimation = keyframes`
    0% {
        background:rgb(124, 214, 205);
    }

    100% {
        background: rgba(124, 214, 205, 0.78);
    }
`

export const SearchButtonWrapper = styled.button`
  display: flex;
  width: 77px;
  height: 31px;
  padding: 6px 26px 6px 27px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: rgb(124, 214, 205);
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  border-radius: 0px 5px 0px 0px;
  transition: background 800ms ease-out;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: transparent;
    animation: ${hoverAnimation} 300ms linear forwards;
  }

  &::after {
    content: '検索';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
`

export const StyledSearchCriteriaSelector = styled.div`
  height: 43px;
  border-left: 1.5px solid #e2e8f0;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CriteriaButtonGroup = styled.div`
  height: 43px;
  border-right: 1.5px solid #e2e8f0;
  width: 658.5px;
  display: flex;
  justify-content: start;
  gap: 7px;
  align-items: center;
`

export const Searchcriteria = styled.div`
  font-family: 'Inter', sans-serif;
  width: 157px;
  height: 43px;
  flex-shrink: 0;
  border-right: 1.5px solid #e2e8f0;
  background: #fff;
  color: #5c6b7e;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchcriteriaButton = styled.button<{ isClickedSearch: boolean }>`
  font-family: 'Inter', sans-serif;
  flex-shrink: 0;
  width: 80px;
  height: 29px;
  border-radius: 16px;
  border: 3px solid #fff;
  box-shadow: -1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-left: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isClickedSearch }) => (isClickedSearch ? '#2C7A7B' : '#FFF')};
  color: ${({ isClickedSearch }) => (isClickedSearch ? '#FFF' : '#2C7A7B')};
  transition:
    background-color 0.4s ease-out,
    color 0.4s ease-out;
  &:hover {
    border: 3px solid #fff;
    transition: background-color 0.3s ease-out;
    background-color: ${({ isClickedSearch }) =>
      isClickedSearch ? 'rgba(44, 122, 123, 0.78)' : 'rgba(79, 150, 144, 0.22)'};
  }
  &:active {
    border: 3px solid #fff;
  }
  &:focus {
    border: 3px solid #fff;
    outline-width: 0px;
  }
`

export const PeriodFrame = styled.div`
  height: 43px;
  display: flex;

  align-items: center;
`

export const PeriodTitle = styled.div`
  display: flex;
  width: 157px;
  height: 43px;
  justify-content: center;
  align-items: center;
  color: #5c6b7e;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 100% */
  border-right: 1.5px solid #e2e8f0;
  border-top: 1.5px solid #e2e8f0;
  border-left: 1.5px solid #e2e8f0;
  border-bottom: 1.5px solid #e2e8f0;
`
