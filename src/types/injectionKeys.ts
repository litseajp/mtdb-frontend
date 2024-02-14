import type { InjectionKey, Ref } from 'vue'
import type { ScaleDetails } from './interfaces'

export const scaleKey = Symbol() as InjectionKey<Ref<ScaleDetails>>
