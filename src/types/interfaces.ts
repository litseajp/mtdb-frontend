export interface ScaleInfo {
  path: string
  name: string
  description: string
}

export interface ScaleCategory {
  category: string
  scales: ScaleInfo[]
}

export interface ScaleTone {
  interval: string
  note: string
  tonetype: string
}

export interface ScaleDetails {
  name: string
  description: string
  tones: ScaleTone[]
}

export interface ChordInfo {
  path: string
  quality: string
  name: string
  description: string
}

export interface ChordCategory {
  category: string
  chords: ChordInfo[]
}

export interface ChordTone {
  interval: string
  note: string
}

export interface ChordPosition {
  string1: number
  string2: number
  string3: number
  string4: number
  string5: number
  string6: number
}

export interface ChordDetails {
  name: string
  description: string
  tones: ChordTone[]
  positions: ChordPosition[]
}

export interface DiagramTone {
  interval: string
  note: string
}

export interface KeyInfo {
  path: string
  name: string
  diatonic: string[]
}

export interface KeyCategory {
  category: string
  keys: KeyInfo[]
}
