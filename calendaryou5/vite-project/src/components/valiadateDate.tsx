export const validateDate = (input: string): boolean => {
  const normalizedInput = input.replace(/\s/g, '0')
  const numericInput = normalizedInput.replace(/[^0-9]/g, '')
  if (numericInput.length !== 8) return false
  const year = parseInt(numericInput.slice(0, 4))
  const month = parseInt(numericInput.slice(4, 6))
  const day = parseInt(numericInput.slice(6, 8))

  const dateObject = new Date(year, month - 1, day)
  const isvalidDate =
    !isNaN(dateObject.getTime()) &&
    dateObject.getFullYear() === year &&
    dateObject.getMonth() === month - 1 &&
    dateObject.getDate() === day
  return isvalidDate
}

export type ValidationResult = {
  isValid: boolean
  formattedDate: string
  errortype?: string
}

export const validateAndFormatDate = (input: string): ValidationResult => {
  console.log(input)
  const parts = input.split('/')
  let year
  let month
  let day

  year = parts[0]
  month = parts[1]
  day = parts[2]
  if (year.length === 8) {
    year = input.slice(0, 4)
    month = input.slice(4, 6)
    day = input.slice(6, 8)
  }
  console.log({ year, month, day })
  //20030430みたいに片方だけを変更してた場合//を取り除いたやつがそのまま代入されることがある

  if (year === '' || month === '') {
    return {
      isValid: false,
      formattedDate: `${year}${month}${day}`,
      errortype: 'noentryerror',
    }
  }

  year = year.replace(/\s/g, '').padStart(4, '0')
  month = month.replace(/\s/g, '').padStart(2, '0')
  day = day.replace(/\s/g, '').padStart(2, '0')

  const nonNumericRegex = /[^0-9]/g
  if (nonNumericRegex.test(year) || nonNumericRegex.test(month) || nonNumericRegex.test(day)) {
    return {
      isValid: false,
      formattedDate: `${year}${month}${day}`,
      errortype: 'inputformarterror',
    }
  }

  if (year === '0000' || month === '00') {
    return {
      isValid: false,
      formattedDate: `${year}${month}${day}`,
      errortype: 'noexistentdate',
    }
  }

  if (day === '00') {
    day = '01'
    return {
      isValid: true,
      formattedDate: `${year}${month}${day}`,
    }
  }

  return {
    isValid: true,
    formattedDate: `${year}${month}${day}`,
  }
}
