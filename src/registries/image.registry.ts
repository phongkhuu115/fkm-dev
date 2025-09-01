import { TNestedKeyOfObject } from '@/types'
import SquareDots from '../assets/svg/square-dots.svg'

export const images = {
  "square-dots": SquareDots,
}

export type TImagesRegistry = TNestedKeyOfObject<typeof images>