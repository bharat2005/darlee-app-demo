import { View, Text } from 'react-native'
import React from 'react'
import { useVideoPlayer, VideoView } from 'expo-video'

const MyVideoView = () => {

  const videoPlayer = useVideoPlayer(require('../../../assets/videos/video.mp4'), player => {
player.loop = true
player.muted = true
player.play()
  })

  return (
  <VideoView player={videoPlayer} style={{position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:0}}  nativeControls={false} contentFit='cover'/>
  )
}

export default MyVideoView