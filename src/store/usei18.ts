import { create } from 'zustand'

import MessagesEng from '../locales/en-Us.json'
import MessagesES from '../locales/es-Es.json'

interface I18State {
  mensajes: any
  locale: string
  changeLan: (lan: string) => void
}

export const useI18Store = create<I18State>((set) => {
  return {
    mensajes: MessagesEng,
    locale: 'en-US',
    changeLan: (lan: string) => {
      switch (lan) {
        case 'en-US':
          set({ mensajes: MessagesES, locale: 'es-ES' })
          break
        case 'es-ES':
          set({ mensajes: MessagesEng, locale: 'en-US' })
          break
        default:
          set({ mensajes: MessagesEng, locale: 'es-ES' })
          break
      }
    },
  }
})
