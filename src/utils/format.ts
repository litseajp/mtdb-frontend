import intervalDict from '@/constants/intervalDict'
import type { ScaleTone } from '@/types/interfaces'

const symbols: { [key: string]: string } = { 'sharp': '♯', 'flat': '♭', 'doublesharp': '♯♯', 'doubleflat': '♭♭' }

export function formatNote(note: string): string  {
  if (note.length === 1) {
    return note.toUpperCase()
  } else {
    return note.slice(0, 1).toUpperCase() + symbols[note.slice(1)]
  }
}

interface ScaleToneTableItem {
  interval: string
  note: string
  type: string
}

export function formatScaleToneTableItems(tones: ScaleTone[]): ScaleToneTableItem[] {
  const scaleToneTableItems: ScaleToneTableItem[] = []

  tones?.forEach(tone => {
    scaleToneTableItems.push({
      interval: intervalDict[tone.interval],
      note: formatNote(tone.note),
      type: tone.tonetype
    })
  })

  return scaleToneTableItems
}
