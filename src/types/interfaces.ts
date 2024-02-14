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

export interface DiagramTone {
  interval: string
  note: string
}
