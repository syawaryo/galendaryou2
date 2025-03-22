import React, { createContext, useState, FC } from 'react'

export type ChannelType = {
  id: string
  title: string
  viewCount: number
  subscriberCount: number
  videoCount: number
}

export type VideoType = {
  id: string
  title: string
  viewCount: string
  likeCount: string
}

export type ContentContextProps = {
  channels: ChannelType[]
  videos: VideoType[]
  criteria: 'video' | 'chname' | 'none'
  channelUpdate: (inputChannel: ChannelType[]) => void
  videoUpdate: (inputVideo: VideoType[]) => void
  criteriaUpdate: (inputCriteria: 'video' | 'chname' | 'none') => void
}

export const ContentContext = createContext<ContentContextProps | undefined>(undefined)

export const ContentProvider: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [channels, setChannels] = useState<ChannelType[]>([])
  const [videos, setVideos] = useState<VideoType[]>([])
  const [criteria, setCriteria] = useState<'video' | 'chname' | 'none'>('none')

  const channelUpdate = (inputChannel: ChannelType[]) => {
    setChannels(inputChannel)
  }

  const videoUpdate = (inputVideo: VideoType[]) => {
    setVideos(inputVideo)
  }

  const criteriaUpdate = (inputCriteria: 'video' | 'chname' | 'none') => {
    setCriteria(inputCriteria)
  }

  return (
    <ContentContext.Provider
      value={{ channels, videos, criteria, channelUpdate, videoUpdate, criteriaUpdate }}
    >
      {children}
    </ContentContext.Provider>
  )
}
