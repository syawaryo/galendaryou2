import axios from 'axios'

const YOUTUBE_SEARCH_API_URI = 'https://www.googleapis.com/youtube/v3/search'
const YOUTUBE_CHANNELS_API_URI = 'https://www.googleapis.com/youtube/v3/channels'
const YOUTUBE_VIDEO_API_URI = 'https://www.googleapis.com/youtube/v3/videos'
const API_KEY = 'AIzaSyAny7oZfe2Rs_F48deDwSKSWmrWLPgk1C8'

type youtubeSearchParams = {
  period: string[]
  searchcriteria: string
  inputword: string
}

type ResponseType = {
  id: {
    kind: string
    videoId: string
    channelId: string
    playlistId: string
  }
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      (key: string): {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    liveBroadcastContent: string
  }
}

type channelResponseType = {
  id: string
  snippet: {
    title: string
    description: string
    customUrl: string
    publishedAt: string
    thumbnails: {
      (key: string): {
        url: string
        width: number
        height: number
      }
    }
    defaultLanguage: string
    localized: {
      title: string
      description: string
    }
    country: string
  }
  statistics: {
    viewCount: number
    subscriberCount: number // this value is rounded to three significant figures
    hiddenSubscriberCount: boolean
    videoCount: number
  }
}

type videoResponseType = {
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      (key: string): {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    tags: string[]
    categoryId: string
    liveBroadcastContent: string
    defaultLanguage: string
    localized: {
      title: string
      description: string
    }
    defaultAudioLanguage: string
  }
  statistics: {
    viewCount: string
    likeCount: string
    dislikeCount: string
    favoriteCount: string
    commentCount: string
  }
}

export const FetchYoutubeChannelData = async (input: youtubeSearchParams) => {
  const searchParams = {
    part: 'id,snippet',
    key: API_KEY,
    maxResults: '30',
    q: input.inputword,
    type: 'channel',
  }

  const searchResponse = await axios.get(YOUTUBE_SEARCH_API_URI, { params: searchParams })
  console.log(searchResponse)
  if (searchResponse.data.items && searchResponse.data.items.length !== 0) {
    const channelSummaries = searchResponse.data.items.map((item: ResponseType) => ({
      id: item.id.channelId,
    }))
    const channelIds = channelSummaries.map((channel: { id: string }) => channel.id).join(',')

    const channelParams = {
      part: 'id,snippet,statistics',
      key: API_KEY,
      id: channelIds,
      maxResults: '30',
    }
    const channelResponse = await axios.get(YOUTUBE_CHANNELS_API_URI, { params: channelParams })
    console.log(channelResponse)
    const channelDetails = channelResponse.data.items.map((item: channelResponseType) => ({
      id: item.id,
      title: item.snippet.title,
      viewCount: item.statistics.viewCount,
      subscriberCount: item.statistics.subscriberCount,
      videoCount: item.statistics.videoCount,
    }))
    return channelDetails
  } else {
    console.log('no items')
  }
}

export const FetchYoutubeVideoData = async (input: youtubeSearchParams) => {
  const formatDate = (a: string): string => {
    const year = a.slice(0, 4)
    const month = a.slice(4, 6)
    const date = a.slice(6, 8)
    return `${year}-${month}-${date}T00:00:00Z`
  }
  const publishedAfter = formatDate(input.period[0])
  const publishedBefore = formatDate(input.period[1])
  const searchParams = {
    part: 'id,snippet',
    key: API_KEY,
    maxResults: '30',
    q: input.inputword,
    type: 'video',
    publishedAfter: publishedAfter,
    publishedBefore: publishedBefore,
  }

  const searchResponse = await axios.get(YOUTUBE_SEARCH_API_URI, { params: searchParams })
  console.log(searchResponse)
  if (searchResponse.data.items && searchResponse.data.items.length !== 0) {
    const viodeIds = searchResponse.data.items
      .map((item: ResponseType) => item.id.videoId)
      .join(',')
    const videoPrams = {
      part: 'id, snippet, statistics',
      id: viodeIds,
      key: API_KEY,
      maxResults: '30',
    }

    const videoResponse = await axios.get(YOUTUBE_VIDEO_API_URI, { params: videoPrams })
    console.log(videoResponse)
    const videoDetails = videoResponse.data.items.map((item: videoResponseType) => ({
      id: item.id,
      title: item.snippet.title,
      viewCount: item.statistics.viewCount,
      likeCount: item.statistics.likeCount,
    }))
    return videoDetails
  } else {
    console.log('no items')
  }
}
