import { keyList } from '@/constants/keyList'
import type { DiagramTone } from '@/types/interfaces'
import { calculateSemitoneDistance, normalizeEnharmonicNote } from './handleNote'

export function mapKeyInterval(tones: DiagramTone[]): { [key: string]: string } {
  const keyToInterval: { [key: string]: string } = {}
  let tonicIndex = 0

  tones?.forEach((tone, idx) => {
    if (idx === 0) {
      const tonicKey = normalizeEnharmonicNote(tone.note) + '1'
      keyToInterval[tonicKey] = tone.interval
      tonicIndex = keyList.indexOf(tonicKey)
    } else {
      const toneIndex = tonicIndex + calculateSemitoneDistance(tones[0].note, tone.note)
      keyToInterval[keyList[toneIndex]] = tone.interval
    }
  })

  return keyToInterval
}
