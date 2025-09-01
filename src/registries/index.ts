import { TNestedKeyOfObject } from '@/types'
import { images } from './image.registry'

export * from './image.registry'

export type TRegistry = TNestedKeyOfObject<typeof registries>

export const registries = {
  images: images,
}