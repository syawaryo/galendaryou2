import React, { createContext, useState } from 'react'
import { ComponentProps } from '../styled'

type CriteriaContextValue = {
  status: boolean
  period: string[]
  inputword: string
  searchcriteria: string
  errortype: ValidationErrors
  updateStatus: (options: UpdateStatusOptions) => void
}

export type ValidationErrors = {
  inputworderror: boolean
  inputSearchcriteriaerror: boolean
  noentryerror: boolean
  inputformarterror: boolean
  noexistentdate: boolean
}

type UpdateStatusOptions = {
  inputStatus?: boolean
  inputPeriod?: string
  inputWord?: string
  inputIndex?: number
  inputSearchcriteria?: string
  inputErrortype?: Partial<ValidationErrors>
  inputrestError?: boolean
}

export const CriteriaContext = createContext<CriteriaContextValue | undefined>(undefined)

export const CriteriaProvider: React.FC<ComponentProps> = ({ children }) => {
  const [status, setStatus] = useState(false)
  const [period, setPeriod] = useState<string[]>([])
  const [inputword, setInputword] = useState('')
  const [searchcriteria, setSearchcriteria] = useState('')
  const initialErrorTypeState: ValidationErrors = {
    inputworderror: true,
    inputSearchcriteriaerror: true,
    noentryerror: true,
    inputformarterror: true,
    noexistentdate: true,
  }
  const [errortype, setErrortype] = useState<ValidationErrors>(initialErrorTypeState)

  const updateStatus = (options: UpdateStatusOptions) => {
    const {
      inputStatus,
      inputPeriod,
      inputWord,
      inputIndex,
      inputSearchcriteria,
      inputErrortype,
      inputrestError,
    } = options
    if (inputStatus) setStatus(inputStatus)
    if (inputPeriod !== undefined && inputIndex !== undefined) {
      setPeriod((prevPeriod) => {
        const newArray = [...prevPeriod]
        newArray[inputIndex] = inputPeriod
        return newArray
      })
    }
    if (inputWord !== undefined) setInputword(inputWord)
    if (inputSearchcriteria !== undefined) setSearchcriteria(inputSearchcriteria)
    if (inputrestError) {
      setErrortype(initialErrorTypeState)
    } else if (inputErrortype !== undefined) {
      setErrortype((pre) => ({
        ...pre,
        noentryerror: true,
        inputformarterror: true,
        noexistentdate: true,
        ...inputErrortype,
      }))
    }
  }

  return (
    <CriteriaContext.Provider
      value={{ status, period, inputword, searchcriteria, errortype, updateStatus }}
    >
      {children}
    </CriteriaContext.Provider>
  )
}
