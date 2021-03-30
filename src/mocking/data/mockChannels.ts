import { channelAvatarSources, channelPosterSources } from './mockImages'
import rawChannels from './raw/channels.json'
import rawCoverVideo from './raw/coverVideo.json'
import { AllChannelFieldsFragment, AssetAvailability } from '@/api/queries'
import { languages } from '@/config/languages'

export type MockChannel = AllChannelFieldsFragment

export const regularMockChannels: MockChannel[] = rawChannels.map((rawChannel, idx) => ({
  ...rawChannel,
  __typename: 'Channel',
  coverPhotoUrl: channelPosterSources[idx % channelPosterSources.length],
  coverPhotoAvailability: AssetAvailability.Accepted,
  avatarPhotoUrl: channelAvatarSources[idx % channelAvatarSources.length],
  avatarPhotoAvailability: AssetAvailability.Accepted,
  createdAt: new Date(rawChannel.createdAt),
  isPublic: true,
  isCensored: false,
  language: languages[Math.floor(Math.random() * languages.length)],
}))

export const coverMockChannel: MockChannel = {
  ...rawCoverVideo.channel,
  __typename: 'Channel',
  createdAt: new Date(rawCoverVideo.channel.createdAt),
  avatarPhotoUrl: rawCoverVideo.channel.avatarPhotoUrl,
  avatarPhotoAvailability: AssetAvailability.Accepted,
  coverPhotoAvailability: AssetAvailability.Invalid,
}

const mockChannels: MockChannel[] = [...regularMockChannels, coverMockChannel]

export default mockChannels
