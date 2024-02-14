import type { InjectionKey, Ref } from 'vue'
import type { ScaleDetails, DiagramTone } from './interfaces'

export const scaleKey = Symbol() as InjectionKey<Ref<ScaleDetails>>

export const tonesKey = Symbol() as InjectionKey<Ref<DiagramTone[]>>
