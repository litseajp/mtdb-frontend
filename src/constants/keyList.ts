import { chromaticNoteList } from './noteLists'

export const keyList = [...chromaticNoteList.map((note) => note + '1'), ...chromaticNoteList.map((note) => note + '2')]
