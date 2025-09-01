import { TNestedKeyOfObject } from '@/types'
import SquareDots from '../assets/svg/square-dots.svg'
import Quote from '../assets/svg/quote.svg'

export const icons = {
  "square-dots": SquareDots,
  quote: Quote,
}

export type TImagesRegistry = TNestedKeyOfObject<typeof icons>