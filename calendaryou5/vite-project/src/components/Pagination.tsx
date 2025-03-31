import { Link } from 'react-router-dom'
import { ContentContext } from './ContentContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'

const activePageStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  flex-shrink: 0;
  background: rgba(129, 212, 204, 1);
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background: rgba(124, 214, 205, 0.79);
    color: #fff;
  }
`

const inactivePageStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  flex-shrink: 0;
  background: rgba(244, 244, 244, 0.2);
  color: #5c6b7e;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    background: rgba(217, 217, 217, 0.31);
    color: #5c6b7e;
  }
`

export const Pagination = () => {
  const contentContext = useContext(ContentContext)
  if (!contentContext) {
    throw new Error('ContentContext is not provided.')
  }
  const { videos, channels, criteria } = contentContext
  const { id: routeId } = useParams<{ id?: string }>()
  const page = routeId ? parseInt(routeId, 10) : 1

  const renderPaginationLinks = () => {
    const dataArray = criteria === 'video' ? videos : channels
    const totalItems = dataArray.length
    const itemsPerPage = 10
    const totalPages =
      totalItems % 10 === 0 ? totalItems / itemsPerPage : Math.floor(totalItems / itemsPerPage) + 1
    return (
      <>
        <div
          css={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            paddingTop: '45px',
          }}
        >
          <Link key={1} to={'/'} css={page === 1 ? activePageStyle : inactivePageStyle}>
            1
          </Link>
          {Array.from({ length: totalPages - 1 }).map((_, index) => (
            <Link
              key={index + 2}
              to={`/${index + 2}`}
              css={page === index + 2 ? activePageStyle : inactivePageStyle}
            >
              {index + 2}
            </Link>
          ))}
        </div>
      </>
    )
  }
  return <div>{renderPaginationLinks()}</div>
}
