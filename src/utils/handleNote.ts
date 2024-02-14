import { chromaticNoteList } from '@/constants/noteLists'
import type { ChordPosition } from '@/types/interfaces'

function normalizeEnharmonicNoteWithDoubleSharp(note: string): string {
  if (note.slice(0, 1) === 'b') {
    return 'csharp'
  } else {
    return chromaticNoteList[chromaticNoteList.indexOf(note.slice(0, 1)) + 2]
  }
}

function normalizeEnharmonicNoteWithDoubleFlat(note: string): string {
  if (note.slice(0, 1) === 'c') {
    return 'asharp'
  } else {
    return chromaticNoteList[chromaticNoteList.indexOf(note.slice(0, 1)) - 2]
  }
}

function normalizeEnharmonicNoteWithFlat(note: string): string {
  if (note.slice(0, 1) === 'c') {
    return 'b'
  } else {
    return chromaticNoteList[chromaticNoteList.indexOf(note.slice(0, 1)) - 1]
  }
}

export function normalizeEnharmonicNote(note: string): string {
  if (note.includes('doublesharp')) {
    return normalizeEnharmonicNoteWithDoubleSharp(note)
  } else if (note.includes('doubleflat')) {
    return normalizeEnharmonicNoteWithDoubleFlat(note)
  } else if (note.includes('flat')) {
    return normalizeEnharmonicNoteWithFlat(note)
  } else if (note === 'esharp') {
    return 'f'
  } else if (note === 'bsharp') {
    return 'c'
  } else {
    return note
  }
}

const notesx2 = [...chromaticNoteList, ...chromaticNoteList]

export function calculateSemitoneDistance(note1: string, note2: string): number {
  const note1Enharmonic = normalizeEnharmonicNote(note1)
  const note2Enharmonic = normalizeEnharmonicNote(note2)

  const note1Index = chromaticNoteList.indexOf(note1Enharmonic)
  const notesFromTonic = notesx2.slice(note1Index)
  
  return notesFromTonic.indexOf(note2Enharmonic)
}

export function calculateFirstFretNumber(position: ChordPosition):number {
  let minFretNum = 99
  let maxFretNum = 0

  for (const fretNum of Object.values(position)) {
    if (fretNum > 0 && fretNum < minFretNum) {
      minFretNum = fretNum
    }

    if (fretNum > maxFretNum) {
      maxFretNum = fretNum
    }
  }

  return (maxFretNum < 4) ? 0 : minFretNum - 1
}
