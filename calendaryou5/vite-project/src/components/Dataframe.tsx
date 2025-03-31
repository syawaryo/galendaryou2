import { FC, useContext } from 'react'
import { css } from '@emotion/react'
import { CriteriaContext } from './CriteriaContext'
import { ContentContext } from './ContentContext'
import { useParams } from 'react-router-dom'
import { Pagination } from './Pagination'

const headerRowStyle = css`
  color: #5c6b7e;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  display: flex;
  height: 40px;
  justify-content: start;
  align-items: center;
  gap: 44px;
`

const channelNameStyle = css`
  margin-left: 10px;
  width: 340px;
  text-align: left;
  padding-top: 5px;
`

const dataRowStyle = css`
  display: flex;
  width: 819.98px;
  min-height: 52px;
  flex-shrink: 0;
  justify-content: start;
  align-items: center;
  gap: 44px;
  background: #edf2f7;
  color: #5c6b7e;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 166.667% */
`

const videoTitleStyle = css`
  margin-left: 10px;
  margin-top: 17px;
  margin-bottom: 15px;
  width: 340px;
`

export const DataContentFrame: FC = () => {
  const contentContext = useContext(ContentContext)
  const criteriaContext = useContext(CriteriaContext)
  if (!contentContext) {
    throw new Error('ContentContext is not provided.')
  }
  if (!criteriaContext) {
    throw new Error('CriteriaContext is not provided.')
  }
  const { channels, criteria, videos } = contentContext
  const { id: routeId } = useParams<{ id?: string }>()
  const page = routeId ? parseInt(routeId, 10) : 1
  const itemsPerPage = 10
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const channelRows = channels.slice(startIndex, endIndex).map((channel, index) => (
    <div css={[dataRowStyle, index % 2 === 1 && { background: '#FFF' }]} key={channel.id}>
      <div css={videoTitleStyle}>{channel.title}</div>
      <div css={{ width: '82px', textAlign: 'left' }}>{channel.subscriberCount}</div>
      <div css={{ width: '82px', textAlign: 'left' }}>{channel.videoCount}</div>
      <div css={{ width: '82px', textAlign: 'left' }}>{channel.viewCount}</div>
    </div>
  ))

  const videoRows = videos.slice(startIndex, endIndex).map((video, index) => (
    <div css={[dataRowStyle, index % 2 === 1 && { background: '#FFF' }]} key={video.id}>
      <div css={videoTitleStyle}>{video.title}</div>
      <div css={{ width: '82px', textAlign: 'left' }}>{video.viewCount}</div>
      <div css={{ width: '82px', textAlign: 'left' }}>{video.likeCount}</div>
    </div>
  ))

  const renderContent = () => {
    switch (criteria) {
      case 'chname':
        return (
          <>
            <div css={headerRowStyle}>
              <div css={channelNameStyle}>チャンネル名</div>
              <div css={{ paddingTop: '5px', width: '82px', textAlign: 'left' }}>登録者数</div>
              <div css={{ paddingTop: '5px', width: '82px', textAlign: 'left' }}>動画投稿数</div>
              <div css={{ paddingTop: '5px', width: '82px', textAlign: 'left' }}>総再生数</div>
            </div>
            {channelRows}
            {<Pagination />}
          </>
        )
      case 'video':
        return (
          <>
            <div css={headerRowStyle}>
              <div css={channelNameStyle}>動画タイトル</div>
              <div css={{ paddingTop: '5px', width: '82px', textAlign: 'left' }}>再生数</div>
              <div css={{ paddingTop: '5px', width: '82px', textAlign: 'left' }}>いいね数</div>
            </div>
            {videoRows}
            {<Pagination />}
          </>
        )
    }
  }

  return <div>{renderContent()}</div>
}
