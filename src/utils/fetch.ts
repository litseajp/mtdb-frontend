import axios from 'axios'
import type { ScaleCategory, ScaleDetails, ChordCategory, ChordDetails, KeyCategory, AvailableChords } from "@/types/interfaces"

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

export const fetchAvailableChords = async(): Promise<KeyCategory[]> => {
  const response = await axios.get<KeyCategory[]>('/available_chords')
  return response.data
}

export const fetchAvailableChord = async(keyParam: string): Promise<AvailableChords> => {
  const response = await axios.get<AvailableChords>(`/available_chords/${keyParam}`)
  return response.data
}
