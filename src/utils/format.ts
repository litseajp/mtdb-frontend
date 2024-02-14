const symbols: { [key: string]: string } = { 'sharp': '♯', 'flat': '♭', 'doublesharp': '♯♯', 'doubleflat': '♭♭' }

export function formatNote(note: string): string  {
  if (note.length === 1) {
    return note.toUpperCase()
  } else {
    return note.slice(0, 1).toUpperCase() + symbols[note.slice(1)]
  }
}
