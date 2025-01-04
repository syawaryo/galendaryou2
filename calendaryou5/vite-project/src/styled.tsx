import styled from '@emotion/styled'
import { Keyframes, css } from "@emotion/react";

export type Component_type = {
    children?: React.ReactNode;
}

export const Desktop1 = styled.div`
    display: inline-flex;
    padding: 46px 521px 124px 0px;
    align-items: center;
    background: #FFF;
`;

export const Frame9 = styled.div`
    display: flex;
    width: 919px;
    padding: 0px 51px 299px 51px;
    flex-direction: column;
    align-items: flex-start;
`

export const Frame5 = styled.div`
    width: 793px;
    height: 31px;
    background: #FFF;
`

export const Frame18 = styled.div`
    display: flex;
    width: 33px;
    height: 31px;
    padding: 7px 6px 8px 6px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 5px 0px 0px 0px;
    background: #EDF2F7;
`

export const Searchhoso = styled.div`
    background: url('../public/search_hoso.svg')  #EDF2F7 50%/ cover no-repeat;
    width: 21px;
    height: 16px;
    flex-shrink: 0;
`


export const Frame7 = styled.input`
    width: 676px;
    height: 31px;
    flex-shrink: 0;
    border-top: 1px solid #EDF2F7;
    border-bottom: 1px solid #EDF2F7;
`

export const Frame6 = styled.div`
    display: flex;
    width: 85px;
    height: 32px;
    padding: 7px 26px 6px 27px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: #4FD1C5;
`

export const Frame6_kensaku = styled.div`
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`