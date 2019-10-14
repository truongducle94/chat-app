import { Dimensions, PixelRatio, Platform } from 'react-native'

export const { width, height } = Dimensions.get('screen')
export const pixelRatio = PixelRatio.get()
export const platformOS = Platform.OS