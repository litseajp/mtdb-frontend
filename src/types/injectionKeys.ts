import type { InjectionKey, Ref } from 'vue'
import type { ScaleDetails, ChordDetails, DiagramTone } from './interfaces'

export const scaleKey = Symbol() as InjectionKey<Ref<ScaleDetails>>

export const chordKey = Symbol() as InjectionKey<Ref<ChordDetails>>

export const tonesKey = Symbol() as InjectionKey<Ref<DiagramTone[]>>
