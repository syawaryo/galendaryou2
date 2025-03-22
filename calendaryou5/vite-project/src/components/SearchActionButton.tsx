import { SearchButtonWrapper } from '../styled'
import { useContext } from 'react'
import { CriteriaContext, ValidationErrors } from './CriteriaContext'
import { validateDate, validateAndFormatDate } from './valiadateDate'
import { FetchYoutubeChannelData, FetchYoutubeVideoData } from './FetchYoutubeData'
import { ContentContext } from './ContentContext'

export const SearchActionButton = () => {
  const criteriaContext = useContext(CriteriaContext)
  const contentContext = useContext(ContentContext)

  if (!criteriaContext) {
    throw new Error('CriteriaContext is not provided.')
  }
  if (!contentContext) {
    throw new Error('ContentContext is not provided.')
  }

  const { period, inputword, searchcriteria, updateStatus } = criteriaContext
  const { criteriaUpdate, channelUpdate, videoUpdate } = contentContext

  const handleClick = async () => {
    const localErrortype: ValidationErrors = {
      inputworderror: inputword !== '' ? true : false,
      inputSearchcriteriaerror: searchcriteria !== '' ? true : false,
      noentryerror: true,
      inputformarterror: true,
      noexistentdate: true,
    }

    updateStatus({ inputErrortype: localErrortype })

    const startDateResult = validateAndFormatDate(period[0])
    const endDateResult = validateAndFormatDate(period[1])

    if ((startDateResult.isValid && endDateResult.isValid) || searchcriteria === 'chname') {
      const isStartDateValid = validateDate(startDateResult.formattedDate)
      const isEndDateValid = validateDate(endDateResult.formattedDate)
      console.log(startDateResult.formattedDate)
      console.log(endDateResult.formattedDate)

      if ((isStartDateValid && isEndDateValid) || searchcriteria === 'chname') {
        updateStatus({ inputPeriod: startDateResult.formattedDate, inputIndex: 0 })
        updateStatus({ inputPeriod: endDateResult.formattedDate, inputIndex: 1 })
        console.log(period)

        if (
          localErrortype.inputworderror &&
          localErrortype.inputSearchcriteriaerror &&
          searchcriteria === 'title'
        ) {
          try {
            const data = await FetchYoutubeVideoData({
              period: [startDateResult.formattedDate, endDateResult.formattedDate],
              searchcriteria,
              inputword,
            })
            console.log('API success', data)
            videoUpdate(data)
            criteriaUpdate('video')
          } catch (error) {
            console.error('API error', error)
          }
        }

        if (
          localErrortype.inputworderror &&
          localErrortype.inputSearchcriteriaerror &&
          searchcriteria === 'chname'
        ) {
          try {
            const data = await FetchYoutubeChannelData({
              period: [startDateResult.formattedDate, endDateResult.formattedDate],
              searchcriteria,
              inputword,
            })
            console.log('API success', data)
            channelUpdate(data)
            criteriaUpdate('chname')
          } catch (error) {
            console.error('API error', error)
          }
        }
      } else {
        updateStatus({ inputStatus: false, inputErrortype: { noexistentdate: false } })
      }
    } else {
      if (
        startDateResult.errortype === 'noentryerror' ||
        endDateResult.errortype === 'noentryerror'
      ) {
        updateStatus({ inputStatus: false, inputErrortype: { noentryerror: false } })
      } else if (
        startDateResult.errortype === 'noexistentdate' ||
        endDateResult.errortype === 'noexistentdate'
      ) {
        updateStatus({ inputStatus: false, inputErrortype: { noexistentdate: false } })
      } else {
        updateStatus({ inputStatus: false, inputErrortype: { inputformarterror: false } })
      }
    }
  }

  return <SearchButtonWrapper onClick={handleClick}></SearchButtonWrapper>
}
