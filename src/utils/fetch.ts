import axios from 'axios'
import type { ScaleCategory } from "@/types/interfaces"

export const fetchScales = async(): Promise<ScaleCategory[]> => {
  const response = await axios.get<ScaleCategory[]>('/scales')
  return response.data
}
