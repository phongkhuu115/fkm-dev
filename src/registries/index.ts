import { TNestedKeyOfObject } from '@/types'
import { icons } from './icon.registry'

export * from './icon.registry'

export type TRegistry = TNestedKeyOfObject<typeof registries>

export const registries = {
  icons: icons,
}