import axios from 'axios'
import type { ScaleCategory, ScaleDetails, ChordCategory, ChordDetails } from "@/types/interfaces"

export const fetchScales = async(): Promise<ScaleCategory[]> => {
  const response = await axios.get<ScaleCategory[]>('/scales')
  return response.data
}

export const fetchScale = async(scaleParam: string, tonicParam: string): Promise<ScaleDetails> => {
  const response = await axios.get<ScaleDetails>(`/scales/${scaleParam}?tonic=${tonicParam}`)
  return response.data
}

export const fetchChords = async(): Promise<ChordCategory[]> => {
  const response = await axios.get<ChordCategory[]>('/chords')
  return response.data
}

export const fetchChord = async(chordParam: string, rootParam: string): Promise<ChordDetails> => {
  const response = await axios.get<ChordDetails>(`/chords/${chordParam}?root=${rootParam}`)
  return response.data
}
