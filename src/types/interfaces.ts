export interface ScaleInfo {
  path: string
  name: string
  description: string
}

export interface ScaleCategory {
  category: string
  scales: ScaleInfo[]
}
